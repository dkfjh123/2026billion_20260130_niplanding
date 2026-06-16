import puppeteer from "puppeteer-core";
import { readFileSync, mkdirSync } from "fs";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const W = 1080, H = 1350;
mkdirSync("./.audit-shots", { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const uri = (p, m) => `data:${m};base64,${readFileSync(p).toString("base64")}`;
const logo = uri("nip_assets/logo/logo_circle_blue.png", "image/png");
const imgPizza = uri("nip_assets/opt/menu-kkwari.webp", "image/webp");

const FONT = `
@font-face{font-family:'P';src:url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-5Medium.woff2') format('woff2');font-weight:500;}
@font-face{font-family:'P';src:url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-7Bold.woff2') format('woff2');font-weight:700;}
@font-face{font-family:'P';src:url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');font-weight:800;}`;

// 노아이디어 블루 에디토리얼 — 페이퍼/코발트 2톤, 강조는 코발트 하나, 레드는 CTA만
const CSS = `
*{margin:0;padding:0;box-sizing:border-box;}
body{width:${W}px;height:${H}px;font-family:'P',sans-serif;word-break:keep-all;position:relative;overflow:hidden;}
body.paper{background:#F7F4EC;color:#15171C;}
body.cobalt{background:#0047AB;color:#fff;}
.head{position:absolute;top:72px;left:74px;display:flex;align-items:center;gap:14px;z-index:3;}
.lg{width:50px;height:50px;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 2px 10px rgba(0,0,0,.08);}
.lg img{width:40px;height:40px;}
.head b{font-weight:800;font-size:29px;letter-spacing:-.02em;}
.paper .head b{color:#15171C;} .cobalt .head b{color:#fff;}
.pg{position:absolute;top:84px;right:78px;font-weight:800;font-size:26px;letter-spacing:.02em;z-index:3;}
.paper .pg{color:rgba(21,23,28,.4);} .cobalt .pg{color:rgba(255,255,255,.6);}
.wrap{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;padding:0 74px;}
.eb{display:inline-block;align-self:flex-start;font-weight:800;font-size:26px;padding:12px 24px;border-radius:50px;margin-bottom:30px;letter-spacing:-.01em;}
.paper .eb{background:rgba(0,71,171,.09);color:#0047AB;} .cobalt .eb{background:rgba(255,255,255,.16);color:#fff;}
.hl{font-weight:800;font-size:80px;line-height:1.12;letter-spacing:-.045em;}
.paper .hl .y{color:#0047AB;}
.cobalt .hl .y{background:#fff;color:#0047AB;padding:0 .12em;border-radius:10px;-webkit-box-decoration-break:clone;box-decoration-break:clone;}
.sb{margin-top:26px;font-size:33px;font-weight:500;line-height:1.45;letter-spacing:-.02em;}
.paper .sb{color:rgba(21,23,28,.62);} .cobalt .sb{color:rgba(255,255,255,.88);}
.li{margin-top:42px;display:flex;flex-direction:column;gap:26px;}
.li .row{font-size:42px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:center;gap:24px;}
.li .m{flex-shrink:0;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;font-size:26px;font-weight:800;}
.li.bad .row{color:rgba(21,23,28,.85);} .li.bad .m{background:rgba(21,23,28,.07);color:rgba(21,23,28,.4);}
.li.good .row{color:#fff;} .li.good .m{background:#fff;color:#0047AB;}
.photocard{margin-top:38px;border-radius:26px;overflow:hidden;border:1px solid rgba(21,23,28,.1);box-shadow:0 18px 46px rgba(21,23,28,.14);height:560px;}
.photocard img{width:100%;height:100%;object-fit:cover;}
.chips{margin-top:44px;display:flex;flex-wrap:wrap;gap:18px;}
.chip{background:#fff;border:1px solid rgba(21,23,28,.1);border-radius:22px;padding:26px 32px;display:flex;flex-direction:column;gap:8px;box-shadow:0 8px 24px rgba(21,23,28,.07);}
.chip b{font-size:46px;font-weight:800;color:#0047AB;letter-spacing:-.03em;line-height:1;} .chip span{font-size:25px;color:rgba(21,23,28,.55);font-weight:600;}
.cta{margin-top:46px;align-self:flex-start;display:inline-flex;background:#E83517;color:#fff;font-weight:800;font-size:35px;padding:25px 48px;border-radius:60px;box-shadow:0 14px 36px rgba(232,53,23,.32);}
.foot{position:absolute;left:74px;right:74px;bottom:66px;padding-top:26px;font-weight:700;font-size:26px;z-index:3;}
.paper .foot{color:rgba(21,23,28,.5);border-top:1px solid rgba(21,23,28,.12);} .cobalt .foot{color:rgba(255,255,255,.7);border-top:1px solid rgba(255,255,255,.22);}
.hint{position:absolute;right:74px;bottom:120px;font-weight:800;font-size:30px;z-index:3;}
.cobalt .hint{color:#fff;} .paper .hint{color:#0047AB;}`;

const slides = [
  { bg: "cobalt", eb: "사장님께", hl: `손님은 한 입에<br><span class="y">압니다.</span>`,
    body: `<div class="sb">주인 없는 원팩인지,<br>레시피 주인이 있는 진짜인지.</div>`, hint: "넘겨보기 →" },
  { bg: "paper", eb: "왜 어려울까", hl: `<span class="y">시그니처</span>를<br>만들고 싶어도.`,
    body: `<div class="li bad"><div class="row"><span class="m">✕</span> 검증된 레시피가 없다</div><div class="row"><span class="m">✕</span> 믿을 거래처가 없다</div><div class="row"><span class="m">✕</span> 새벽에 만들 시간이 없다</div></div>` },
  { bg: "paper", eb: "그래서", hl: `검증한 베이스를<br><span class="y">그대로.</span>`,
    body: `<div class="photocard"><img src="${imgPizza}" style="object-position:center 62%"></div><div class="sb" style="margin-top:30px">도우 · 소스 · 토핑을 사장님 가게 메뉴로.</div>` },
  { bg: "cobalt", eb: "오해는 금물", hl: `가맹,<br><span class="y">아닙니다.</span>`,
    body: `<div class="li good"><div class="row"><span class="m">✓</span> 가맹비 · 로열티 0원</div><div class="row"><span class="m">✓</span> 간판 강제 없음</div><div class="row"><span class="m">✓</span> 내 상호 · 가격 · 운영 100%</div></div>` },
  { bg: "paper", eb: "사무실 기획이 아닙니다", hl: `지금도 영업 중인<br><span class="y">진짜</span> 브랜드.`,
    body: `<div class="chips"><div class="chip"><b>직영 3곳</b><span>이수 · 신사 · 목동</span></div><div class="chip"><b>24–48H</b><span>폴리쉬 도우 숙성</span></div><div class="chip"><b>YT · IG</b><span>@noideapizza</span></div></div>` },
  { bg: "paper", eb: "도입은 부담 없이", hl: `직영점에서<br><span class="y">직접 확인하세요.</span>`,
    body: `<div class="sb">보고, 맛보고, 천천히 정하세요.</div><div class="cta">프로필 링크로 도입 문의</div>`,
    foot: "noideapizza.org · 070-8121-5880" },
];

const pageHtml = (s, i, n) => `<!doctype html><html><head><meta charset="utf-8"><style>${FONT}${CSS}</style></head>
<body class="${s.bg}">
<div class="head"><span class="lg"><img src="${logo}"></span><b>노아이디어피자</b></div>
<div class="pg">${String(i + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}</div>
<div class="wrap"><div class="eb">${s.eb}</div><div class="hl">${s.hl}</div>${s.body}</div>
<div class="foot">${s.foot || "noideapizza.org"}</div>
${s.hint ? `<div class="hint">${s.hint}</div>` : ""}
</body></html>`;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
for (let i = 0; i < slides.length; i++) {
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
  await page.setContent(pageHtml(slides[i], i, slides.length), { waitUntil: "networkidle0" });
  await page.evaluateHandle("document.fonts.ready");
  await sleep(400);
  await page.screenshot({ path: `./.audit-shots/car-${i + 1}.png` });
  await page.close();
  console.log(`saved car-${i + 1}.png`);
}
await browser.close();
