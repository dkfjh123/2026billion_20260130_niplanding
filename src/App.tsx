import { useEffect } from "react";
import { ClipboardList, SlidersHorizontal, Handshake } from "lucide-react";

import ContactForm from "./ContactForm";

import logoCircle from "../nip_assets/logo/logo_circle_blue.png";
import conceptShot from "../nip_assets/menu/컨셉샷 1.jpg";
import store3 from "../nip_assets/store/매장사진3.jpg";
import doughTexture from "../nip_assets/dough/폴리쉬도우2.jpg";
import mKkwari from "../nip_assets/menu/꽈리불고기.jpg";
import mCombi from "../nip_assets/menu/콤비네이션.jpg";
import mBuldak from "../nip_assets/menu/불닭고구마.jpg";
import mBanban from "../nip_assets/menu/반반피자.jpg";
import mFourCheese from "../nip_assets/menu/4치즈.jpg";
import mPepperoni from "../nip_assets/menu/페퍼로니.jpg";
import mHawaiian from "../nip_assets/menu/스위트하와이안.jpg";
import mTaco from "../nip_assets/menu/타코.jpg";

// 헌법 6절 필수 고지 — 첫 화면 근처 + CTA 근처 2곳 게재 의무
const NOTICE =
  "본 페이지는 가맹점 모집 페이지가 아닙니다. 파트너 매장은 노아이디어피자 지점이 아니며, 기존 브랜드명·로고·간판을 사용하지 않고 독립 상호로 운영합니다. 제공되는 상품과 레시피는 파트너 매장에 맞게 선택적으로 도입할 수 있습니다.";

const track = (placement: string) => {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") w.gtag("event", "cta_click", { placement });
};

const CONTACT_MAIL = "mailto:noideacompany2024@gmail.com";
const CONTACT_TEL = "tel:0507-1327-0174";
const NAVER_MAP =
  "https://map.naver.com/p/entry/place/1071004649?lng=126.9816937&lat=37.489736&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh";

const trackLead = () => {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") w.gtag("event", "generate_lead", { method: "contact_form" });
};

const SEE = [
  { t: "도우", d: "24–48시간 저온 숙성 중인 폴리쉬 도우 숙성실" },
  { t: "소스", d: "원팩 소스와 노아이디어 베이스 — 그 차이를 직접 맛으로" },
  { t: "현장", d: "점심 피크에 실제로 돌아가는 주방과 홀" },
  { t: "상담", d: "메뉴 · 동선 · 거래처 — 궁금한 건 그 자리에서 바로" },
];

const FAQS = [
  {
    q: "가맹인가요?",
    a: "아니요. 가맹 계약이 아니라 전용상품 공급 계약입니다. 가맹비·로열티·인테리어 강제·영업 통제가 없습니다. 간판도 가격도 운영도 대표님 것입니다.",
  },
  {
    q: "노아이디어피자 간판을 쓸 수 있나요?",
    a: "아니요. 파트너 매장은 독립 상호로 운영하며, 노아이디어피자의 브랜드명·로고·간판은 사용하지 않습니다. 빌려드리는 건 이름이 아니라 검증된 베이스와 메뉴 감도입니다.",
  },
  {
    q: "구매를 강제하나요?",
    a: "아니요. 도입할 품목과 수량은 대표님이 정합니다. 의무 발주도, 위약금도 없어요. 저희 제품이 경쟁력이 없다고 느껴지면 쓰시다가 안 쓰시면 됩니다 — 묶어두는 게 아니라 계속 선택받는 게 저희 일이라서요. 그래서 도입 전에 샘플 테스트부터 권합니다.",
  },
  {
    q: "직영점 방문이나 샘플에 비용이 있나요?",
    a: "직영점 방문은 무료입니다. 샘플 테스트 조건은 상담에서 매장 상황에 맞게 안내드립니다.",
  },
];

const MENU = [
  { img: mKkwari, name: "꽈리불고기" },
  { img: mCombi, name: "콤비네이션" },
  { img: mBuldak, name: "불닭고구마" },
  { img: mBanban, name: "반반피자" },
  { img: mFourCheese, name: "포 치즈" },
  { img: mPepperoni, name: "페퍼로니" },
  { img: mHawaiian, name: "스위트 하와이안" },
  { img: mTaco, name: "타코" },
];

