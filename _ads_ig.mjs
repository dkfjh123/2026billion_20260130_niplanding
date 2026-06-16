import puppeteer from "puppeteer-core";
import { readFileSync, mkdirSync } from "fs";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const W = 1080, H = 1350; // 인스타 피드 4:5
mkdirSync("./.audit-shots", { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const uri = (p, m) => `data:${m};base64,${readFileSync(p).toString("base64")}`;
const logo = uri("nip_assets/logo/logo_circle_blue.png", "image/png");
const imgDough = uri("nip_assets/opt/dough2.webp", "image/webp");
const imgPizza = uri("nip_assets/opt/menu-kkwari.webp", "image/webp");
const imgStore = uri("nip_assets/proof/KakaoTalk_20241022_144133542_01.webp", "image/webp");

const FONT = `
@font-face{font-family:'Paperozi';src:url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-5Medium.woff2') format('woff2');font-weight:500;}
@font-face{font-family:'Paperozi';src:url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-7Bold.woff2') format('woff2');font-weight:700;}
@font-face{font-family:'Paperozi';src:url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');font-weight:800;}`;

const cards = [
  { id: "A", bg: imgDough, pos: "center 45%", fs: 82, eyebrow: "원팩과 다릅니다",
    headline: `원팩 말고, <span class="y">진짜.</span>`,
    sub: "레시피 주인이 있는 도우를 내 가게 메뉴로.", cta: "도입 문의 →" },
  { id: "B", bg: imgPizza, pos: "center 62%", fs: 78, eyebrow: "가맹 아닙니다",
    headline: `내 간판 그대로,<br>피자 <span class="y">경쟁력만.</span>`,
    sub: "직영점에서 검증한 도우 · 소스 · 토핑.", cta: "도입 문의 →" },
  { id: "C", bg: imgStore, pos: "center 36%", fs: 68, eyebrow: "새벽에 검색해 보셨다면",
    headline: `‘우리 가게 시그니처,<br>어떻게 만들지?’`,
    sub: "검증된 피자가 — 우리 가게의 무기가 됩니다.", cta: "직영점에서 직접 확인 →" },
];

const html = (c) => `<!doctype html><html><head><meta charset="utf-8"><style>
${FONT}
*{margin:0;padding:0;box-sizing:border-box;}
body{width:${W}px;height:${H}px;font-family:'Paperozi',sans-serif;word-break:keep-all;}
.ad{position:relative;width:${W}px;height:${H}px;overflow:hidden;background:#0b0c0f;}
.bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:${c.pos};}
.scrim{position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,12,15,.30) 0%,rgba(11,12,15,0) 24%,rgba(11,12,15,.42) 54%,rgba(11,12,15,.92) 100%);}
.top{position:absolute;top:54px;left:58px;display:flex;align-items:center;gap:13px;background:rgba(255,255,255,.13);border:1.5px solid rgba(255,255,255,.28);padding:14px 24px 14px 15px;border-radius:60px;backdrop-filter:blur(8px);}
.top img{width:42px;height:42px;border-radius:50%;}
.top span{color:#fff;font-weight:800;font-size:28px;letter-spacing:-.02em;}
.content{position:absolute;left:58px;right:58px;bottom:64px;}
.eyebrow{display:inline-block;background:#0047AB;color:#fff;font-weight:800;font-size:26px;padding:12px 24px;border-radius:50px;margin-bottom:26px;letter-spacing:-.01em;}
.headline{color:#fff;font-weight:800;font-size:${c.fs}px;line-height:1.12;letter-spacing:-.045em;text-shadow:0 2px 24px rgba(0,0,0,.35);}
.headline .y{color:#FFC400;}
.sub{margin-top:24px;color:rgba(255,255,255,.92);font-size:33px;font-weight:500;line-height:1.42;letter-spacing:-.02em;text-shadow:0 1px 12px rgba(0,0,0,.4);}
.row{margin-top:38px;display:flex;flex-direction:column;align-items:flex-start;gap:18px;}
.cta{display:inline-flex;align-items:center;background:#E83517;color:#fff;font-weight:800;font-size:31px;padding:21px 40px;border-radius:60px;box-shadow:0 10px 28px rgba(232,53,23,.4);letter-spacing:-.02em;}
.url{color:rgba(255,255,255,.82);font-weight:700;font-size:24px;letter-spacing:-.01em;}
</style></head><body>
<div class="ad"><img class="bg" src="${c.bg}"><div class="scrim"></div>
<div class="top"><img src="${logo}"><span>노아이디어피자</span></div>
<div class="content">
  <div class="eyebrow">${c.eyebrow}</div>
  <div class="headline">${c.headline}</div>
  <div class="sub">${c.sub}</div>
  <div class="row"><span class="cta">${c.cta}</span><span class="url">noideapizza.org · 이수 · 신사 · 목동 직영</span></div>
</div></div></body></html>`;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
for (const c of cards) {
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
  await page.setContent(html(c), { waitUntil: "networkidle0" });
  await page.evaluateHandle("document.fonts.ready");
  await sleep(400);
  await page.screenshot({ path: `./.audit-shots/ad-ig-${c.id}.png` });
  await page.close();
  console.log(`saved ad-ig-${c.id}.png`);
}
await browser.close();
