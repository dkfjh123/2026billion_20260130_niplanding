import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const URL = "http://localhost:4173/";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });

async function shot(name, vp, mobile) {
  const page = await browser.newPage();
  await page.setViewport({ ...vp, deviceScaleFactor: 2, isMobile: !!mobile, hasTouch: !!mobile });
  await page.goto(URL, { waitUntil: "networkidle0" });
  // scroll persona into view to trigger reveal/stagger
  await page.evaluate(() => {
    const el = document.querySelector(".persona");
    if (el) el.scrollIntoView({ block: "center" });
  });
  await sleep(1600); // let stagger + glow settle
  const el = await page.$(".persona");
  await el.screenshot({ path: `./.audit-shots/persona-${name}.png` });
  await page.close();
  console.log(`saved persona-${name}.png`);
}

await shot("desktop", { width: 1280, height: 900 }, false);
await shot("mobile", { width: 390, height: 844 }, true);
await browser.close();
