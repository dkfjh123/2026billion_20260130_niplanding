# MotionSites Prompt - 노아이디어서플라이 랜딩

> 원본 참고: `motionsites-prompts.md`  
> 이 파일은 원본을 지우지 않고, 노아이디어피자 / 노아이디어서플라이 방향에 맞게 새로 작성한 모션사이트용 프롬프트다.  
> 랜딩 페이지의 모든 사용자 노출 문구는 가능하면 한국어로 작성한다.

---

## Project Stack

React 19 + TypeScript + Vite 6  
Tailwind CSS v4 via `@tailwindcss/vite` plugin, NOT PostCSS  
motion v12+ with imports from `motion/react`, NOT `framer-motion`  
lucide-react for icons such as `ChevronRight`, `ArrowRight`, `CheckCircle2`, `Utensils`, `Store`, `ShieldCheck`  

Fonts:

- Korean UI: Pretendard
- Display accent: Montserrat
- Fallback: `ui-sans-serif`, `system-ui`, `sans-serif`

---

## Core Direction

Build a Korean B2B landing page for `노아이디어서플라이`, based on No Idea Pizza.

This is NOT a consumer restaurant homepage.  
This is NOT a franchise recruitment page.  
This is a B2B product/module adoption consultation landing page.

Core positioning:

> 노아이디어피자에서 검증된 피자 상품 모듈과 메뉴 감도를, 파트너의 자기 브랜드 메뉴로 도입하도록 상담을 여는 B2B 랜딩.

The page should make visitors understand:

1. This is a product/module adoption consultation page.
2. No Idea Pizza is used as proof, not as a franchise brand to copy.
3. Partner stores keep their own name, pricing, menu names, and operations.
4. The CTA is consultation or sample test, not startup/franchise inquiry.

---

## Legal / Positioning Guardrails

Never use these meanings:

- 노아이디어피자 창업
- 노아이디어피자 가맹
- 지점 모집
- 브랜드 그대로 오픈
- 본사 관리형 창업
- 가맹비 없는 프랜차이즈
- 노아이디어피자 간판 사용 가능

Use these meanings instead:

- 노아이디어피자에서 검증한 피자 상품 모듈
- 내 브랜드 메뉴로 도입
- 샘플 테스트
- 상품 도입 상담
- 메뉴 모듈 상담
- 자기 상호, 자기 가격, 자기 운영
- 가맹점 모집이 아닌 전용상품 도입 상담

Required notice text must appear near the top and again near the final CTA:

> 본 페이지는 가맹점 모집 페이지가 아닙니다. 파트너 매장은 노아이디어피자 지점이 아니며, 기존 브랜드명, 로고, 간판을 사용하지 않고 독립 상호로 운영합니다. 제공되는 상품과 레시피는 파트너 매장에 맞게 선택적으로 도입할 수 있습니다.

---

## Visual Style

Concept: `American Retro Calm Editorial`

Design mood:

- Warm, calm, editorial, premium B2B
- Korean pizza brand energy, but not loud franchise advertising
- Product photos and real store evidence should feel like proof
- The layout should feel clear, trustworthy, and conversion-oriented

Color tokens:

- Canvas: `#EBEEE8` Retro Cream
- Surface: `#FFFFFF`
- Surface subtle: `#E1E5DC`
- Ink: `#231815` Deep Charcoal
- CTA accent: `#E83517` Ketchup Red
- Brand blue: `#0047AB`
- Brand yellow: `#F4BF1E`
- Hairline: `#D3CDC3`

Do:

- Use cream canvas and white lifted cards with 1px warm hairline borders.
- Use real pizza / store / menu photos as evidence areas.
- Use red only for primary CTA and very important badges.
- Keep typography bold and editorial.

Don't:

- Do not make it look like a franchise recruitment ad.
- Do not use excessive shadows.
- Do not overuse red.
- Do not make the page feel like a consumer menu or restaurant reservation site.

---

## Placeholder Media

Use placeholders until real assets are provided from `01_노아이디어피자_브랜드정리/05_자료_인벤토리.md`.

Use these placeholder constants:

```ts
const HERO_VIDEO_URL = "[HERO_VIDEO_URL]";
const HERO_IMAGE_URL = "[HERO_IMAGE_URL]";
const MENU_IMAGE_1 = "[MENU_IMAGE_1]";
const MENU_IMAGE_2 = "[MENU_IMAGE_2]";
const STORE_IMAGE_1 = "[STORE_IMAGE_1]";
```

