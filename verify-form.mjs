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
page.on("pageerror", (e) => logs.push(`[pageerror] ${e.message}`));
page.on("console", (m) => {
  if (m.type() === "error") logs.push(`[console.error] ${m.text()}`);
});

await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });
await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
await page.evaluate(() => document.fonts.ready);
await sleep(600);
await page.evaluate(() => {
  const btns = document.querySelectorAll(".popup-bar button");
  if (btns.length) btns[btns.length - 1].click();
});
await sleep(400);

// contact form
await page.evaluate(() => document.querySelector("#contact")?.scrollIntoView());
await sleep(900);
await page.screenshot({ path: `${OUT}/v-contact-form.png` });

// consent details open + footer
await page.evaluate(() => {
  document.querySelector(".cf-privacy")?.setAttribute("open", "");
  document.querySelector(".ft")?.scrollIntoView();
});
await sleep(700);
await page.screenshot({ path: `${OUT}/v-footer.png` });

// mobile form
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.evaluate(() => document.querySelector("#contact")?.scrollIntoView());
await sleep(900);
await page.screenshot({ path: `${OUT}/v-contact-mobile.png` });

// privacy page
await page.setViewport({ width: 1440, height: 1100, deviceScaleFactor: 1 });
await page.goto(URL + "privacy.html", { waitUntil: "networkidle0", timeout: 60000 });
await sleep(400);
await page.screenshot({ path: `${OUT}/v-privacy.png` });

console.log(logs.length ? logs.join("\n") : "no page errors");
await browser.close();
