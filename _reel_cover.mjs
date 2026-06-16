import puppeteer from "puppeteer-core";
import { readFileSync, mkdirSync } from "fs";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const W = 1080, H = 1920; // 릴스 9:16
mkdirSync("./.audit-shots", { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const uri = (p, m) => `data:${m};base64,${readFileSync(p).toString("base64")}`;
const logo = uri("nip_assets/logo/logo_circle_blue.png", "image/png");
const bg = uri("nip_assets/opt/dough2.webp", "image/webp");

const FONT = `
@font-face{font-family:'P';src:url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-5Medium.woff2') format('woff2');font-weight:500;}
@font-face{font-family:'P';src:url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-7Bold.woff2') format('woff2');font-weight:700;}
@font-face{font-family:'P';src:url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');font-weight:800;}`;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>${FONT}
*{margin:0;padding:0;box-sizing:border-box;}
body{width:${W}px;height:${H}px;font-family:'P';word-break:keep-all;position:relative;overflow:hidden;background:#0b0c0f;}
.bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 42%;}
.scrim{position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,12,15,.55) 0%,rgba(11,12,15,.15) 26%,rgba(11,12,15,.45) 55%,rgba(11,12,15,.95) 100%);}
.top{position:absolute;top:96px;left:64px;display:flex;align-items:center;gap:14px;background:rgba(255,255,255,.13);border:1.5px solid rgba(255,255,255,.28);padding:15px 26px 15px 16px;border-radius:60px;backdrop-filter:blur(8px);}
.top img{width:46px;height:46px;border-radius:50%;} .top span{color:#fff;font-weight:800;font-size:30px;letter-spacing:-.02em;}
.badge{position:absolute;top:108px;right:64px;background:#E83517;color:#fff;font-weight:800;font-size:28px;padding:14px 26px;border-radius:50px;}
.content{position:absolute;left:64px;right:64px;bottom:150px;}
.eb{display:inline-block;background:#0047AB;color:#fff;font-weight:800;font-size:30px;padding:14px 28px;border-radius:50px;margin-bottom:30px;}
.hl{color:#fff;font-weight:800;font-size:104px;line-height:1.08;letter-spacing:-.05em;text-shadow:0 3px 30px rgba(0,0,0,.4);}
.hl .y{background:#fff;color:#0047AB;padding:0 .1em;border-radius:12px;-webkit-box-decoration-break:clone;box-decoration-break:clone;}
.sb{margin-top:30px;color:rgba(255,255,255,.92);font-size:40px;font-weight:500;line-height:1.4;letter-spacing:-.02em;text-shadow:0 2px 14px rgba(0,0,0,.5);}
.play{position:absolute;left:50%;top:46%;transform:translate(-50%,-50%);width:140px;height:140px;border-radius:50%;background:rgba(255,255,255,.18);border:3px solid rgba(255,255,255,.85);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);}
.play::after{content:"";border-left:46px solid #fff;border-top:28px solid transparent;border-bottom:28px solid transparent;margin-left:12px;}
.url{position:absolute;left:64px;bottom:78px;color:rgba(255,255,255,.85);font-weight:700;font-size:30px;}
</style></head><body>
<img class="bg" src="${bg}"><div class="scrim"></div>
<div class="top"><img src="${logo}"><span>노아이디어피자</span></div>
<div class="badge">사장님 주목 🍕</div>
<div class="play"></div>
<div class="content">
  <div class="eb">원팩과 진짜의 차이</div>
  <div class="hl">손님은 한 입에<br><span class="y">압니다.</span></div>
  <div class="sb">검증된 피자가 — 우리 가게의 무기가 됩니다.</div>
</div>
<div class="url">noideapizza.org · 이수 · 신사 · 목동 직영</div>
</body></html>`;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();
await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle0" });
await page.evaluateHandle("document.fonts.ready");
await sleep(400);
await page.screenshot({ path: `./.audit-shots/reel-cover.png` });
console.log("saved reel-cover.png");
await browser.close();
