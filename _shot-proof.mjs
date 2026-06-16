import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const URL = "http://localhost:4173/";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });

async function shot(name, vp, mobile) {
  const page = await browser.newPage();
  await page.setViewport({ ...vp, deviceScaleFactor: 2, isMobile: !!mobile, hasTouch: !!mobile });
  await page.goto(URL, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.querySelector(".proofnow")?.scrollIntoView({ block: "start" }));
  await sleep(1800);
  const el = await page.$(".proofnow");
  await el.screenshot({ path: `./.audit-shots/proof-${name}.png` });
  await page.close();
  console.log(`saved proof-${name}.png`);
}

await shot("desktop", { width: 1280, height: 1000 }, false);
await shot("mobile", { width: 390, height: 844 }, true);
await browser.close();
