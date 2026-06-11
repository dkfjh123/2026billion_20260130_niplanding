import puppeteer from "puppeteer-core";
import { mkdirSync } from "fs";

const OUT = "./.audit-shots";
mkdirSync(OUT, { recursive: true });
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();
const logs = [];
page.on("pageerror", (e) => logs.push(`[pageerror] ${e.message}`));

await page.emulate({
  viewport: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  userAgent:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
});
await page.goto("http://localhost:4173/", { waitUntil: "networkidle0", timeout: 60000 });
await page.evaluate(() => document.fonts.ready);
await sleep(600);
await page.evaluate(() => {
  const btns = document.querySelectorAll(".popup-bar button");
  if (btns.length) btns[btns.length - 1].click();
});
await sleep(300);

// 측정: vision h2 좌측 패딩, creds 라벨 클리핑 여부
const metrics = await page.evaluate(() => {
  const out = [];
  const v = document.querySelector(".vision h2");
  if (v) out.push(`vision-h2 left=${Math.round(v.getBoundingClientRect().left)} (expect ~28)`);
  document.querySelectorAll(".cred .l").forEach((el, i) => {
    out.push(`cred${i} clipped=${el.scrollHeight > el.clientHeight + 2 || el.scrollWidth > el.clientWidth + 2} h=${el.clientHeight}/${el.scrollHeight}`);
  });
  return out;
});
logs.push(...metrics);

const stops = [
  ["r1-creds", ".creds"],
  ["r2-stmt3", ".stmts .stmt:nth-of-type(3)"],
  ["r3-strike", ".strike"],
  ["r4-band", ".band .tx"],
  ["r5-wordmark", ".wordmark"],
  ["r6-vision", ".vision h2"],
  ["r7-steps", ".steps"],
  ["r8-contact", ".contact"],
];
for (const [name, sel] of stops) {
  await page.evaluate((s) => {
    const el = document.querySelector(s);
    if (el) { el.scrollIntoView({ block: "start", behavior: "instant" }); window.scrollBy(0, -70); }
  }, sel);
  await sleep(1400);
  await page.screenshot({ path: `${OUT}/${name}.png` });
}

// overflow 재검사
const overflow = await page.evaluate(() => {
  const bad = [];
  const dw = document.documentElement.clientWidth;
  document.querySelectorAll("body *").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width > 0 && (r.right > dw + 1 || r.left < -1)) {
      if (getComputedStyle(el).position === "fixed") return;
      if (el.closest(".mq, .ticker, .hero .glow, .contact .glow")) return;
      bad.push(`${el.tagName.toLowerCase()}.${[...el.classList].join(".")} right=${Math.round(r.right)} left=${Math.round(r.left)}`);
    }
  });
  return [...new Set(bad)].slice(0, 20);
});
if (overflow.length) logs.push("[overflow]", ...overflow);

console.log(logs.length ? logs.join("\n") : "CLEAN");
await browser.close();
