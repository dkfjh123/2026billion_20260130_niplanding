import sharp from "sharp";
import { mkdirSync } from "fs";

mkdirSync("nip_assets/opt", { recursive: true });

// [source, output, maxWidth, quality]
const jobs = [
  // hero / band / dough (큰 비주얼)
  ["nip_assets/menu/컨셉샷 1.jpg", "nip_assets/opt/hero-concept1.webp", 1500, 80],
  ["nip_assets/store/매장사진3.jpg", "nip_assets/opt/store3.webp", 1600, 76],
  ["nip_assets/dough/폴리쉬도우2.jpg", "nip_assets/opt/dough2.webp", 1000, 82],
  // 메뉴 그리드 (4/3, 표시 ~280-360px)
  ["nip_assets/menu/꽈리불고기.jpg", "nip_assets/opt/menu-kkwari.webp", 800, 80],
  ["nip_assets/menu/콤비네이션.jpg", "nip_assets/opt/menu-combi.webp", 800, 80],
  ["nip_assets/menu/불닭고구마.jpg", "nip_assets/opt/menu-buldak.webp", 800, 80],
  ["nip_assets/menu/반반피자.jpg", "nip_assets/opt/menu-banban.webp", 800, 80],
  ["nip_assets/menu/4치즈.jpg", "nip_assets/opt/menu-4cheese.webp", 800, 80],
  ["nip_assets/menu/페퍼로니.jpg", "nip_assets/opt/menu-pepperoni.webp", 800, 80],
  ["nip_assets/menu/스위트하와이안.jpg", "nip_assets/opt/menu-hawaiian.webp", 800, 80],
  ["nip_assets/menu/타코.jpg", "nip_assets/opt/menu-taco.webp", 800, 80],
  // 인스타 그리드 (작은 정사각 썸네일)
  ["nip_assets/menu/컨셉샷 2 (1).jpg", "nip_assets/opt/ig-concept2.webp", 600, 78],
  ["nip_assets/store/매장사진1.jpg", "nip_assets/opt/ig-store1.webp", 600, 78],
  ["nip_assets/menu/핫새우밤.jpg", "nip_assets/opt/ig-shrimp.webp", 600, 78],
  ["nip_assets/menu/컨셉샷 3.jpg", "nip_assets/opt/ig-concept3.webp", 600, 78],
  ["nip_assets/store/매장사진4.jpg", "nip_assets/opt/ig-store4.webp", 600, 78],
  ["nip_assets/menu/크리스피포테이토.jpg", "nip_assets/opt/ig-potato.webp", 600, 78],
];

let total = 0;
for (const [src, out, w, q] of jobs) {
  const info = await sharp(src).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: q }).toFile(out);
  total += info.size;
  console.log(`${String(Math.round(info.size / 1024)).padStart(5)} KB  ${out}`);
}
console.log(`----- 합계: ${(total / 1024 / 1024).toFixed(2)} MB`);
