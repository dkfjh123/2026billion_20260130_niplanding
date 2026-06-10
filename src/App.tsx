import { useEffect, useState } from "react";
import { ClipboardList, SlidersHorizontal, Handshake, ShieldCheck } from "lucide-react";

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

const SCHEDULE = [
  { t: "10:00", d: "환영 · 참가팀 소개" },
  { t: "10:10", d: "주방 공개 — 폴리쉬 도우 숙성실 · 핸들링 시연 · 새벽 소스 공정" },
  { t: "10:35", d: "비교 시식 — 24h vs 48h 숙성 도우 · 원팩 소스 vs 직접 끓인 소스" },
  { t: "11:00", d: "3겹 동반 모델 설명 (전용상품 · 내 브랜드 · 거래처 연결)" },
  { t: "11:20", d: "Q&A · 팀별 다음 단계 예약" },
  { t: "12:00", d: "점심 피크 — 식사하며 실제 영업을 직접 관찰" },
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
    q: "시식회나 샘플에 비용이 있나요?",
    a: "본점 시식회는 무료입니다. 샘플 테스트 조건은 시식회와 상담에서 매장 상황에 맞게 안내드립니다.",
  },
];

const MENU = [
  { img: mKkwari, name: "꽈리불고기", tag: "KOREAN BBQ" },
  { img: mCombi, name: "콤비네이션", tag: "SIGNATURE" },
  { img: mBuldak, name: "불닭고구마", tag: "SPICY" },
  { img: mBanban, name: "반반피자", tag: "HALF & HALF" },
  { img: mFourCheese, name: "포 치즈", tag: "4 CHEESE" },
  { img: mPepperoni, name: "페퍼로니", tag: "CLASSIC" },
  { img: mHawaiian, name: "스위트 하와이안", tag: "SWEET" },
  { img: mTaco, name: "타코", tag: "MEX" },
];

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const until = Number(localStorage.getItem("nis_popup_until") || 0);
    if (Date.now() > until) setPopupOpen(true);
  }, []);

  const closePopup = (hours?: number) => {
    if (hours) localStorage.setItem("nis_popup_until", String(Date.now() + hours * 3600 * 1000));
    setPopupOpen(false);
  };

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
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      {/* JUNE TASTING POPUP — invitation ticket */}
      {popupOpen && (
        <div className="popup-ov" role="dialog" aria-modal="true">
          <div className="popup">
            <button className="popup-x" aria-label="닫기" onClick={() => closePopup()}>✕</button>
            <div className="popup-photo">
              <img src={store3} alt="노아이디어피자 본점" />
              <span className="popup-cap">NO IDEA PIZZA — FLAGSHIP</span>
            </div>
            <div className="popup-body">
              <svg className="popup-stamp" viewBox="0 0 120 120" aria-hidden="true">
                <circle className="bgc" cx="60" cy="60" r="57" />
                <g className="spin">
                  <defs>
                    <path id="stampCircle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                  </defs>
                  <text><textPath href="#stampCircle">JUNE TASTING · NO IDEA SUPPLY · INVITE · </textPath></text>
                </g>
                <circle className="inc" cx="60" cy="60" r="29" />
                <text className="st-center" x="60" y="67">6월</text>
              </svg>
              <p className="popup-kick"><span className="d" />JUNE INVITATION</p>
              <p className="popup-big">6월 <em>시식</em> 안내</p>
              <p className="popup-sub">실제 영업 중인 본점에서 — 굽고, 드시고, 직접 보고 결정하세요.</p>
              <div className="popup-perf"><span>INVITATION — WEEKLY</span></div>
              <div className="popup-info">
                <div><s>WEEKLY</s><b>매주 1회</b></div>
                <div><s>TEAMS</s><b>회당 4–6팀</b></div>
                <div><s>FEE</s><b>시식 무료</b></div>
                <div><s>PLACE</s><b>본점</b></div>
              </div>
              <a href="#visit" className="popup-cta" onClick={() => closePopup()}>시식회 일정 보기 <span className="ar">→</span></a>
            </div>
            <div className="popup-bar">
              <button onClick={() => closePopup(24)}>24시간 동안 보지 않기</button>
              <button onClick={() => closePopup()}>닫기</button>
            </div>
          </div>
        </div>
      )}

      {/* NAV */}
      <nav className="nv">
        <div className="nav-in">
          <a href="#" className="brand">
            <img src={logoCircle} alt="" />
            <span className="nm">No Idea Supply</span>
            <span className="b2b">B2B</span>
          </a>
          <div className="nav-links">
            <a href="#proof">PROOF</a>
            <a href="#solution">SUPPLY</a>
            <a href="#menu">MENU</a>
            <a href="#visit">VISIT</a>
            <a href="#faq">FAQ</a>
          </div>
          <a href="#contact" className="nav-cta" onClick={() => track("nav")}>시식회 신청 →</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="glow" />
        <div className="grid-bg" />
        <div className="wrap hero-in">
          <span className="h-eyebrow"><span className="d" />B2B SUPPLY · NOT A FRANCHISE</span>
          <h1 className="h1">
            <span className="b">간판은 그대로,</span>
            <br />피자 경쟁력만<br />
            <span className="blue">노아이디어처럼.</span>
          </h1>
          <p className="hero-sub">
            직영점에서 검증한 도우·소스·토핑을 내 가게 메뉴로 들이는 B2B 공급 서비스.
            가맹 없이 — 내 상호, 내 가격 그대로.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-pri" onClick={() => track("hero")}>본점 시식회 초대 신청 <span className="ar">→</span></a>
            <a href="#visit" className="btn btn-ghost">시식회에서 뭘 하나요?</a>
          </div>
          <p className="hero-scarcity">매주 1회 · 회당 4~6팀 한정 · 시식 무료</p>
        </div>
        <div className="hero-shot reveal">
          <div className="img"><img src={conceptShot} alt="노아이디어피자 시그니처 상차림" /></div>
          <div className="shot-cap">FIG.01 — 직영점 검증 시그니처 라인업</div>
        </div>
      </header>

      {/* CREDENTIALS */}
      <section className="creds">
        <div className="creds-in">
          <div className="cred"><div className="v"><em>2023</em></div><div className="l">이수 직영 1호점에서 시작</div></div>
          <div className="cred"><div className="v">24–48<u style={{ fontFamily: "var(--mono)", fontSize: "0.4em", fontWeight: 500, color: "var(--blue)", verticalAlign: "super", textDecoration: "none" }}>H</u></div><div className="l">폴리쉬 도우 저온 숙성</div></div>
          <div className="cred"><div className="v">0원</div><div className="l">가맹비 · 로열티 — 애초에 가맹이 아닙니다</div></div>
          <div className="cred"><div className="v">100%</div><div className="l">내 상호 · 내 가격 운영</div></div>
        </div>
      </section>

      {/* NON-FRANCHISE NOTICE (헌법 6절 — 첫 화면 근처) */}
      <section className="notice">
        <div className="wrap">
          <div className="notice-card reveal">
            <div className="notice-ic"><ShieldCheck /></div>
            <div>
              <p className="notice-t">여긴 가맹 모집 페이지가 아닙니다</p>
              <p className="notice-d">{NOTICE}</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="sec">
        <div className="wrap intro-grid reveal">
          <div className="intro-l">
            <p className="kick">01 — WHY NOW</p>
            <h2 style={{ marginTop: 18 }}>이제, 시대가<br />바뀌었어요.</h2>
            <div className="meta">
              <img src={logoCircle} alt="" />
              <div>NO IDEA SUPPLY<br />직영 매장에서 매일 굽고 팔며 검증한 것만.</div>
            </div>
          </div>
          <div className="intro-r">
            <p>손님들은 더 이상 못 속아요. 어디서 대충 사 온 원팩 소스인지, 새벽부터 정성 들인 진짜인지 — 한 입에 알아봅니다. 그래서 요즘은 <strong>검증된 진짜를 내는 가게에만 손님이 줄을 서요.</strong></p>
            <p>근데 그 '진짜'를 혼자 만들려면? 새벽부터 육수 끓이고, 도우 숙성하고… 시간도 사람도 돈도 다 갈립니다. 좋은 거래처 하나 뚫는 것도 한참이고요.</p>
            <p>그래서 저희가 있는 거예요. 직영점에서 수없이 굽고 팔며 검증한 도우·소스·토핑을 대표님 가게에 그대로 나눠드립니다. 도우는 본점에서 완성한 레시피 그대로 <strong>HACCP 인증 공장의 우리 레시피 전용 라인</strong>에서 생산해, 수량 걱정 없이 공급해요. 간판도 가격도 운영도 100% 대표님 거예요 — <strong>저흰 가맹점을 모으는 게 아니거든요.</strong></p>
            <p>식자재도, 고기도, 인테리어도, POS도 — 수년간 믿고 거래해온 곳들을 친구 소개해주듯 연결해드려요. 최종 선택은 언제나 대표님 몫이고요. 혼자 창업이지만, 혼자 두진 않습니다.</p>
            <p className="punch">혼자 창업, 하지만 같이 가는 길. 그래서, 같이 가요.</p>
          </div>
        </div>
      </section>

      {/* DARK PROBLEM */}
      <section className="sec dark">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="no">02</span>
            <div>
              <p className="kick" style={{ color: "var(--blue)" }}>THE NUMBERS</p>
              <h2 style={{ marginTop: 12 }}>창업을 준비하면서,<br />이 숫자들을 보셨을 겁니다.</h2>
            </div>
          </div>
          <div className="nums reveal">
            <div className="numrow"><div className="v">1,000<u>만 원</u></div><div className="l">오픈 전에 먼저 나가는 가맹비.</div></div>
            <div className="numrow"><div className="v">100<u>만 원 / 월</u></div><div className="l">매달 빠져나가는 로열티.</div></div>
            <div className="numrow"><div className="v">8,000<u>만 원</u></div><div className="l">본사 기준에 맞추는 인테리어 비용.</div></div>
          </div>
          <p className="nums-note reveal">* 업계에서 흔히 보는 수준의 예시이며, 브랜드·업종마다 다릅니다.</p>
          <div className="turn-line reveal">
            <p className="a">무조건 나쁜 구조가 아닙니다. 정말 좋은 본사도 있으니까요.</p>
            <p className="b">다만 그 비용과 시간이 아깝다고 느끼셨다면.</p>
          </div>
          <div className="qsec reveal">
            <h3>그렇다고, 개인창업은요?</h3>
            <div className="qs">
              <div className="qrow"><span className="n">Q1</span><p>시중에서 쉽게 구하는 치즈와 고기류로, 손님이 다시 올 이유를 만들 수 있을까요?</p></div>
              <div className="qrow"><span className="n">Q2</span><p>원팩 구조의 육수와 양념으로, 옆 매장과 다른 맛을 낼 수 있을까요?</p></div>
              <div className="qrow"><span className="n">Q3</span><p>누구나 쓰는 소스, 누구나 쓰는 원두로 시그니처 메뉴가 만들어질까요?</p></div>
              <div className="qrow"><span className="n">Q4</span><p>레시피도, 공급처도, 브랜드 기획도 혼자서 — 어디서부터 시작하시겠습니까?</p></div>
              <div className="qrow big"><span className="n">→</span><p>좁은 매장에서 몇 시간씩 육수 끓이고, 도우 반죽하고, 소스 만들고. 그 시간과 인건비가 식자재보다 더 나갑니다.</p></div>
            </div>
            <div className="strike">
              <p className="x">누구나 쓰는 원팩 소스로, 시그니처를?</p>
              <p className="y">새벽부터 끓인, <em>직영점에서 검증된 베이스</em>로.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ATMOSPHERE BAND */}
      <section className="band reveal">
        <img src={store3} alt="노아이디어피자 직영 매장" />
        <div className="tint" />
        <div className="scr" />
        <div className="wrap tx">
          <p className="kick" style={{ color: "var(--yellow)" }}>REAL KITCHEN — NOT A DECK</p>
          <h2 style={{ marginTop: 14 }}>사무실에서 기획한<br />메뉴가 아닙니다.</h2>
          <p className="lead">매일 매장을 열고, 줄 서는 손님을 받고, 서비스하면서 세팅한 것들입니다. 도우·소스·토핑·운영 구조 — 전부 직영점에서 검증한 뒤, 도우는 HACCP 인증 전용 라인에서 같은 공정으로 생산해 공급합니다.</p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="sec" id="solution">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="no">03</span>
            <div>
              <p className="kick">WE GO TOGETHER</p>
              <h2 style={{ marginTop: 12 }}>가맹이 아니라, 같이 갑니다.</h2>
              <p className="lead" style={{ marginTop: 16, maxWidth: "60ch" }}>검증된 전용상품 + 대표님 브랜드 + 믿고 거래해온 거래처까지. 상담은 구매 압박이 아니라 적용 가능성을 확인하는 과정입니다.</p>
            </div>
          </div>
          <div className="sols">
            <div className="sol reveal">
              <div className="ic"><ClipboardList /></div>
              <div><span className="no2">01</span><h3>상품 모듈 상담</h3><p>도우, 소스, 토핑, 사이드 메뉴를 대표님 매장 조건에 맞춰 검토합니다.</p></div>
              <span className="go">도입 가능성 →</span>
            </div>
            <div className="sol reveal">
              <div className="ic"><SlidersHorizontal /></div>
              <div><span className="no2">02</span><h3>100% 자율 운영</h3><p>상호, 가격, 메뉴명, 판매 방식은 파트너 매장의 판단과 상권에 맞게 유지합니다.</p></div>
              <span className="go">자율 구조 →</span>
            </div>
            <div className="sol reveal">
              <div className="ic"><Handshake /></div>
              <div><span className="no2">03</span><h3>제조사·협력업체 연결</h3><p>돈까스를 하든, 앞다리·뒷다리살을 받든 — 수년간 거래하며 검증한 곳을 소개합니다. 최종 선택과 거래는 대표님 몫입니다.</p></div>
              <span className="go">공급망 상담 →</span>
            </div>
          </div>
        </div>
      </section>

      {/* MENU LINEUP */}
      <section className="sec menu-sec" id="menu">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="no" style={{ color: "rgba(255,255,255,.4)" }}>04</span>
            <div>
              <p className="kick" style={{ color: "var(--blue)" }}>VERIFIED LINEUP</p>
              <h2 style={{ marginTop: 12 }}>반응이 검증된 상품 모듈.</h2>
              <p className="lead" style={{ marginTop: 16, color: "rgba(255,255,255,.6)", maxWidth: "58ch" }}>직영 매장에서 실제로 팔리고, 다시 찾게 만든 메뉴들. 대표님 매장에 붙일 수 있는 상품성은 여기서 출발합니다.</p>
            </div>
          </div>
          <div className="menu-grid reveal">
            {MENU.map((m) => (
              <div className="mi" key={m.name}>
                <img src={m.img} alt={m.name} />
                <div className="ov" />
                <div className="nm"><b>{m.name}</b><s>{m.tag}</s></div>
              </div>
            ))}
          </div>
          <p className="menu-note">위 메뉴는 도입 시 대표님 매장 컨셉에 맞춰 선택·변형됩니다.</p>
        </div>
      </section>

      {/* CERTIFICATION MARK BANNER — 정성을 보이게 */}
      <section className="banner">
        <div className="wrap banner-in reveal">
          <p className="kick" style={{ color: "var(--yellow)" }}>MAKE IT VISIBLE</p>
          <h2 style={{ marginTop: 16 }}>주방의 정성은,<br />보여야 무기가 됩니다.</h2>
          <p className="banner-sub">손님은 주방을 못 봅니다. 그래서 검증된 베이스를 도입한 매장에는, 그 정성을 손님 눈에 보여주는 장치를 함께 드립니다.</p>
          <div className="mark-mock">
            <div className="mark-chip">
              <img src={logoCircle} alt="" />
              <div>
                <b>NO IDEA BASE 사용 인증</b>
                <s>VERIFIED SUPPLY · 본점 공급</s>
              </div>
            </div>
            <p className="mark-cap">도입 매장의 메뉴판과 입구에 붙는 인증 마크 — "검증된 노아이디어 베이스 · 새벽부터 끓인 소스" 한 줄과 함께 갑니다.</p>
          </div>
        </div>
      </section>

      {/* BRAND WORDMARK */}
      <section className="sec" id="brand">
        <div className="wrap wordmark reveal">
          <p className="kick" style={{ justifySelf: "center" }}>05 — THE BRAND</p>
          <div className="big" style={{ marginTop: 18 }}>NO IDEA<br /><span>PIZZA</span></div>
          <p className="m1">"오늘 뭐 먹지?"에서 출발한 브랜드.</p>
          <p className="m2">이름은 엉뚱하지만, 메뉴 생각은 분명합니다. 좋은 재료, 폴리쉬 도우, 한국식 토핑. 다시 찾고 싶은 코발트블루의 경험. 이미 반응한 상품 모듈을 대표님 매장에 붙일 수 있는지 함께 확인하는 일입니다.</p>
          <p className="m3">간판은 대표님 브랜드로. 피자 경쟁력만 노아이디어처럼.</p>
        </div>
      </section>

      {/* VISION */}
      <section className="vision reveal">
        <img className="bg" src={conceptShot} alt="" />
        <div className="ov" />
        <div className="wrap in">
          <h2>메뉴 고민,<br />피자가 <em>무기</em>가<br />됩니다.</h2>
          <div className="vlist">
            <p>100% 점포 운영 자율성과 독립적 의사결정권</p>
            <p>개인 창업자를 위한 전용상품과 유통 솔루션 공급</p>
            <p>브랜드 기획 · 주방 동선 · 인테리어 · POS — 검증된 곳을 소개하고 함께 검토</p>
            <p>프랜차이즈식 고비용 구조보다 훨씬 가볍게 론칭</p>
          </div>
          <div className="segs">
            <div className="seg"><span className="lab">기존운영자</span><p className="t">지금 매장에 부족한 한 끗을 붙이고 싶다면</p><p className="d">새 간판을 달 필요 없이, 현재 매장의 상호와 분위기는 유지합니다. 부족한 시그니처 메뉴, 피자·사이드 상품 모듈, 소스와 토핑 경쟁력을 선택적으로 더해 객단가와 재방문 이유를 만듭니다.</p></div>
            <div className="seg"><span className="lab">예비창업자</span><p className="t">무에서 시작하지만, 혼자 헤매고 싶지 않다면</p><p className="d">브랜드 기획부터 주방 동선, 인테리어, POS 세팅까지 실제 운영 경험을 바탕으로 1:1 맞춤 기획을 함께 봅니다. 로열티 없이 자기 브랜드로 운영하는 방향입니다.</p></div>
            <div className="seg full"><p className="big">써보고 판단하세요.</p><p className="p">도입할지, 멈출지, 바꿀지 — 이후의 모든 선택은 대표님 자율입니다. 베이스는 검증된 걸로, 시그니처는 대표님 것으로. 도입이 아니라 <em>'내 메뉴를 만드는'</em> 일입니다.</p></div>
          </div>
        </div>
      </section>

      {/* PROOF FEATURED */}
      <section className="sec" id="proof">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="no">06</span>
            <div><p className="kick">THE PROOF</p><h2 style={{ marginTop: 12 }}>이름 뒤엔, 꽤 치밀한 피자.</h2></div>
          </div>
          <div className="feat reveal">
            <img src={doughTexture} alt="폴리쉬 도우" />
            <div className="tx">
              <p className="kick">DOUGH · 24-48H</p>
              <h3>폴리쉬 도우</h3>
              <p>24~48시간 저온 숙성 기반의 도우는 피자 품질을 지탱하는 제품력의 근거입니다. 레시피는 매일 굽는 직영 주방에서 완성했고, 생산은 HACCP 인증 공장의 우리 레시피 전용 라인에서 — 숙성과 핸들링은 다시 매장의 손으로. 그래서 어느 매장에 가도 같은 도우입니다. 시판 원팩과 다른 점은 하나예요: <strong>이 도우엔 레시피의 주인이 있습니다.</strong></p>
              <a href="#contact" className="btn btn-ghost" style={{ alignSelf: "flex-start", marginTop: 6, color: "var(--cobalt)" }}>도입 상담하기</a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 주 1회 본점 시식회 */}
      <section className="sec" id="visit">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="no">07</span>
            <div>
              <p className="kick">HOW IT WORKS — 본점에서 직접</p>
              <h2 style={{ marginTop: 12 }}>말로 설명하지 않습니다.<br />돌아가는 본점에서 보여드립니다.</h2>
              <p className="lead" style={{ marginTop: 16, maxWidth: "58ch" }}>매주 1회, 실제 영업 중인 본점에 초대합니다. 시식하고, 주방을 보고, 점심 피크의 실제 영업까지 직접 확인한 뒤에 판단하세요.</p>
            </div>
          </div>

          <div className="steps reveal">
            <div className="step"><span className="sn">01</span><b>시식회 신청</b><p>아래 버튼으로 신청하면 좌석 확정을 안내드립니다. 매주 1회, 회당 4~6팀.</p></div>
            <div className="step"><span className="sn">02</span><b>본점 시식회</b><p>도우 공정 공개, 원팩 vs 직접 끓인 소스 비교 시식, 점심 피크 영업 직관.</p></div>
            <div className="step"><span className="sn">03</span><b>도입 진단 상담</b><p>업종 · 설비 · 메뉴 방향을 확인하고 내 매장 적용 가능성부터 판단합니다.</p></div>
            <div className="step"><span className="sn">04</span><b>샘플 테스트</b><p>내 매장에서 직접 구워보고 결정하세요. 도입할지, 멈출지는 대표님 자율입니다.</p></div>
          </div>

          <div className="visit-grid reveal">
            <div className="sched">
              <p className="sched-t">시식회 당일 일정 — 평일 오전</p>
              {SCHEDULE.map((s) => (
                <div className="srow" key={s.t}><span className="st">{s.t}</span><p>{s.d}</p></div>
              ))}
            </div>
            <div className="visit-side">
              <div className="risk">
                <p className="risk-t">미리 약속드리는 것</p>
                <div className="rrow">가맹 계약이 아닙니다</div>
                <div className="rrow">로열티가 없습니다</div>
                <div className="rrow">의무 발주 · 위약금이 없습니다</div>
                <div className="rrow">쓰시다가 멈추셔도 됩니다</div>
                <div className="rrow">시식은 무료 · 당일 계약 권유 없음</div>
              </div>
              <p className="visit-note">참가 자격: 매장 운영자 또는 6개월 내 오픈 예정자 · 업체당 2명까지</p>
              <a href="#contact" className="btn btn-pri" onClick={() => track("visit")}>본점 시식회 초대 신청 <span className="ar">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec faq-sec" id="faq">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="no">08</span>
            <div><p className="kick">FAQ</p><h2 style={{ marginTop: 12 }}>자주 묻는 질문.</h2></div>
          </div>
          <div className="faqs reveal">
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
        <div className="glow" />
        <div className="wrap in reveal">
          <p className="kick" style={{ color: "var(--blue)" }}>LET'S TALK</p>
          <h2 style={{ marginTop: 14 }}>피자가 우리 매장에 붙을지,<br />본점에서 직접 확인하세요.</h2>
          <p className="sub">구매를 결정하라는 페이지가 아닙니다. 매주 1회, 실제 영업 중인 본점에서 시식하고 운영을 직접 본 뒤 — 도입 가능성부터 판단하세요. 도입 전엔 샘플 테스트가 먼저입니다.</p>
          <p className="punch"><span className="s">원팩</span> <span className="s">획일 프랜차이즈</span> — 이제, 검증된 베이스로 같이.</p>
          <p className="scarcity">매주 1회 · 회당 4~6팀 한정 · 시식 무료</p>
          <div className="cta-wrap">
            <a href="mailto:hello@noideasupply.example" className="btn btn-pri" onClick={() => track("contact")}>본점 시식회 초대 신청 <span className="ar">→</span></a>
            <a href="tel:000" className="btn btn-ghost" style={{ color: "#fff" }}>전화 상담 예약</a>
          </div>
          <p className="fine">시식회는 실제로 돌아가는 본점에서 — 말로 설명하지 않고, 직접 보여드립니다.</p>
          <p className="legal">{NOTICE}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ft">
        <div className="wrap foot-in">
          <span className="fb"><img src={logoCircle} alt="" />No Idea Supply</span>
          <span className="c">© 2026 NO IDEA PIZZA · B2B SUPPLY · 간판은 그대로, 피자 경쟁력만 노아이디어처럼.</span>
        </div>
      </footer>

      {/* MOBILE STICKY CTA BAR */}
      <div className="sticky-bar">
        <a href="#visit" className="sb-ghost">시식회 일정</a>
        <a href="#contact" className="sb-pri" onClick={() => track("sticky")}>본점 시식회 초대 신청 →</a>
      </div>
    </div>
  );
}

export default App;