function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal, .stagger").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      {/* NAV */}
      <nav className="nv">
        <div className="nav-in">
          <a href="#" className="brand">
            <img src={logoCircle} alt="" />
            <span className="nm">노아이디어서플라이</span>
          </a>
          <div className="nav-links">
            <a href="#receipts">비용</a>
            <a href="#solution">공급 방식</a>
            <a href="#menu">메뉴</a>
            <a href="#visit">도입 절차</a>
            <a href="#faq">FAQ</a>
          </div>
          <a href="#contact" className="nav-cta" onClick={() => track("nav")}>도입 문의</a>
        </div>
      </nav>

      {/* HERO — 밝은 배경 + 실사 분할 */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div className="hero-tx">
            <h1 className="h1">
              간판은 그대로,<br />
              피자 경쟁력만<br />
              <span className="blue">노아이디어처럼.</span>
            </h1>
            <p className="hero-sub">
              직영점에서 검증한 도우·소스·토핑을 내 가게 메뉴로.
              가맹 없이 — 내 상호, 내 가격 그대로.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-pri" onClick={() => track("hero")}>도입 문의하기 <span className="ar">→</span></a>
              <a href="#visit" className="btn btn-ghost">직영점에서 직접 확인</a>
            </div>
          </div>
          <div className="hero-ph">
            <div className="img"><img src={conceptShot} alt="노아이디어피자 시그니처 상차림" /></div>
            <span className="tag"><b>직영점 검증</b> 시그니처 라인업</span>
          </div>
        </div>
      </header>

      {/* 신뢰 숫자 띠 */}
      <section className="creds">
        <div className="creds-in stagger">
          <div className="cred"><div className="v">2023</div><div className="l">이수 직영 1호점에서 시작</div></div>
          <div className="cred"><div className="v">24–48<u>H</u></div><div className="l">폴리쉬 도우 저온 숙성</div></div>
          <div className="cred"><div className="v">0원</div><div className="l">가맹비 · 로열티 — 애초에 가맹이 아닙니다</div></div>
          <div className="cred"><div className="v">100%</div><div className="l">내 상호 · 내 가격 운영</div></div>
        </div>
      </section>

      {/* NON-FRANCHISE NOTICE (헌법 6절 — 첫 화면 근처) */}
      <section className="notice">
        <div className="wrap notice-in reveal">
          <h2 className="notice-big">가맹 모집, <span className="hl">아닙니다.</span></h2>
          <p className="notice-sub">가맹비도, 로열티도, 본사 간판도 없습니다.<br />직영점에서 검증한 베이스만 공급합니다 — 간판도, 가격도, 운영도 대표님 것.</p>
          <p className="notice-legal">{NOTICE}</p>
        </div>
      </section>

      {/* STATEMENTS */}
      <section className="sec stmts">
        <div className="wrap">
          <div className="stmt reveal">
            <h2 className="sx">손님은 <span className="hl">한 입에</span> 압니다.</h2>
            <p className="ss">주인 없는 원팩인지, 레시피 주인이 있는 진짜인지.</p>
          </div>
          <div className="stmt reveal">
            <h2 className="sx">그 '진짜', 혼자 만들면 <span className="hl">몸이 갈립니다.</span></h2>
            <p className="ss">새벽 육수, 도우 숙성, 거래처 뚫기까지 — 전부 혼자.</p>
          </div>
          <div className="stmt reveal">
            <h2 className="sx">그래서 직영점에서 검증한 베이스를 <span className="hl">그대로 드립니다.</span></h2>
            <p className="ss">간판도 가격도 운영도 100% 대표님 것 — 가맹점을 모으는 게 아니니까요.</p>
          </div>
          <div className="stmt punchline reveal">
            <h2 className="sx">혼자 창업, 하지만 같이 가는 길.</h2>
          </div>
        </div>
      </section>

      {/* 0원 영수증 비교 */}
      <section className="sec receipts" id="receipts">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="kick">도입 비용</span>
            <h2>창업을 준비하면서,<br />이 영수증을 비교해 보세요.</h2>
          </div>
          <div className="rc-grid stagger">
            <div className="rc bad">
              <div className="rc-body">
                <p className="rc-t">RECEIPT</p>
                <p className="rc-name">일반 프랜차이즈</p>
                <div className="rc-rows">
                  <div className="rc-row"><span className="k">가맹비</span><span className="a">1,000만 원</span></div>
                  <div className="rc-row"><span className="k">로열티</span><span className="a">매월 100만 원</span></div>
                  <div className="rc-row"><span className="k">인테리어 (본사 기준)</span><span className="a">8,000만 원</span></div>
                  <div className="rc-row"><span className="k">의무 발주 · 위약금</span><span className="a">계약 조건</span></div>
                  <div className="rc-row"><span className="k">간판 · 가격 · 운영</span><span className="a">본사 통제</span></div>
                </div>
                <div className="rc-total"><span className="k">시작 전 부담</span><span className="a">9,000만 원~</span></div>
              </div>
              <div className="rc-zig" />
            </div>
            <div className="rc good">
              <span className="rc-stamp">전부 0원</span>
              <div className="rc-body">
                <p className="rc-t">RECEIPT</p>
                <p className="rc-name">노아이디어서플라이</p>
                <div className="rc-rows">
                  <div className="rc-row"><span className="k">가맹비</span><span className="a">0원</span></div>
                  <div className="rc-row"><span className="k">로열티</span><span className="a">0원</span></div>
                  <div className="rc-row"><span className="k">인테리어 강제</span><span className="a">없음</span></div>
                  <div className="rc-row"><span className="k">의무 발주 · 위약금</span><span className="a">없음</span></div>
                  <div className="rc-row"><span className="k">간판 · 가격 · 운영</span><span className="a">100% 대표님</span></div>
                </div>
                <div className="rc-total"><span className="k">도입 부담</span><span className="a">0원</span></div>
              </div>
              <div className="rc-zig" />
            </div>
          </div>
          <p className="rc-note reveal">* 좌측은 업계에서 흔히 보는 수준의 예시이며, 브랜드·업종마다 다릅니다. 노아이디어서플라이는 가맹 계약이 아닌 전용상품 공급 계약으로, 상품 구매 비용 외 별도 부담이 없습니다.</p>
          <div className="rc-turn reveal">
            <p className="a">무조건 나쁜 구조가 아닙니다. 정말 좋은 본사도 있으니까요.</p>
            <p className="b">다만 그 비용과 시간이 아깝다고 느끼셨다면 — 아래를 보세요.</p>
          </div>
        </div>
      </section>

      {/* ATMOSPHERE BAND */}
      <section className="band reveal">
        <img src={store3} alt="노아이디어피자 직영 매장" />
        <div className="scr" />
        <div className="wrap tx">
          <span className="kick">직영점에서 검증</span>
          <h2 style={{ marginTop: 12 }}>사무실에서 기획한<br />메뉴가 아닙니다.</h2>
          <p className="lead">매일 매장을 열고 손님을 받으며 세팅한 것들입니다. 직영점에서 검증한 레시피 그대로, 베이스는 HACCP 인증 전용 라인에서 생산해 공급합니다.</p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="sec" id="solution">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="kick">공급 방식</span>
            <h2>가맹이 아니라, 같이 갑니다.</h2>
            <p className="lead">검증된 전용상품 + 대표님 브랜드 + 믿고 거래해온 거래처까지. 상담은 구매 압박이 아니라 적용 가능성을 확인하는 과정입니다.</p>
          </div>
          <div className="sols stagger">
            <div className="sol">
              <div className="ic"><ClipboardList /></div>
              <h3>상품 모듈 상담</h3>
              <p>도우, 소스, 토핑, 사이드 메뉴를 대표님 매장 조건에 맞춰 검토합니다.</p>
            </div>
            <div className="sol">
              <div className="ic"><SlidersHorizontal /></div>
              <h3>100% 자율 운영</h3>
              <p>상호, 가격, 메뉴명, 판매 방식은 파트너 매장의 판단과 상권에 맞게 유지합니다.</p>
            </div>
            <div className="sol">
              <div className="ic"><Handshake /></div>
              <h3>제조사·협력업체 연결</h3>
              <p>돈까스를 하든, 앞다리·뒷다리살을 받든 — 수년간 거래하며 검증한 곳을 소개합니다. 최종 선택과 거래는 대표님 몫입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DECLARATION — 브랜드 블루 모먼트 */}
      <section className="decl">
        <div className="wrap decl-in reveal">
          <span className="kick">저희가 일하는 방식</span>
          <p className="d-quote">묶어두는 게 아니라,<br /><span className="hl hd">계속 선택받는 게</span> 저희 일입니다.</p>
          <p className="d-sub">의무 발주도, 위약금도 없습니다. 경쟁력이 없다고 느껴지면 — 쓰시다가 멈추시면 됩니다. 그래서 저희는 매일 더 좋아질 수밖에 없습니다.</p>
        </div>
      </section>

      {/* MENU LINEUP */}
      <section className="sec" id="menu">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="kick">검증된 라인업</span>
            <h2>반응이 검증된 상품 모듈.</h2>
            <p className="lead">직영 매장에서 실제로 팔리고, 다시 찾게 만든 메뉴들. 대표님 매장에 붙일 수 있는 상품성은 여기서 출발합니다.</p>
          </div>
          <div className="menu-grid reveal" aria-label="메뉴 라인업">
            {MENU.map((m) => (
              <div className="mi" key={m.name}>
                <img src={m.img} alt={m.name} loading="lazy" />
                <div className="ov" />
                <div className="nm"><b>{m.name}</b></div>
              </div>
            ))}
          </div>
          <p className="menu-note">위 메뉴는 도입 시 대표님 매장 컨셉에 맞춰 선택·변형됩니다.</p>
        </div>
      </section>

      {/* 대상별 안내 */}
      <section className="sec vision">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="kick">이런 분께 맞습니다</span>
            <h2>메뉴 고민, 피자가 무기가 됩니다.</h2>
          </div>
          <div className="segs stagger">
            <div className="seg"><span className="lab">기존 운영자</span><p className="t">지금 매장에 부족한 한 끗을 붙이고 싶다면</p><p className="d">새 간판 필요 없이 — 부족한 시그니처와 베이스 경쟁력만 더해, 객단가와 재방문 이유를 만듭니다.</p></div>
            <div className="seg"><span className="lab">예비 창업자</span><p className="t">무에서 시작하지만, 혼자 헤매고 싶지 않다면</p><p className="d">브랜드 기획부터 주방 동선·POS까지, 실제 운영 경험으로 함께 봅니다. 로열티 없이, 내 브랜드로.</p></div>
          </div>
        </div>
      </section>

      {/* BRAND + PROOF */}
      <section className="sec" id="proof">
        <div className="wrap">
          <div className="wordmark reveal">
            <div className="big">NO IDEA<br /><span>PIZZA</span></div>
            <p className="m1">"오늘 뭐 먹지?"에서 출발한 브랜드 — 이름은 엉뚱해도, 피자는 꽤 치밀합니다.</p>
          </div>
          <div className="feat reveal">
            <img src={doughTexture} alt="폴리쉬 도우" />
            <div className="tx">
              <span className="kick">도우 · 24–48시간</span>
              <h3>폴리쉬 도우</h3>
              <p>24~48시간 저온 숙성 도우. 레시피는 매일 굽는 직영 주방에서 완성했고, 생산은 HACCP 인증 공장의 전용 라인에서 — 숙성과 핸들링은 다시 매장의 손으로. 시판 원팩과 다른 점은 하나입니다: <strong>이 도우엔 레시피의 주인이 있습니다.</strong></p>
              <a href="#contact" className="btn btn-ghost">도입 상담하기</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER LETTER */}
      <section className="letter-sec">
        <div className="wrap">
          <div className="letter reveal">
            <span className="kick">만든 사람의 편지</span>
            <div className="letter-body">
              <p>저는 피자 회사 대표이기 전에, 매장 사장입니다.</p>
              <p>노아이디어의 모든 것은 처음부터 직접 만들었습니다. 소스를 끓이고, 도우를 숙성하고 — 직영점에서 손님 반응으로 레시피를 다듬는 데 오랜 시간을 썼습니다.</p>
              <p>그리고 그 레시피를 토씨 하나 바꾸지 않고, HACCP 인증 공장의 전용 라인으로 옮겼습니다. 어느 매장에서든 같은 맛이 나오게 하려고요.</p>
              <p>시판 원팩과 다른 점은 하나입니다. <strong>이 베이스엔 레시피의 주인이 있고, 그 주인이 지금도 직영점에서 같은 베이스로 장사를 합니다.</strong></p>
              <p>간판은 대표님 것. 가격도, 운영도 대표님 것.</p>
              <p className="letter-punch">대표님의 새벽은 — 저희가 미리 끓여뒀습니다.</p>
            </div>
            <p className="letter-sign">— 노아이디어서플라이 드림</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec" id="visit">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="kick">도입 절차</span>
            <h2>말로 설명하지 않습니다.<br />돌아가는 직영점에서 보여드립니다.</h2>
            <p className="lead">문의를 남겨주시면, 영업 중인 직영점에서 직접 보고 맛본 뒤 판단하실 수 있게 안내드립니다.</p>
          </div>

          <div className="steps stagger">
            <div className="step"><span className="sn">1</span><b>문의 남기기</b><p>궁금한 점만 남겨주셔도 됩니다. 확인 후 직접 연락드립니다.</p></div>
            <div className="step"><span className="sn">2</span><b>일정 조율</b><p>전화로 가볍게 확인하고, 원하시면 직영점 방문 일정을 잡습니다.</p></div>
            <div className="step"><span className="sn">3</span><b>직영점 방문</b><p>영업 중인 주방을 직접 보고, 도우와 소스를 직접 맛보세요.</p></div>
            <div className="step"><span className="sn">4</span><b>샘플 테스트</b><p>내 매장에서 직접 구워보고 판단하세요. 도입도, 중단도 대표님 자율입니다.</p></div>
          </div>

          <div className="visit-grid reveal">
            <div className="sched">
              <p className="sched-t">직영점에서 직접 확인하는 것</p>
              {SEE.map((s) => (
                <div className="srow" key={s.t}><span className="st">{s.t}</span><p>{s.d}</p></div>
              ))}
            </div>
            <div className="visit-side">
              <div className="risk">
                <p className="risk-t">미리 약속드리는 것</p>
                <div className="rrow">가맹이 아닙니다</div>
                <div className="rrow">로열티가 없습니다</div>
                <div className="rrow">의무 발주 · 위약금이 없습니다</div>
                <div className="rrow">쓰시다가 멈추셔도 됩니다</div>
                <div className="rrow">직영점 방문 · 상담 무료</div>
              </div>
              <p className="visit-note">매장 운영자도, 예비 창업자도 환영합니다.</p>
              <a href="#contact" className="btn btn-pri" onClick={() => track("visit")}>도입 문의 남기기 <span className="ar">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec faq-sec" id="faq">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="kick">자주 묻는 질문</span>
            <h2>궁금하신 점, 미리 답해드립니다.</h2>
          </div>
          <div className="faqs stagger">
            {FAQS.map((f, i) => (
              <details className="faq" key={f.q}>
                <summary><span className="fn">Q{i + 1}</span>{f.q}<span className="fx">+</span></summary>
                <p className="fa">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap c-in reveal">
          <span className="kick">도입 문의</span>
          <h2 style={{ marginTop: 10 }}>피자가 우리 매장에 붙을지,<br />직영점에서 직접 확인하세요.</h2>
          <p className="sub">구매를 결정하라는 페이지가 아닙니다. 문의를 남겨주시면 연락드리고 — 영업 중인 직영점에서 직접 보고 맛본 뒤, 천천히 판단하세요.</p>
          <p className="punch"><span className="s"><span className="xx">원팩</span></span> <span className="s"><span className="xx">획일 프랜차이즈</span></span> — 이제, 검증된 베이스로 같이.</p>
          <p className="scarcity">직영점 방문 · 상담 무료</p>
          <ContactForm onSubmitted={trackLead} />
          <p className="alt-contact">
            전화가 편하시면 <a href={CONTACT_TEL}>0507-1327-0174</a> · 메일은{" "}
            <a href={CONTACT_MAIL}>noideacompany2024@gmail.com</a>
          </p>
          <p className="legal">{NOTICE}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ft">
        <div className="wrap">
          <div className="foot-in">
            <span className="fb"><img src={logoCircle} alt="" />노아이디어서플라이</span>
            <div className="ft-links">
              <a href="privacy.html" target="_blank" rel="noopener noreferrer">개인정보처리방침</a>
              <a href="#contact">도입 문의</a>
            </div>
          </div>
          <div className="ft-info">
            <p>(주)노아이디어컴퍼니 · 대표 박재형 · 사업자등록번호 361-86-03473</p>
            <p>본점 — 서울특별시 영등포구 국제금융로6길 33, 919호 씨123(여의도동, 맨하탄빌딩)</p>
            <p>
              이수 직영점 — 서울 동작구 동작대로33가길 5, 1층 102호 · <a href={CONTACT_TEL}>0507-1327-0174</a> ·{" "}
              <a href={NAVER_MAP} target="_blank" rel="noopener noreferrer">네이버 지도 ↗</a>
            </p>
            <p>이메일 — <a href={CONTACT_MAIL}>noideacompany2024@gmail.com</a></p>
          </div>
          <p className="ft-copy">© 2026 노아이디어서플라이 · 간판은 그대로, 피자 경쟁력만 노아이디어처럼.</p>
        </div>
      </footer>

      {/* MOBILE STICKY CTA BAR */}
      <div className="sticky-bar">
        <a href="#visit" className="sb-ghost">방문 안내</a>
        <a href="#contact" className="sb-pri" onClick={() => track("sticky")}>도입 문의하기 →</a>
      </div>
    </div>
  );
}

export default App;