If a video URL is missing, render a warm cream gradient with subtle animated grain and floating image cards instead of showing a broken video.

---

## FILE: index.css

```css
@import "tailwindcss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&display=swap");
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");

@theme {
  --font-sans: "Pretendard", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Montserrat", "Pretendard", ui-sans-serif, system-ui, sans-serif;
}

:root {
  font-family: var(--font-sans);
}

body {
  background-color: #EBEEE8;
  color: #231815;
}
```

---

## FILE: App.tsx - Root Layout

Root div:

`relative min-h-screen bg-[#EBEEE8] text-[#231815] selection:bg-[#E83517]/20 overflow-x-hidden flex flex-col`

Layout:

- `Navbar`
- `main`
  - `Hero`
  - `NonFranchiseNotice`
  - `BrandProof`
  - `ProductModules`
  - `FitCheck`
  - `HowItWorks`
  - `PartnerAutonomy`
  - `FAQ`
  - `FinalCTA`
- `Footer`

All sections should use `max-w-7xl mx-auto px-5 md:px-8`.

---

## FILE: Navbar.tsx - Minimal B2B Navigation

Container:

`relative z-50 flex items-center justify-between px-5 md:px-8 py-5 max-w-7xl mx-auto w-full select-none`

Left brand:

- Text: `NO IDEA SUPPLY`
- Classes: `font-display font-extrabold text-[18px] md:text-[21px] tracking-[-0.04em] text-[#231815]`
- Small badge next to it: `B2B MENU MODULE`

Center nav links, hidden on mobile:

- `브랜드 증거`
- `상품 모듈`
- `도입 대상`
- `상담 절차`
- `FAQ`

Right CTA:

- Text: `도입 상담`
- Classes: `rounded-md bg-[#E83517] text-white px-4 py-2 text-sm font-semibold hover:brightness-95 transition`

---

## FILE: Hero.tsx - Korean B2B Hero

Imports:

- `motion` from `motion/react`
- `ChevronRight` from `lucide-react`
- `AnimatedProofList` component

Section:

`relative pt-10 md:pt-16 pb-12 md:pb-20 overflow-hidden`

Background:

- Use a subtle cream background.
- If `HERO_VIDEO_URL` exists, render a full-bleed video on the right/back with low opacity and warm overlay.
- If no video exists, render layered cream / yellow / red blurred circles and floating image placeholders.

Grid:

`grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center`

Left content:

Badge:

`가맹점 모집이 아닌, 피자 상품 모듈 도입 상담`

Headline:

```text
줄서는 피자 브랜드의
메뉴 감도를,
내 브랜드 메뉴로.
```

Headline classes:

`font-display text-5xl md:text-7xl lg:text-[82px] leading-[0.95] tracking-[-0.07em] text-[#231815]`

Subtext:

```text
노아이디어피자에서 검증된 도우, 소스, 토핑, 사이드 메뉴의 가능성을 바탕으로
대표님 매장에 맞는 피자 상품 모듈 도입을 상담합니다.
간판은 대표님 브랜드로, 메뉴 경쟁력은 검증된 방식으로 시작하세요.
```

CTA row:

- Primary button: `상품 도입 상담하기`
- Secondary button: `샘플 테스트 가능성 보기`

Primary button style:

`bg-[#E83517] text-white rounded-md px-5 py-3 text-sm md:text-base font-semibold flex items-center gap-2 shadow-none`

Secondary button style:

`border border-[#D3CDC3] bg-white/60 text-[#231815] rounded-md px-5 py-3 text-sm md:text-base font-semibold`

Micro trust line:

`파트너 매장은 노아이디어피자 지점이 아니며, 독립 상호로 운영합니다.`

Right content:

- A large white card with a photo/video placeholder.
- Below it, render `AnimatedProofList` as a compact motion card.
- Use warm hairline border, no heavy shadow.

---

## FILE: AnimatedProofList.tsx - Infinite Proof Queue

Replace the original task list with a No Idea Supply proof list.

Task/proof items:

```ts
const proofs = [
  "Korean Pizza 감도와 미국식 피자 무드",
  "대표 메뉴 비주얼과 토핑 경쟁력",
  "폴리쉬 도우 기반의 식감 스토리",
  "펍, 와인바, 캐주얼 다이닝에 붙일 수 있는 피자 카테고리",
  "파트너 매장의 자기 상호와 자기 가격 유지",
  "상담 후 업종과 설비에 맞춘 샘플 테스트",
  "가맹이 아닌 상품 모듈 도입 구조",
  "홀, 포장, 배달로 확장 가능한 메뉴 운영",
  "노아이디어피자의 브랜드 반응을 증거로 활용"
];
```

