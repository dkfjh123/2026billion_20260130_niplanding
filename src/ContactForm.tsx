import { useState } from "react";

// Web3Forms 액세스 키 — 공개되어도 안전(수신 이메일의 별칭 역할, 주소는 노출되지 않음)
const WEB3FORMS_ACCESS_KEY = "bd1bd820-f4c1-457c-98fc-c59633ec1555";

const PRIVACY_SUMMARY = [
  { k: "수집 항목", v: "성함, 연락처, (선택) 이메일·매장 지역, 문의 내용" },
  { k: "수집 목적", v: "도입 상담 및 문의 응대" },
  { k: "보유 기간", v: "문의 처리 완료 후 1년 보관 뒤 파기 (삭제 요청 시 즉시)" },
];

type Status = "idle" | "sending" | "done" | "error";

export default function ContactForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return; // honeypot

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `[노아이디어피자] 도입 문의 — ${data.get("name")}`,
          from_name: "noideapizza.org 문의폼",
          성함: data.get("name"),
          연락처: data.get("phone"),
          이메일: data.get("email") || "(미입력)",
          매장상태: data.get("store_status"),
          매장지역: data.get("region") || "(미입력)",
          문의내용: data.get("message") || "(미입력)",
          개인정보동의: "동의함",
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      setStatus("done");
      form.reset();
      onSubmitted?.();
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="cform-done" role="status">
        <p className="t">문의가 접수되었습니다.</p>
        <p className="d">
          확인 후 남겨주신 연락처로 직접 연락드리겠습니다.
          <br />
          급하시면 <a href="tel:070-8121-5880">070-8121-5880</a>로 전화 주셔도 됩니다.
        </p>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={handleSubmit}>
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

      <div className="cf-grid">
        <label className="cf-field">
          <span className="cf-label">성함 *</span>
          <input type="text" name="name" required maxLength={30} placeholder="홍길동" autoComplete="name" />
        </label>
        <label className="cf-field">
          <span className="cf-label">연락처 *</span>
          <input type="tel" name="phone" required maxLength={20} placeholder="010-0000-0000" autoComplete="tel" />
        </label>
        <label className="cf-field">
          <span className="cf-label">이메일 (선택)</span>
          <input type="email" name="email" maxLength={60} placeholder="reply@example.com" autoComplete="email" />
        </label>
        <label className="cf-field">
          <span className="cf-label">현재 상태 *</span>
          <select name="store_status" required defaultValue="">
            <option value="" disabled>
              선택해 주세요
            </option>
            <option value="매장 운영 중">매장 운영 중</option>
            <option value="예비 창업자">예비 창업자</option>
            <option value="기타">기타</option>
          </select>
        </label>
        <label className="cf-field cf-full">
          <span className="cf-label">매장(예정) 지역 (선택)</span>
          <input type="text" name="region" maxLength={40} placeholder="예: 서울 동작구" />
        </label>
        <label className="cf-field cf-full">
          <span className="cf-label">문의 내용 (선택)</span>
          <textarea
            name="message"
            rows={4}
            maxLength={1000}
            placeholder="궁금한 점만 간단히 남겨주셔도 됩니다. 확인 후 직접 연락드립니다."
          />
        </label>
      </div>

      <div className="cf-consent">
        <label className="cf-check">
          <input type="checkbox" name="privacy_agree" required />
          <span>
            개인정보 수집·이용에 동의합니다 (필수) —{" "}
            <a href="privacy.html" target="_blank" rel="noopener noreferrer">
              전문 보기
            </a>
          </span>
        </label>
        <details className="cf-privacy">
          <summary>수집 항목 · 목적 · 보유 기간 요약</summary>
          <ul>
            {PRIVACY_SUMMARY.map((r) => (
              <li key={r.k}>
                <b>{r.k}</b> {r.v}
              </li>
            ))}
            <li>동의를 거부하실 수 있으나, 거부 시 문의 접수가 불가합니다.</li>
          </ul>
        </details>
      </div>

      {status === "error" && (
        <p className="cf-error" role="alert">
          전송에 실패했습니다. 잠시 후 다시 시도하시거나, <a href="tel:070-8121-5880">070-8121-5880</a>로 전화 주세요.
        </p>
      )}

      <button type="submit" className="btn btn-pri cf-submit" disabled={status === "sending"}>
        {status === "sending" ? "전송 중…" : "문의 보내기"} <span className="ar">→</span>
      </button>
    </form>
  );
}
