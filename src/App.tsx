import { useEffect, useRef, useState } from "react";
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

// TODO: 문의 채널 확정 시 교체 (현재 자리표시자)
const CONTACT_MAIL = "mailto:hello@noideasupply.example";
const CONTACT_TEL = "tel:000";

const TICKER = [
  "가맹비 0원",
  "로열티 0원",
  "의무 발주 · 위약금 0",
  "폴리쉬 도우 24–48H 저온 숙성",
  "HACCP 인증 전용 라인 생산",
  "내 간판 · 내 가격 · 내 운영",
  "직영점에서 직접 확인",
];

const SEE = [
  { t: "DOUGH", d: "24–48시간 저온 숙성 중인 폴리쉬 도우 숙성실" },
  { t: "SAUCE", d: "원팩 소스와 노아이디어 베이스 — 그 차이를 직접 맛으로" },
  { t: "LIVE", d: "점심 피크에 실제로 돌아가는 주방과 홀" },
  { t: "TALK", d: "메뉴 · 동선 · 거래처 — 궁금한 건 그 자리에서 바로" },
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
  { img: mKkwari, name: "꽈리불고기", tag: "KOREAN BBQ" },
  { img: mCombi, name: "콤비네이션", tag: "SIGNATURE" },
  { img: mBuldak, name: "불닭고구마", tag: "SPICY" },
  { img: mBanban, name: "반반피자", tag: "HALF & HALF" },
  { img: mFourCheese, name: "포 치즈", tag: "4 CHEESE" },
  { img: mPepperoni, name: "페퍼로니", tag: "CLASSIC" },
  { img: mHawaiian, name: "스위트 하와이안", tag: "SWEET" },
  { img: mTaco, name: "타코", tag: "MEX" },
];

