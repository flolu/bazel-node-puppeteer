import {createServer} from 'http'
import puppeteer from 'puppeteer'

async function main() {
  const url = "https://www.w3schools.com/html/html5_canvas.asp";

  const browser = await puppeteer.launch({
    args: [
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-sandbox",
    ],
    headless: true,
    dumpio: true,
  });

  const page = await browser.newPage();

  await page.goto(url);

  const base64Image = await page.evaluate(() => {
    const canvas = document.querySelector("#myCanvas6");
    return (canvas as any).toDataURL();
  });

  const base64Data = base64Image.replace("data:image/png;base64,", "");
  const buffer = Buffer.from(base64Data, "base64");

  console.log(buffer);

  await browser.close();
}

main();

const server = createServer((req, res) => res.end());
server.listen(8081);