Outer container:

`relative w-full max-w-[360px] md:max-w-[440px] h-[230px] select-none mx-auto text-left font-sans overflow-hidden`

Active glass/evidence card:

- `rounded-2xl bg-white/80 backdrop-blur-md border border-[#D3CDC3]`
- Do not use dark glass. Use warm editorial card style.
- Active label: `증거 포인트`
- Active text color: `#231815`
- Inactive text color: `#231815` with opacity.

Animation:

- Same infinite vertical queue logic as original prompt.
- Interval: 4200ms.
- Slide duration: 1.0s.
- Easing: `[0.16, 1, 0.3, 1]`.

---

## FILE: NonFranchiseNotice.tsx

Purpose:

Make the legal positioning clear near the top without feeling scary.

Card:

`rounded-2xl border border-[#D3CDC3] bg-white/75 px-5 md:px-7 py-5 md:py-6`

Icon:

`ShieldCheck`

Title:

`먼저, 이 페이지는 가맹점 모집이 아닙니다.`

Body:

```text
파트너 매장은 노아이디어피자 지점이 아니며, 기존 브랜드명, 로고, 간판을 사용하지 않고 독립 상호로 운영합니다.
제공되는 상품과 레시피는 파트너 매장에 맞게 선택적으로 도입할 수 있습니다.
```

---

## FILE: BrandProof.tsx

Section eyebrow:

`BRAND PROOF`

Title:

`노아이디어피자는 왜 증거가 될 수 있나`

Description:

```text
랜딩에서 노아이디어피자는 복제할 브랜드가 아니라, 이미 반응한 메뉴 감도와 상품 개발 경험의 증거로 사용됩니다.
```

Cards:

1. `Korean Pizza 포지션`
   - `미국식 피자 무드 위에 한국적인 토핑 감각을 얹은 선명한 메뉴 인상.`

2. `실제 매장과 공간감`
   - `사진과 영상으로 보여줄 수 있는 브랜드 실재감, 공간 분위기, 고객 반응.`

3. `도우와 상품성`
   - `폴리쉬 도우, 소스, 토핑, 사이드 메뉴로 확장 가능한 상품 모듈.`

Use image placeholders in at least 2 cards.

---

## FILE: ProductModules.tsx

Section title:

`소비자 메뉴가 아니라, 도입 가능한 상품 모듈로 봅니다`

Module cards:

- `도우`
  - `식감과 조리 안정성을 만드는 기반 모듈`
- `소스`
  - `피자 베이스와 한국적 토핑을 연결하는 맛의 중심`
- `토핑`
  - `대표 메뉴 감도를 만드는 커스터마이징 포인트`
- `사이드`
  - `펍, 와인바, 캐주얼 다이닝에 붙이기 좋은 추가 매출 메뉴`
- `간편 조리`
  - `오븐 기반, 낮은 주방장 의존도, 빠른 테스트 가능성`

Each card:

`rounded-2xl bg-white border border-[#D3CDC3] p-5 md:p-6`

---

## FILE: FitCheck.tsx

Title:

`이런 매장이라면 먼저 상담해볼 수 있습니다`

Fit list:

- 펍 또는 맥주집에 피자 카테고리를 붙이고 싶은 매장
- 와인바, 루프탑, 캐주얼 다이닝처럼 메뉴 감도가 중요한 매장
- 카페형 푸드매장 또는 브런치 매장에서 식사 메뉴를 강화하고 싶은 매장
- 배달/포장 메뉴에 피자 상품성을 더하고 싶은 매장
- 예비창업자 중 내 상호로 운영하고 싶은 사람

Add a small note:

`상담 전에는 SKU, MOQ, 최종 상품팩을 고정하지 않습니다. 실제 업종과 설비 조건을 먼저 확인합니다.`

---

## FILE: HowItWorks.tsx

Title:

`상담은 가볍게, 도입 판단은 실제 조건에 맞게`

Steps:

1. `문의`
   - `매장 상태, 업종, 도입 목적을 남깁니다.`
2. `1차 진단`
   - `오븐, 주방, 메뉴 구성, 운영 방식을 확인합니다.`
