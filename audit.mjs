import puppeteer from "puppeteer-core";
import { mkdirSync } from "fs";

const OUT = "./.audit-shots";
mkdirSync(OUT, { recursive: true });

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const URL = "http://localhost:4173/";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();

const logs = [];
page.on("console", (m) => {
  if (["error", "warning"].includes(m.type())) logs.push(`[console.${m.type()}] ${m.text()}`);
});
page.on("pageerror", (e) => logs.push(`[pageerror] ${e.message}`));
page.on("requestfailed", (r) => logs.push(`[requestfailed] ${r.url()} — ${r.failure()?.errorText}`));

// ── mobile: iPhone-class 390x844 @3x ──
await page.emulate({
  viewport: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  userAgent:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
});

await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
await page.evaluate(() => document.fonts.ready);
await sleep(800);

// 1) popup
await page.screenshot({ path: `${OUT}/m01-popup.png` });
await page.evaluate(() => {
  const btns = document.querySelectorAll(".popup-bar button");
  if (btns.length) btns[btns.length - 1].click();
});
await sleep(400);

// 2) section-by-section
const stops = [
  ["m02-hero", ".hero-in"],
  ["m03-heroshot", ".hero-shot"],
  ["m04-creds-ticker", ".creds"],
  ["m05-notice", ".notice"],
  ["m06-stmt1", ".stmts .stmt:nth-of-type(1)"],
  ["m07-stmt23", ".stmts .stmt:nth-of-type(3)"],
  ["m08-nums", ".nums"],
  ["m09-qsec", ".qsec"],
  ["m10-strike", ".strike"],
  ["m11-band", ".band"],
  ["m12-solution", "#solution .sols"],
  ["m13-menu", ".mq"],
  ["m14-banner", ".banner"],
  ["m15-wordmark", ".wordmark"],
  ["m16-vision", ".vision"],
  ["m17-segs", ".segs"],
  ["m18-proof", ".feat"],
  ["m19-steps", ".steps"],
  ["m20-visitgrid", ".visit-grid"],
  ["m21-faq", ".faqs"],
  ["m22-contact", ".contact"],
];
for (const [name, sel] of stops) {
  const ok = await page.evaluate((s) => {
    const el = document.querySelector(s);
    if (!el) return false;
    el.scrollIntoView({ block: "start", behavior: "instant" });
    window.scrollBy(0, -70);
    return true;
  }, sel);
  if (!ok) { logs.push(`[missing] selector not found: ${sel}`); continue; }
  await sleep(1400); // reveal/count-up 완료 대기
  await page.screenshot({ path: `${OUT}/${name}.png` });
}

// 3) overflow check — 가로 스크롤 유발 요소 탐지
const overflow = await page.evaluate(() => {
  const bad = [];
  const dw = document.documentElement.clientWidth;
  document.querySelectorAll("body *").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width > 0 && (r.right > dw + 1 || r.left < -1)) {
      const cs = getComputedStyle(el);
      if (cs.position === "fixed") return;
      // 마키/티커 트랙은 의도된 오버플로
      if (el.closest(".mq, .ticker, .hero .glow, .contact .glow")) return;
      bad.push(`${el.tagName.toLowerCase()}.${[...el.classList].join(".")} right=${Math.round(r.right)} left=${Math.round(r.left)} (vw=${dw})`);
    }
  });
  return [...new Set(bad)].slice(0, 30);
});
if (overflow.length) logs.push("[overflow-x candidates]", ...overflow);

// ── desktop: 1440x900 ──
const dp = await browser.newPage();
dp.on("pageerror", (e) => logs.push(`[desktop pageerror] ${e.message}`));
await dp.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await dp.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
await dp.evaluate(() => document.fonts.ready);
await sleep(800);
await dp.screenshot({ path: `${OUT}/d01-popup.png` });
await dp.evaluate(() => {
  const btns = document.querySelectorAll(".popup-bar button");
  if (btns.length) btns[btns.length - 1].click();
});
await sleep(400);
for (const [name, sel] of [
  ["d02-hero", ".hero-in"],
  ["d03-stmts", ".stmts"],
  ["d04-nums", ".nums"],
  ["d05-menu", ".mq"],
  ["d06-visit", ".steps"],
  ["d07-contact", ".contact"],
]) {
  await dp.evaluate((s) => {
    const el = document.querySelector(s);
    if (el) { el.scrollIntoView({ block: "start", behavior: "instant" }); window.scrollBy(0, -70); }
  }, sel);
  await sleep(1400);
  await dp.screenshot({ path: `${OUT}/${name}.png` });
}

console.log(logs.length ? "ISSUES:\n" + logs.join("\n") : "NO CONSOLE/NETWORK/OVERFLOW ISSUES");
await browser.close();