// 스크롤 진입 시 0부터 차오르는 숫자
function Count({ to, dur = 1400 }: { to: number; dur?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = to.toLocaleString();
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString();
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, dur]);
  return <span ref={ref}>0</span>;
}

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
    document.querySelectorAll(".reveal, .stagger").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      {/* FLAGSHIP POPUP — 직영점에서 직접 */}
      {popupOpen && (
        <div className="popup-ov" role="dialog" aria-modal="true">
          <div className="popup">
            <button className="popup-x" aria-label="닫기" onClick={() => closePopup()}>✕</button>
            <div className="popup-photo">
              <img src={store3} alt="노아이디어피자 직영점" />
              <span className="popup-cap">NO IDEA PIZZA — FLAGSHIP</span>
            </div>
            <div className="popup-body">
              <svg className="popup-stamp" viewBox="0 0 120 120" aria-hidden="true">
                <circle className="bgc" cx="60" cy="60" r="57" />
                <g className="spin">
                  <defs>
                    <path id="stampCircle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                  </defs>
                  <text><textPath href="#stampCircle">SEE IT · TASTE IT · NO IDEA SUPPLY · </textPath></text>
                </g>
                <circle className="inc" cx="60" cy="60" r="29" />
                <text className="st-center" x="60" y="67">직접</text>
              </svg>
              <p className="popup-kick"><span className="d" />OPEN KITCHEN · FLAGSHIP</p>
              <p className="popup-big">직영점에서,<br /><em>직접</em>.</p>
              <p className="popup-sub">광고 말고 실물로 — 문의를 남겨주시면, 영업 중인 직영점에서 보고 맛보실 수 있게 안내드립니다.</p>
              <div className="popup-perf"><span>SEE — TASTE — DECIDE</span></div>
              <div className="popup-info">
                <div><s>WHERE</s><b>직영점</b></div>
                <div><s>WHAT</s><b>주방 · 맛 · 실제 영업</b></div>
                <div><s>FEE</s><b>방문 무료</b></div>
                <div><s>NEXT</s><b>문의 후 일정 조율</b></div>
              </div>
              <a href="#contact" className="popup-cta" onClick={() => { track("popup"); closePopup(); }}>문의 남기기 <span className="ar">→</span></a>
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
          <a href="#contact" className="nav-cta" onClick={() => track("nav")}>도입 문의 →</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="glow" />
        <div className="grid-bg" />
        <div className="wrap hero-in">
          <span className="h-eyebrow"><span className="d" />B2B SUPPLY · NOT A FRANCHISE</span>
          <h1 className="h1">
            <span className="ln"><i className="b">간판은 그대로,</i></span>
            <span className="ln"><i>피자 경쟁력만</i></span>
            <span className="ln"><i className="blue">노아이디어처럼.</i></span>
          </h1>
          <p className="hero-sub">
            직영점에서 검증한 도우·소스·토핑을 내 가게 메뉴로.
            가맹 없이 — 내 상호, 내 가격 그대로.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-pri" onClick={() => track("hero")}>도입 문의하기 <span className="ar">→</span></a>
            <a href="#visit" className="btn btn-ghost">직영점에서 직접 확인 →</a>
          </div>
          <p className="hero-scarcity">문의 → 직영점 방문 → 샘플 테스트 · 모든 판단은 대표님 속도로</p>
        </div>
        <div className="hero-shot reveal">
          <div className="img"><img src={conceptShot} alt="노아이디어피자 시그니처 상차림" /></div>
          <div className="shot-cap">FIG.01 — 직영점 검증 시그니처 라인업</div>
        </div>
      </header>

      {/* CREDENTIALS */}
      <section className="creds">
        <div className="creds-in stagger">
          <div className="cred"><div className="v"><em>2023</em></div><div className="l">이수 직영 1호점에서 시작</div></div>
          <div className="cred"><div className="v">24–48<u style={{ fontFamily: "var(--mono)", fontSize: "0.4em", fontWeight: 500, color: "var(--blue)", verticalAlign: "super", textDecoration: "none" }}>H</u></div><div className="l">폴리쉬 도우 저온 숙성</div></div>
          <div className="cred"><div className="v">0원</div><div className="l">가맹비 · 로열티 — 애초에 가맹이 아닙니다</div></div>
          <div className="cred"><div className="v">100%</div><div className="l">내 상호 · 내 가격 운영</div></div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="tk-track">
          {Array.from({ length: 4 }, () => TICKER).flat().map((t, i) => (
            <span key={i} className="tk"><span>{t}</span><em>✶</em></span>
          ))}
        </div>
      </div>

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

      {/* STATEMENTS — 스크롤마다 한 문장 */}
      <section className="sec stmts">
        <div className="wrap">
          <p className="kick reveal">01 — WHY NOW</p>
          <div className="stmt reveal">
            <span className="sn">①</span>
            <div>
              <h2 className="sx">손님은 <span className="hl">한 입에</span> 압니다.</h2>
              <p className="ss">주인 없는 원팩인지, 레시피 주인이 있는 진짜인지.</p>
            </div>
          </div>
          <div className="stmt reveal">
            <span className="sn">②</span>
            <div>
              <h2 className="sx">그 '진짜', 혼자 만들면<br /><span className="hl">몸이 갈립니다.</span></h2>
              <p className="ss">새벽 육수, 도우 숙성, 거래처 뚫기까지 — 전부 혼자.</p>
            </div>
          </div>
          <div className="stmt reveal">
            <span className="sn">③</span>
            <div>
              <h2 className="sx">그래서 직영점에서 검증한 베이스를<br /><span className="hl">그대로 드립니다.</span></h2>
              <p className="ss">간판도 가격도 운영도 100% 대표님 것 — 가맹점을 모으는 게 아니니까요.</p>
            </div>
          </div>
          <div className="stmt punchline reveal">
            <span className="sn">→</span>
            <div>
              <h2 className="sx">혼자 창업, 하지만 <span className="hl">같이 가는 길.</span></h2>
            </div>
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
          <div className="nums stagger">
            <div className="numrow"><div className="v"><Count to={1000} /><u>만 원</u></div><div className="l">오픈 전에 먼저 나가는 가맹비.</div></div>
            <div className="numrow"><div className="v"><Count to={100} /><u>만 원 / 월</u></div><div className="l">매달 빠져나가는 로열티.</div></div>
            <div className="numrow"><div className="v"><Count to={8000} /><u>만 원</u></div><div className="l">본사 기준에 맞추는 인테리어 비용.</div></div>
          </div>
          <p className="nums-note reveal">* 업계에서 흔히 보는 수준의 예시이며, 브랜드·업종마다 다릅니다.</p>
          <div className="turn-line reveal">
            <p className="a">무조건 나쁜 구조가 아닙니다. 정말 좋은 본사도 있으니까요.</p>
            <p className="b">다만 그 비용과 시간이 아깝다고 느끼셨다면.</p>
          </div>
          <div className="qsec reveal">
            <h3>그렇다고, 개인창업은요?</h3>
            <div className="qs stagger">
              <div className="qrow"><span className="n">Q1</span><p>시중에서 쉽게 구하는 치즈와 고기류로, 손님이 다시 올 이유를 만들 수 있을까요?</p></div>
              <div className="qrow"><span className="n">Q2</span><p>원팩 구조의 육수와 양념으로, 옆 매장과 다른 맛을 낼 수 있을까요?</p></div>
              <div className="qrow"><span className="n">Q3</span><p>누구나 쓰는 소스, 누구나 쓰는 원두로 시그니처 메뉴가 만들어질까요?</p></div>
              <div className="qrow"><span className="n">Q4</span><p>레시피도, 공급처도, 브랜드 기획도 혼자서 — 어디서부터 시작하시겠습니까?</p></div>
              <div className="qrow big"><span className="n">→</span><p>좁은 매장에서 몇 시간씩 육수 끓이고, 도우 반죽하고, 소스 만들고. 그 시간과 인건비가 식자재보다 더 나갑니다.</p></div>
            </div>
          </div>
          <div className="strike reveal">
            <p className="x"><span className="xx">누구나 쓰는 원팩 소스로, 시그니처를?</span></p>
            <p className="y">오래 다듬어 완성한, <em>직영점에서 검증된 베이스</em>로.</p>
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
          <p className="lead">매일 매장을 열고 손님을 받으며 세팅한 것들입니다. 직영점에서 검증한 레시피 그대로, 베이스는 HACCP 인증 전용 라인에서 생산해 공급합니다.</p>
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

      {/* DECLARATION — 시선 선언 (FAQ에 묻혀 있던 핵심 문장 승격) */}
      <section className="decl">
        <div className="wrap decl-in reveal">
          <p className="kick" style={{ color: "var(--yellow)" }}>OUR STANCE</p>
          <p className="d-quote">묶어두는 게 아니라,<br /><span className="hl hd">계속 선택받는 게</span><br />저희 일입니다.</p>
          <p className="d-sub">의무 발주도, 위약금도 없습니다. 경쟁력이 없다고 느껴지면 — 쓰시다가 멈추시면 됩니다. 그래서 저희는 매일 더 좋아질 수밖에 없습니다.</p>
        </div>
      </section>

      {/* MENU LINEUP — marquee */}
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
        </div>
        <div className="mq reveal" aria-label="메뉴 라인업">
          <div className="mq-track">
            {[...MENU, ...MENU].map((m, i) => (
              <div className="mi" key={`${m.name}-${i}`} aria-hidden={i >= MENU.length || undefined}>
                <img src={m.img} alt={i < MENU.length ? m.name : ""} loading="lazy" />
                <div className="ov" />
                <div className="nm"><b>{m.name}</b><s>{m.tag}</s></div>
              </div>
            ))}
          </div>
        </div>
        <p className="menu-note">위 메뉴는 도입 시 대표님 매장 컨셉에 맞춰 선택·변형됩니다.</p>
      </section>

      {/* YOU'RE THE HERO — 주인공은 대표님 (무기고 페르소나: 사장님=Hero, 우리=조력자) */}
      <section className="banner">
        <div className="wrap banner-in reveal">
          <p className="kick" style={{ color: "var(--yellow)" }}>YOU'RE THE HERO</p>
          <h2 style={{ marginTop: 16 }}>이 이야기의 주인공은<br />저희가 아니라, 대표님입니다.</h2>
          <p className="banner-sub">새벽에 '장사 잘되는 법'을 검색해 본 적 있는 분이라면 — 맞게 오셨습니다. 손님이 줄을 서면, 그건 대표님 가게의 이야기입니다. 저희는 주인공 자리를 탐내지 않습니다.</p>
          <div className="cast">
            <div className="cast-row">
              <span className="cr">주인공</span>
              <div className="cv"><b>대표님</b><s>간판 · 가격 · 단골 · "그 집 맛있더라"는 칭찬까지 — 전부 대표님 몫입니다.</s></div>
            </div>
            <div className="cast-row">
              <span className="cr">조연</span>
              <div className="cv"><b>노아이디어서플라이</b><s>검증된 베이스를 대고, 거래처를 소개하고, 대표님의 새벽을 미리 끓여두는 역할.</s></div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND WORDMARK */}
      <section className="sec" id="brand">
        <div className="wrap wordmark reveal">
          <p className="kick" style={{ justifySelf: "center" }}>05 — THE BRAND</p>
          <div className="big" style={{ marginTop: 18 }}>NO IDEA<br /><span>PIZZA</span></div>
          <p className="m1">"오늘 뭐 먹지?"에서 출발한 브랜드.</p>
          <p className="m2">이름은 엉뚱하지만, 메뉴 생각은 분명합니다. 좋은 재료, 폴리쉬 도우, 한국식 토핑 — 이미 반응한 상품을 대표님 매장에 붙입니다.</p>
          <p className="m3">간판은 대표님 브랜드로. 피자 경쟁력만 노아이디어처럼.</p>
        </div>
      </section>

      {/* VISION */}
      <section className="vision reveal">
        <img className="bg" src={conceptShot} alt="" />
        <div className="ov" />
        <div className="wrap in">
          <h2>메뉴 고민,<br />피자가 <em>무기</em>가<br />됩니다.</h2>
          <div className="vlist stagger">
            <p>100% 점포 운영 자율성과 독립적 의사결정권</p>
            <p>개인 창업자를 위한 전용상품과 유통 솔루션 공급</p>
            <p>브랜드 기획 · 주방 동선 · 인테리어 · POS — 검증된 곳을 소개하고 함께 검토</p>
            <p>프랜차이즈식 고비용 구조보다 훨씬 가볍게 론칭</p>
          </div>
          <div className="segs stagger">
            <div className="seg"><span className="lab">기존운영자</span><p className="t">지금 매장에 부족한 한 끗을 붙이고 싶다면</p><p className="d">새 간판 필요 없이 — 부족한 시그니처와 베이스 경쟁력만 더해, 객단가와 재방문 이유를 만듭니다.</p></div>
            <div className="seg"><span className="lab">예비창업자</span><p className="t">무에서 시작하지만, 혼자 헤매고 싶지 않다면</p><p className="d">브랜드 기획부터 주방 동선·POS까지, 실제 운영 경험으로 함께 봅니다. 로열티 없이, 내 브랜드로.</p></div>
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
              <p>24~48시간 저온 숙성 도우. 레시피는 매일 굽는 직영 주방에서 완성했고, 생산은 HACCP 인증 공장의 전용 라인에서 — 숙성과 핸들링은 다시 매장의 손으로. 시판 원팩과 다른 점은 하나입니다: <strong>이 도우엔 레시피의 주인이 있습니다.</strong></p>
              <a href="#contact" className="btn btn-ghost" style={{ alignSelf: "flex-start", marginTop: 6, color: "var(--cobalt)" }}>도입 상담하기</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER LETTER — TODO: 서명 주체·실제 일화 확정 전 플레이스홀더 (무기고 S5) */}
      <section className="letter-sec">
        <div className="wrap">
          <div className="letter reveal">
            <p className="kick">A LETTER — FROM THE FOUNDER</p>
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

      {/* HOW IT WORKS — 문의 후 직영점 방문 */}
      <section className="sec" id="visit">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="no">07</span>
            <div>
              <p className="kick">HOW IT WORKS — 직영점에서 직접</p>
              <h2 style={{ marginTop: 12 }}>말로 설명하지 않습니다.<br />돌아가는 직영점에서 보여드립니다.</h2>
              <p className="lead" style={{ marginTop: 16, maxWidth: "58ch" }}>문의를 남겨주시면, 영업 중인 직영점에서 직접 보고 맛본 뒤 판단하실 수 있게 안내드립니다.</p>
            </div>
          </div>

          <div className="steps stagger">
            <div className="step"><span className="sn">01</span><b>문의 남기기</b><p>궁금한 점만 남겨주셔도 됩니다. 확인 후 직접 연락드립니다.</p></div>
            <div className="step"><span className="sn">02</span><b>일정 조율</b><p>전화로 가볍게 확인하고, 원하시면 직영점 방문 일정을 잡습니다.</p></div>
            <div className="step"><span className="sn">03</span><b>직영점 방문</b><p>영업 중인 주방을 직접 보고, 도우와 소스를 직접 맛보세요.</p></div>
            <div className="step"><span className="sn">04</span><b>샘플 테스트</b><p>내 매장에서 직접 구워보고 판단하세요. 도입도, 중단도 대표님 자율입니다.</p></div>
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
            <span className="no">08</span>
            <div><p className="kick">FAQ</p><h2 style={{ marginTop: 12 }}>자주 묻는 질문.</h2></div>
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
        <div className="glow" />
        <div className="wrap c-in reveal">
          <p className="kick" style={{ color: "var(--blue)" }}>LET'S TALK</p>
          <h2 style={{ marginTop: 14 }}>피자가 우리 매장에 붙을지,<br />직영점에서 직접 확인하세요.</h2>
          <p className="sub">구매를 결정하라는 페이지가 아닙니다. 문의를 남겨주시면 연락드리고 — 영업 중인 직영점에서 직접 보고 맛본 뒤, 천천히 판단하세요.</p>
          <p className="punch"><span className="s"><span className="xx">원팩</span></span> <span className="s"><span className="xx">획일 프랜차이즈</span></span> — 이제, 검증된 베이스로 같이.</p>
          <p className="scarcity">직영점 방문 · 상담 무료</p>
          <div className="cta-wrap">
            <a href={CONTACT_MAIL} className="btn btn-pri" onClick={() => track("contact")}>도입 문의하기 <span className="ar">→</span></a>
            <a href={CONTACT_TEL} className="btn btn-ghost" style={{ color: "#fff" }}>전화 상담</a>
          </div>
          <p className="fine">말로 설명하지 않습니다 — 돌아가는 직영점에서 직접 보여드립니다.</p>
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
        <a href="#visit" className="sb-ghost">방문 안내</a>
        <a href="#contact" className="sb-pri" onClick={() => track("sticky")}>도입 문의하기 →</a>
      </div>
    </div>
  );
}

export default App;