3. `상담`
   - `어떤 피자 모듈이 맞을지 방향을 잡습니다.`
4. `샘플 / 제안`
   - `필요 시 샘플 테스트와 1차 제안을 정리합니다.`
5. `후속 정리`
   - `상품팩, 단가, 운영자료는 실제 반응을 보고 구체화합니다.`

Use horizontal cards on desktop and stacked cards on mobile.

---

## FILE: PartnerAutonomy.tsx

Title:

`대표님 브랜드는 그대로 유지합니다`

Three columns:

- `상호 자율`
  - `노아이디어피자 간판을 다는 구조가 아닙니다.`
- `가격 자율`
  - `파트너 매장의 상권과 메뉴 전략에 맞춰 판단합니다.`
- `운영 자율`
  - `상품 도입 여부와 운영 방식은 파트너가 결정합니다.`

Visual style:

Warm editorial white cards, no dark SaaS look.

---

## FILE: FAQ.tsx

Questions:

1. `노아이디어피자 가맹점이 되는 건가요?`
   - `아닙니다. 본 페이지는 가맹점 모집이 아니라 상품 모듈 도입 상담 페이지입니다.`

2. `노아이디어피자 간판이나 로고를 사용할 수 있나요?`
   - `아닙니다. 파트너 매장은 독립 상호로 운영하며 기존 브랜드명, 로고, 간판을 사용하지 않습니다.`

3. `무조건 구매해야 하나요?`
   - `아닙니다. 상담 후 업종과 설비 조건에 맞는지 확인하고 선택적으로 검토합니다.`

4. `아직 오븐이 없어도 상담 가능한가요?`
   - `가능합니다. 현재 설비와 준비 상황을 기준으로 적용 가능성을 먼저 확인합니다.`

5. `가격표나 MOQ는 어디서 볼 수 있나요?`
   - `초기 상담에서는 업종, 설비, 도입 목적을 먼저 확인합니다. 세부 조건은 실제 적용 가능성을 본 뒤 정리합니다.`

---

## FILE: FinalCTA.tsx

Background:

`bg-[#231815] text-white rounded-[28px]`

Title:

```text
피자 메뉴를 붙이고 싶다면,
먼저 내 매장에 맞는지 확인하세요.
```

Subtext:

```text
노아이디어피자의 메뉴 감도와 상품 개발 경험을 바탕으로,
대표님 매장에 맞는 피자 상품 모듈 도입 가능성을 상담합니다.
```

Primary CTA:

`상품 도입 상담하기`

Secondary text:

`가맹점 모집이 아닌 B2B 상품 도입 상담입니다.`

---

## FILE: Footer.tsx

Include:

- `NO IDEA SUPPLY`
- `B2B Pizza Product Module Consultation`
- Legal notice summary:
  - `본 페이지는 가맹점 모집 페이지가 아닙니다.`
  - `파트너 매장은 노아이디어피자 지점이 아니며 독립 상호로 운영합니다.`

---

## Animation Requirements

Use motion for:

- Hero badge fade-up at 0s
- Hero headline fade-up at 0.1s
- Hero subtext fade-up at 0.25s
- CTA row fade-up at 0.4s
- Right visual card scale/fade at 0.55s
- Section cards fade-up on viewport enter
- AnimatedProofList infinite vertical queue

Animation style:

- Calm, smooth, editorial
- No aggressive bouncing
- Use `ease: [0.16, 1, 0.3, 1]`

---

## Responsive Requirements

Mobile:

- Single-column layout
- Nav links hidden
- Hero headline should remain strong but not overflow
- CTA buttons stack if needed
- Cards stack vertically

Desktop:

- Hero two-column layout
- Product modules grid
- Fit check and autonomy sections can use multi-column cards

---

## Content Status

Do not invent detailed facts that are not provided yet.

The following content will be filled later from:

- `01_노아이디어피자_브랜드정리/01_브랜드_개요.md`
- `01_노아이디어피자_브랜드정리/02_브랜드_증거자산.md`
- `01_노아이디어피자_브랜드정리/03_메뉴와_상품모듈.md`
- `01_노아이디어피자_브랜드정리/05_자료_인벤토리.md`

Until then, use neutral wording like:

- `실제 매장 반응`
- `대표 메뉴 비주얼`
- `도우와 소스의 상품성`
- `업종과 설비 조건에 맞춘 상담`

Avoid fake numbers, fake reviews, fake store data, fake awards, or fake performance claims.
