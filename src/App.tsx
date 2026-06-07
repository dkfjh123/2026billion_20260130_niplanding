import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronRight,
  CheckCircle2,
  FileText,
  Handshake,
  MapPin,
  Network,
  PackageCheck,
  Pizza,
  Sparkles,
  Store,
  Utensils,
  Zap,
  Settings,
} from "lucide-react";
import brandManifestoPizza from "../nip_assets/proof/brand_origin_2.jpg";
import combinationPizza from "../nip_assets/menu/콤비네이션.jpg";
import kkwariBulgogiPizza from "../nip_assets/menu/꽈리불고기.jpg";
import doughTexture from "../nip_assets/dough/폴리쉬도우2.jpg";
import storeInterior from "../nip_assets/store/매장사진1.jpg";
import storeInterior2 from "../nip_assets/store/매장사진3.jpg";
import conceptShot from "../nip_assets/menu/컨셉샷 1.jpg";
import logoCircle from "../nip_assets/logo/logo_circle_blue.png";

const heroMessages = [
  {
    text: "내 브랜드의 상호를 그대로 쓰고 싶어요.",
    Icon: Store,
  },
  {
    text: "소비자들은 우리동네 맛집을 원해요.",
    Icon: MapPin,
  },
  {
    text: "프랜차이즈 말고, 우리 매장만의 메뉴가 필요해요.",
    Icon: Sparkles,
  },
{
    text: "검증된 피자 감도를 내 메뉴로 붙이고 싶어요.",
    Icon: Pizza,
  },
  {
    text: "구매보다 먼저, 우리 매장에 맞는지 알고 싶어요.",
    Icon: Handshake,
  },
  {
    text: "자율은 지키되, 성공한 브랜드의 도움을 받고 싶어요.",
    Icon: Store,
  },
  {
    text: "좋은 제조사와 협력업체를 연결받고 싶어요.",
    Icon: Handshake,
  },
];

const PROBLEM_FIT_VIDEO_DESKTOP_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_2zp0xTHnA1w30lgr2QBHaUJTtNu/hf_20260527_062852_e51a26cd-e2d1-4298-803b-e66083cf201d.mp4";

const PROBLEM_FIT_VIDEO_MOBILE_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_2zp0xTHnA1w30lgr2QBHaUJTtNu/hf_20260527_062835_81b14d2e-adbd-432b-9b12-c2e861f35768.mp4";

function App() {
  return (
    <div className="overflow-x-hidden bg-[#EBEEE8] text-[#231815] selection:bg-[#E83517]/20">
      <section className="relative overflow-hidden bg-[#EBEEE8]">
        {/* 따뜻한 크림 캔버스 위 은은한 코발트/옐로우 앰비언트 */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -left-32 -top-28 h-96 w-96 rounded-full bg-[#0047AB]/10 blur-3xl" />
          <div className="absolute right-[-6rem] top-44 h-80 w-80 rounded-full bg-[#F4BF1E]/15 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col">
          <Navbar />
          <Hero />
        </div>
      </section>

      <BrandIntro />
      <LandingStory />
    </div>
  );
}

function BrandIntro() {
  return (
    <section className="mx-auto w-full max-w-6xl px-[5%] pt-16 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid items-start gap-8 rounded-[28px] border border-[#D3CDC3] bg-white px-7 py-9 md:grid-cols-[0.72fr_1.28fr] md:gap-12 md:px-12 md:py-12"
      >
        {/* 로고 영역 */}
        <div className="flex flex-col items-start gap-3 border-b border-[#D3CDC3] pb-7 md:border-b-0 md:border-r md:pb-0 md:pr-12">
          <img
            src={logoCircle}
            alt="No Idea Pizza 로고"
            className="h-24 w-24 object-contain sm:h-28 sm:w-28"
          />
          <span className="text-[20px] font-extrabold tracking-[-0.03em] text-[#231815]">
            NO IDEA <span className="text-[#0047AB]">SUPPLY</span>
          </span>
          <span className="rounded-full bg-[#0047AB]/10 px-2.5 py-1 text-[11px] font-bold tracking-wide text-[#0047AB]">
            B2B 피자 상품 공급
          </span>
          <span className="mt-1 text-[12px] font-medium leading-relaxed text-[#231815]/45">
            100여 개 매장 운영 경험에서
            <br />
            검증한 것만 나눕니다.
          </span>
        </div>

        {/* 방향성 텍스트 */}
        <div>
          <p className="text-[26px] font-black leading-[1.3] tracking-[-0.03em] text-[#231815] sm:text-[34px]">
            이제, 시대가 바뀌었어요.
          </p>

          <div className="mt-6 space-y-4 text-[16px] leading-[1.85] text-[#231815]/75 sm:text-[18px]">
            <p>
              손님들은 더 이상 못 속아요. 어디서 대충 사 온 원팩 소스인지, 새벽부터
              정성 들인 진짜인지 — 한 입에 알아봅니다. 그래서 요즘은{" "}
              <span className="font-semibold text-[#231815]">
                검증된 진짜를 내는 가게에만 손님이 줄을 서요.
              </span>
            </p>
            <p>
              근데 그 '진짜'를 혼자 만들려면? 새벽부터 육수 끓이고, 도우 숙성하고…
              시간도 사람도 돈도 다 갈립니다. 좋은 거래처 하나 뚫는 것도 한참이고요.
            </p>
            <p>
              그래서 저희가 있는 거예요. 노아이디어피자가 직영점에서 수없이 굽고 팔며
              검증한 도우·소스·토핑을, 대표님 가게에 그대로 나눠드립니다. 대표님만의
              메뉴(돈까스든 갈비든)는 그대로 두고, 거기에 검증된 피자 한 축만 얹는
              거죠. 간판도 가격도 운영도 100% 대표님 거예요 —{" "}
              <span className="font-semibold text-[#231815]">
                저흰 가맹점을 모으는 게 아니거든요.
              </span>
            </p>
            <p>
              식자재도, 고기도, 인테리어도, POS도 — 10년 넘게 믿고 거래해온 곳들을
              친구 소개해주듯 연결해드려요. "여기 진짜 괜찮아, 바가지 없어" 하면서요.
              혼자 창업이지만, 혼자 두진 않습니다.
            </p>
            <p>
              가르치는 본사가 아니라, 옆에서 같이 뛰는 파트너. 대표님이 잘되면 저희
              베이스를 쓰는 가게가 늘고, 그게 다시 저희 신뢰가 되니까 — 저흰 진심으로
              대표님이 잘되길 바라요.
            </p>
          </div>

          <p className="mt-7 text-[19px] font-extrabold tracking-[-0.02em] text-[#0047AB] sm:text-[22px]">
            혼자 창업, 하지만 같이 가는 길. 그래서, 같이 가요.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function Navbar() {
  const links = ["브랜드 증거", "상품 모듈", "상담 절차", "FAQ", "자료"];

  return (
    <nav className="relative z-50 mx-auto flex w-full max-w-7xl select-none items-center justify-between px-[5%] py-5">
      <a href="#" className="flex items-center gap-2">
        <img src={logoCircle} alt="No Idea Pizza" className="h-8 w-8 object-contain" />
        <span className="text-[21px] font-bold tracking-tight text-[#231815]">
          No Idea Supply
        </span>
        <span className="rounded-full bg-[#0047AB]/10 px-2 py-0.5 text-[10px] font-bold tracking-wide text-[#0047AB]">
          B2B
        </span>
      </a>

      <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[13px] font-medium text-[#231815]/55 md:flex">
        {links.map((link) => (
          <a key={link} href="#" className="transition-colors hover:text-[#231815]">
            {link}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="rounded-full bg-[#E83517] px-4 py-2 text-xs font-semibold text-white shadow-[0_2px_10px_rgba(232,53,23,0.25)] transition-all hover:brightness-95"
      >
        도입 상담
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative w-full select-none">
      {/* 중앙 정렬 텍스트 */}
      <div className="mx-auto w-full max-w-5xl px-[5%] pt-8 text-center sm:pt-12">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#0047AB]/20 bg-[#0047AB]/[0.07] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-[#0047AB] sm:text-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#0047AB]" />
          가맹점 모집이 아닌, 피자 상품 도입 B2B
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-4xl text-[32px] font-black leading-[1.08] tracking-[-0.045em] text-[#231815] sm:text-5xl md:text-6xl lg:text-[76px]"
        >
          간판은 그대로,
          <br />
          피자 경쟁력만{" "}
          <span className="bg-gradient-to-r from-[#0047AB] via-[#2f6bd4] to-[#5b9bff] bg-clip-text text-transparent">
            노아이디어처럼.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-[16px] font-medium leading-relaxed text-[#231815]/65 sm:text-xl"
        >
          노아이디어피자가 직영점에서 검증한 도우·소스·토핑을 내 가게 메뉴로 들이는 B2B
          공급 서비스. 가맹 없이 — 내 상호, 내 가격 그대로.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.8, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#E83517] py-2.5 pl-7 pr-2.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(232,53,23,0.32)] transition-all duration-150 hover:brightness-95 active:scale-95 sm:text-base"
          >
            우리매장 도입 문의하기
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#E83517] transition-transform duration-150 group-hover:translate-x-0.5">
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </a>
          <p className="text-xs text-[#231815]/45">
            음식점 · 카페 · 펍 · 예비창업자 모두 상담 가능
          </p>
        </motion.div>
      </div>

      {/* 대형 배너 (실물 사진 자리) */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-12 w-full max-w-7xl px-[5%] sm:mt-16"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-[#D3CDC3] shadow-[0_30px_80px_rgba(0,71,171,0.18)] sm:aspect-[16/9]">
          {/* 실물 사진 (컨셉샷1) */}
          <img
            src={conceptShot}
            alt="노아이디어피자 시그니처 상차림"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* 가독성 스크림 */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,35,0.5)_0%,rgba(7,16,35,0.1)_30%,rgba(7,16,35,0)_55%,rgba(7,16,35,0.7)_100%)]" />

          {/* 좌상단 stat */}
          <div className="absolute left-6 top-6 sm:left-9 sm:top-9">
            <p className="text-[40px] font-extrabold leading-none tracking-[-0.04em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] sm:text-[64px]">
              5분
            </p>
            <p className="mt-2 text-[13px] font-semibold leading-tight text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)] sm:text-sm">
              주방장 없이,
              <br />
              오븐으로 완성
            </p>
          </div>

          {/* 우상단 검증 마크 */}
          <div className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-[#0047AB] shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
            <CheckCircle2 className="h-3.5 w-3.5" />
            직영점 검증
          </div>

          {/* 하단 모듈 칩 strip */}
          <div className="absolute inset-x-0 bottom-0">
            <div className="flex items-center gap-4 overflow-x-auto px-6 py-3.5 text-[12px] font-semibold text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)] sm:justify-center sm:gap-7 sm:text-[13px]">
              <span className="whitespace-nowrap">폴리쉬 도우</span>
              <span className="text-white/45">·</span>
              <span className="whitespace-nowrap">시그니처 소스</span>
              <span className="text-white/45">·</span>
              <span className="whitespace-nowrap">한국식 토핑</span>
              <span className="text-white/45">·</span>
              <span className="whitespace-nowrap">사이드</span>
              <span className="text-white/45">·</span>
              <span className="whitespace-nowrap">5분 간편조리</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function LandingStory() {
  const supplyCards = [
    {
      tone: "orange",
      Icon: FileText,
      title: "상품 모듈 상담",
      desc: "도우, 소스, 토핑, 사이드 메뉴를 대표님 매장 조건에 맞춰 검토합니다.",
      link: "도입 가능성 보기",
      background:
        "radial-gradient(circle at 10% 10%, rgba(0, 71, 171, 0.32) 0%, transparent 40%), linear-gradient(180deg, #0A0F1C 0%, #0A0F1C 40%, #0047AB 80%, #9DBDF0 96%, #FFFFFF 100%)",
      iconBg:
        "linear-gradient(145deg, rgba(18, 26, 45, 0.9) 0%, rgba(10, 12, 18, 0.98) 100%)",
      iconBorder: "rgba(40, 95, 200, 0.24)",
    },
    {
      tone: "blue",
      Icon: Network,
      title: "100% 자율 운영",
      desc: "상호, 가격, 메뉴명, 판매 방식은 파트너 매장의 판단과 상권에 맞게 유지합니다.",
      link: "자율 구조 확인",
      background:
        "radial-gradient(circle at 10% 10%, rgba(80, 150, 255, 0.30) 0%, transparent 40%), linear-gradient(180deg, #0B0F17 0%, #0B0F17 40%, #2F6BD4 80%, #A8C6F2 96%, #FFFFFF 100%)",
      iconBg:
        "linear-gradient(145deg, rgba(20, 25, 45, 0.9) 0%, rgba(10, 12, 16, 0.98) 100%)",
      iconBorder: "rgba(70, 120, 230, 0.24)",
    },
    {
      tone: "green",
      Icon: PackageCheck,
      title: "제조사·협력업체 연결",
      desc: "돈까스를 하든, 앞다리·뒷다리살을 받든 — 수년간 거래해온 거래처를 연결해 소통·품질·가격을 함께 잡습니다.",
      link: "공급망 상담하기",
      background:
        "radial-gradient(circle at 10% 10%, rgba(60, 160, 220, 0.30) 0%, transparent 40%), linear-gradient(180deg, #0A0E16 0%, #0A0E16 40%, #1E88C4 80%, #AED8F0 96%, #FFFFFF 100%)",
      iconBg:
        "linear-gradient(145deg, rgba(18, 35, 25, 0.9) 0%, rgba(10, 14, 12, 0.98) 100%)",
      iconBorder: "rgba(60, 150, 215, 0.24)",
    },
  ];

  const supplyTags = [
    { label: "자율 운영", Icon: Zap },
    { label: "매장 맞춤 도입", Icon: Settings },
    { label: "실행 가능한 다음 단계", Icon: CheckCircle2 },
  ];

  const audienceSegments = [
    {
      label: "기존운영자",
      title: "지금 매장에 부족한 한 끗을 붙이고 싶다면",
      desc: "새 간판을 달 필요 없이, 현재 매장의 상호와 분위기는 유지합니다. 부족한 시그니처 메뉴, 피자/사이드 상품 모듈, 소스와 토핑 경쟁력을 선택적으로 더해 객단가와 재방문 이유를 만들 수 있습니다.",
    },
    {
      label: "예비창업자",
      title: "무에서 시작하지만, 혼자 헤매고 싶지 않다면",
      desc: "브랜드 기획부터 주방 동선, 인테리어, POS 세팅까지 실제 브랜드 운영 경험을 바탕으로 1:1 맞춤 기획을 함께 봅니다. 프랜차이즈식 고비용 구조보다 가볍게 시작하고, 오픈 이후 로열티 없이 자기 브랜드로 운영하는 방향입니다.",
    },
  ];

  const fit = [
    "펍 / 맥주집",
    "와인바 / 루프탑",
    "캐주얼 다이닝",
    "카페형 푸드매장",
    "배달·포장 매장",
    "내 상호로 운영할 예비창업자",
  ];

  const proofMenuItems = [
    {
      title: "코리안 피자 포지션",
      desc: "꽈리불고기, 제육, 불닭고구마처럼 한국식 토핑을 피자 문법으로 재해석합니다.",
      image: kkwariBulgogiPizza,
      label: "Korean Pizza",
    },
    {
      title: "시그니처 메뉴 데이터",
      desc: "노아이디어 콤비네이션, 반반피자, 갈릭소스처럼 실제 메뉴 반응을 기반으로 상품 모듈을 봅니다.",
      image: combinationPizza,
      label: "Menu Proof",
    },
    {
      title: "폴리쉬 도우",
      desc: "24~48시간 저온 숙성 기반의 도우 스토리는 피자 품질을 지탱하는 제품력의 근거입니다.",
      image: doughTexture,
      label: "Dough",
    },
    {
      title: "코발트블루 공간감",
      desc: "피자는 메뉴이면서 경험입니다. 노아이디어피자의 공간 감도는 다시 찾고 싶은 장면을 만듭니다.",
      image: storeInterior,
      label: "Space",
    },
  ];

  return (
    <section className="relative z-20 mx-auto w-full max-w-6xl px-[5%] pb-20 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden rounded-[32px] bg-[#231815] px-6 py-12 sm:py-16 md:px-12 md:py-20"
      >
        <h2 className="max-w-3xl text-[28px] font-bold leading-[1.15] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[56px]">
          창업을 준비하면서,
          <br />
          이 숫자들을 보셨을 겁니다.
        </h2>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 md:gap-5">
          {[
            {
              number: "1,000만 원",
              label: "오픈 전에 먼저 나가는 가맹비.",
              gradient: "linear-gradient(137deg, #1F3A63 0%, #2C5288 45%, #3D6AA6 100%)",
              delay: 0.1,
            },
            {
              number: "100만 원",
              label: "매달 빠져나가는 로열티.",
              gradient: "linear-gradient(137deg, #1B3358 0%, #284A7C 45%, #38609A 100%)",
              delay: 0.15,
            },
            {
              number: "8,000만 원",
              label: "본사 기준에 맞추는 인테리어 비용.",
              gradient: "linear-gradient(137deg, #172C4D 0%, #234470 45%, #335A90 100%)",
              delay: 0.2,
            },
          ].map((item) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: item.delay }}
              className="group relative"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-[32px] opacity-50"
                style={{ background: item.gradient, filter: "blur(45px)" }}
              />
              <div
                className="relative z-10 overflow-hidden rounded-[32px]"
                style={{
                  border: "1.5px solid transparent",
                  background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, ${item.gradient} border-box`,
                }}
              >
                <div className="flex min-h-[180px] flex-col items-center justify-center p-7 text-center sm:min-h-[220px]">
                  <span className="font-rubik text-[32px] font-black leading-none tracking-[-0.03em] text-white sm:text-[36px] md:text-[42px]">
                    {item.number}
                  </span>
                  <span className="mt-3 text-[13px] leading-relaxed text-gray-400 sm:text-[14px]">
                    {item.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center sm:mt-14">
          <p className="text-[19px] font-semibold leading-relaxed tracking-[-0.02em] text-white/80 sm:text-[22px] md:text-2xl">
            무조건 나쁜 구조가 아닙니다.
            <br />
            정말 좋은 본사도 있으니까요.
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-gray-500 sm:text-lg md:text-xl">
            다만 그 비용과 시간이 아깝다고 느끼셨다면.
          </p>
        </div>

        <div className="mt-14 border-t border-white/10 pt-14 sm:mt-18 sm:pt-18">
          <h3 className="max-w-3xl text-[26px] font-bold leading-[1.15] tracking-[-0.04em] text-white sm:text-[34px] md:text-[44px]">
            그렇다고 개인창업은요?
          </h3>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 md:gap-5">
            {[
              {
                q: "시중에서 쉽게 구하는 치즈와 고기류로, 손님이 다시 올 이유를 만들 수 있을까요?",
                gradient: "linear-gradient(137deg, #1F3A63 0%, #2C5288 45%, #3D6AA6 100%)",
                delay: 0.1,
              },
              {
                q: "원팩 구조의 육수와 양념으로, 옆 매장과 다른 맛을 낼 수 있을까요?",
                gradient: "linear-gradient(137deg, #1B3358 0%, #284A7C 45%, #38609A 100%)",
                delay: 0.15,
              },
              {
                q: "누구나 쓰는 소스, 누구나 쓰는 원두로 시그니처 메뉴가 만들어질까요?",
                gradient: "linear-gradient(137deg, #172C4D 0%, #234470 45%, #335A90 100%)",
                delay: 0.2,
              },
              {
                q: "레시피도, 공급처도, 브랜드 기획도 혼자서 — 어디서부터 시작하시겠습니까?",
                gradient: "linear-gradient(137deg, #1F3A63 0%, #2C5288 45%, #3D6AA6 100%)",
                delay: 0.25,
              },
            ].map((item) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: item.delay }}
                className="group relative"
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-[32px] opacity-40"
                  style={{ background: item.gradient, filter: "blur(45px)" }}
                />
                <div
                  className="relative z-10 overflow-hidden rounded-[32px]"
                  style={{
                    border: "1.5px solid transparent",
                    background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, ${item.gradient} border-box`,
                  }}
                >
                  <div className="flex min-h-[160px] flex-col items-center justify-center p-7 text-center sm:min-h-[180px]">
                    <p className="text-[14px] font-medium leading-relaxed text-gray-400 sm:text-[15px]">
                      {item.q}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="group relative sm:col-span-2"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-[32px] opacity-50"
                style={{ background: "linear-gradient(137deg, #1B3358 0%, #2C508C 45%, #0047AB 100%)", filter: "blur(45px)" }}
              />
              <div
                className="relative z-10 overflow-hidden rounded-[32px]"
                style={{
                  border: "1.5px solid transparent",
                  background: "linear-gradient(#1A1A1C, #1A1A1C) padding-box, linear-gradient(137deg, #1B3358 0%, #2C508C 45%, #0047AB 100%) border-box",
                }}
              >
                <div className="flex min-h-[200px] flex-col items-center justify-center p-8 text-center sm:min-h-[220px] sm:p-10">
                  <p className="text-[16px] font-semibold leading-[1.8] text-gray-200 sm:text-[18px]">
                    좁은 매장에서 몇 시간씩
                    <br />
                    육수 끓이고, 도우 반죽하고, 소스 만들고.
                    <br />
                    그 시간과 인건비가
                    <br />
                    식자재보다 더 나갑니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-12 text-center sm:mt-16">
            <p className="text-[18px] font-semibold leading-relaxed text-white/35 line-through decoration-[#E83517] decoration-2 sm:text-[22px]">
              누구나 쓰는 원팩 소스로, 시그니처를?
            </p>
            <p className="mt-3 text-[22px] font-bold leading-snug tracking-[-0.02em] text-white sm:text-[30px] md:text-[34px]">
              새벽부터 끓인, 직영점에서 검증된 베이스로.
            </p>
          </div>
          <div className="mt-14 border-t border-white/10 pt-14 text-center sm:mt-18 sm:pt-18">
            <h3 className="mx-auto mt-5 max-w-2xl text-[24px] font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-[32px] md:text-[40px]">
              사무실에서 기획한 메뉴가 아닙니다.
            </h3>

            <div className="mx-auto mt-8 sm:mt-10">
              <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-4 sm:mx-0 sm:justify-center sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0">
                <div className="relative -rotate-2 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] sm:rounded-[20px]">
                  <img src={storeInterior} alt="노아이디어피자 매장" className="h-[160px] w-[220px] object-cover sm:h-[180px] sm:w-[240px]" />
                </div>
                <div className="relative z-10 rotate-1 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] sm:rounded-[20px]">
                  <img src={conceptShot} alt="노아이디어피자 메뉴" className="h-[180px] w-[240px] object-cover sm:h-[200px] sm:w-[260px]" />
                </div>
                <div className="relative -rotate-1 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] sm:rounded-[20px]">
                  <img src={storeInterior2} alt="노아이디어피자 내부" className="h-[160px] w-[220px] object-cover sm:h-[180px] sm:w-[240px]" />
                </div>
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-gray-400 sm:text-[17px] sm:leading-relaxed">
              매일 매장을 열고, 줄 서는 손님을 받고,
              <br className="sm:hidden" />
              서비스하면서 세팅한 것들입니다.
              <br />
              도우, 소스, 토핑, 운영 구조 — 전부
              <br className="sm:hidden" />
              직영점에서 검증한 뒤에 공급합니다.
            </p>
          </div>

          <div className="mt-14 border-t border-white/10 pt-14 sm:mt-18 sm:pt-18">
            <h2 className="text-[26px] font-bold leading-tight tracking-[-0.04em] text-white sm:text-[32px] md:text-[38px]">
              가맹이 아니라, 같이 갑니다.
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/55">
              검증된 전용상품 + 대표님 브랜드 + 믿고 거래해온 거래처까지.
              무슨 메뉴를 하든 연결해서, 같이 키웁니다.
            </p>
            <p className="mt-3 text-sm font-medium text-white/35">
              상담은 구매 압박이 아니라 적용 가능성을 확인하는 과정입니다.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {supplyCards.map((card) => (
                <div
                  key={card.title}
                  className="group relative min-h-[320px] transition-transform duration-300 ease-out hover:-translate-y-1"
                >
                  <div
                    className="relative flex min-h-[290px] flex-1 flex-col gap-4 overflow-hidden rounded-3xl p-7 shadow-[inset_0_-4px_15px_-2px_rgba(255,255,255,0.9)]"
                    style={{ background: card.background }}
                  >
                    <div
                      className="relative z-10 mb-2 flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border"
                      style={{
                        background: card.iconBg,
                        borderColor: card.iconBorder,
                      }}
                    >
                      <div className="absolute -left-2.5 -top-2.5 h-8 w-8 rounded-full bg-white/20 opacity-60 blur-sm" />
                      <card.Icon className="relative z-10 h-5 w-5 text-white/90" strokeWidth={2} />
                    </div>

                    <div className="relative z-10 flex flex-1 flex-col gap-3">
                      <h3 className="text-[22px] font-bold leading-snug tracking-[-0.03em] text-white">
                        {card.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/50">{card.desc}</p>
                      <a
                        href="#contact"
                        className="mt-1 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-white no-underline transition-all duration-200 group-hover:gap-2.5 group-hover:opacity-85"
                      >
                        {card.link}
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 pt-2 md:gap-8">
              {supplyTags.map((tag) => (
                <div key={tag.label} className="flex items-center gap-2 text-[13px] font-semibold text-white/45">
                  <tag.Icon className="h-4 w-4 text-white/60" />
                  {tag.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-16 sm:py-20 md:py-28"
      >
        <div className="text-center">
          <h2 className="font-rubik text-[48px] font-black leading-[0.88] tracking-[-0.06em] text-[#0047AB] sm:text-[72px] md:text-[88px] lg:text-[104px]">
            NO IDEA PIZZA
          </h2>

          <div className="mx-auto mt-10 max-w-2xl">
            <p className="text-[20px] font-bold leading-snug tracking-[-0.03em] text-slate-900 sm:text-[24px] md:text-[28px]">
              "오늘 뭐 먹지?"에서 출발한 브랜드.
            </p>
            <p className="mt-3 text-[20px] font-bold leading-snug tracking-[-0.03em] text-slate-900 sm:text-[24px] md:text-[28px]">
              이름은 엉뚱하지만,
              <br />
              메뉴에 대한 생각은 분명합니다.
            </p>
            <div className="mt-6 space-y-3 text-[15px] leading-relaxed text-slate-500 sm:text-[16px] md:text-[17px]">
              <p>좋은 재료, 폴리쉬 도우, 한국식 토핑.</p>
              <p>다시 찾고 싶은 코발트블루의 경험.</p>
              <p>지점을 늘리는 일이 아니라, 이미 반응한 상품 모듈을 대표님 매장에 붙일 수 있는지 함께 확인하는 일입니다.</p>
            </div>
            <p className="mt-8 text-[19px] font-semibold leading-8 tracking-[-0.02em] text-slate-900 md:text-[24px] md:leading-9">
              간판은 대표님 브랜드로.
              <br />
              피자 경쟁력만 노아이디어처럼.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-slate-200/60 bg-white/70 p-2 shadow-[0_18px_70px_rgba(15,23,42,0.10)] sm:mt-12">
          <img
            src={brandManifestoPizza}
            alt="노아이디어피자 메뉴 비주얼"
            className="aspect-[16/7] w-full rounded-[22px] object-cover object-center"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-6 min-h-screen overflow-hidden rounded-[34px] bg-[#0047AB] px-6 pb-10 pt-32 text-white shadow-[0_28px_90px_rgba(0,71,171,0.22)] md:px-12 md:pt-48"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          src={PROBLEM_FIT_VIDEO_MOBILE_URL}
          className="absolute inset-0 h-full w-full object-cover md:hidden"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          src={PROBLEM_FIT_VIDEO_DESKTOP_URL}
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
        />
        <div className="absolute inset-0 bg-[#071023]/55" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,35,0.25)_0%,rgba(7,16,35,0.78)_100%)]" />

        <div className="relative z-10 max-w-5xl">
          <h2 className="mt-5 text-[44px] font-black uppercase leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
            메뉴 고민
            <br />
            피자가
            <br />
            무기가 됩니다
          </h2>

          <div className="mt-6 grid max-w-2xl gap-2 text-base font-medium leading-7 text-white/70 md:text-lg">
            <p>100% 점포 운영 자율성과 독립적 의사결정권.</p>
            <p>개인 창업자를 위한 전용상품과 유통 솔루션 공급.</p>
            <p>브랜드 기획부터 주방 동선, 인테리어, POS 세팅까지 1:1 맞춤 설계.</p>
            <p>프랜차이즈식 고비용 구조보다 훨씬 가볍게 론칭하는 방향.</p>
          </div>

          <a
            href="#contact"
            className="relative mt-8 inline-flex h-[65px] w-[184px] items-center justify-center transition-transform duration-150 hover:scale-105 active:scale-95"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 184 65"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M18 1H166C175.389 1 183 8.61116 183 18V47C183 56.3888 175.389 64 166 64H18C8.61116 64 1 56.3888 1 47V18C1 8.61116 8.61116 1 18 1Z"
                fill="white"
              />
            </svg>
            <span className="font-rubik relative z-10 text-center text-[18px] font-black uppercase tracking-[-0.03em] text-[#161a20]">
              문의하기
            </span>
          </a>
        </div>

        <div className="relative z-10 mt-12 grid gap-4 md:grid-cols-2">
          {audienceSegments.map((segment, index) => (
            <div
              key={segment.label}
              className="flex min-h-[300px] flex-col rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md"
            >
              <p className="w-fit rounded-2xl border border-white/15 bg-white/12 px-5 py-3 text-[22px] font-bold tracking-[-0.04em] text-white md:text-[30px]">
                {segment.label}
              </p>
              <p className="mt-7 text-[25px] font-semibold leading-[1.12] tracking-[-0.045em] text-white md:text-[32px]">
                {segment.title}
              </p>
              <p className="mt-auto pt-8 text-[15px] leading-8 text-white/64 md:text-base md:leading-8">
                {segment.desc}
              </p>
            </div>
          ))}

          <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md md:col-span-2">
            <p className="mt-4 text-[28px] font-semibold leading-[1.08] tracking-[-0.045em] text-white md:text-[42px]">
              써보고 판단하세요.
            </p>
            <p className="mt-5 max-w-3xl text-[18px] font-semibold leading-8 tracking-[-0.02em] text-white/72 md:text-[24px] md:leading-9">
              도입할지, 멈출지, 바꿀지.
              <br />
              이후의 모든 선택은 대표님 자율입니다.
            </p>
            <p className="mt-6 max-w-3xl border-t border-white/15 pt-6 text-[16px] font-semibold leading-8 text-white/80 md:text-[19px] md:leading-9">
              베이스는 검증된 걸로, 시그니처는 대표님 것으로 — 도입이 아니라{" "}
              <span className="text-white">‘내 메뉴를 만드는’ 일</span>입니다.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 py-4 md:py-8"
      >
        <div className="mb-9 max-w-3xl">
          <h2 className="mt-4 text-[32px] font-bold leading-[1.06] tracking-[-0.04em] text-[#231815] md:text-[52px]">
            No Idea라는 이름 뒤에,
            <br />
            꽤 치밀한 피자가 있습니다.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#231815]/60 md:text-base">
            이름은 가볍게 들리지만, 메뉴와 도우, 공간과 반응은 가볍지 않습니다.
            파트너 매장에 붙일 수 있는 상품성은 여기서 출발합니다.
          </p>
        </div>

        {/* Featured proof — 대표 1장 */}
        <article className="group grid overflow-hidden rounded-[24px] border border-[#D3CDC3] bg-white transition-colors duration-300 hover:border-[#0047AB] md:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src={proofMenuItems[0].image}
              alt={proofMenuItems[0].title}
              className="h-full min-h-[260px] w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-center gap-3 p-7 md:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0047AB]">
              {proofMenuItems[0].label}
            </p>
            <h3 className="text-[28px] font-bold leading-tight tracking-[-0.03em] text-[#231815] md:text-[36px]">
              {proofMenuItems[0].title}
            </h3>
            <p className="text-[15px] leading-7 text-[#231815]/60 md:text-base">
              {proofMenuItems[0].desc}
            </p>
          </div>
        </article>

        {/* 보조 proof — 3장 */}
        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {proofMenuItems.slice(1).map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-[20px] border border-[#D3CDC3] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0047AB]"
            >
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="aspect-[4/3] w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="border-t border-[#D3CDC3] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0047AB]">
                  {card.label}
                </p>
                <h3 className="mt-2.5 text-[18px] font-bold leading-tight tracking-[-0.03em] text-[#231815]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-[#231815]/60">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.div>

      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 rounded-[28px] border border-white/10 bg-[#231815] p-7 text-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] md:p-10"
      >
        <h2 className="mx-auto mt-3 max-w-2xl text-[30px] font-semibold leading-[1.08] tracking-tight md:text-[44px]">
          피자가 우리 매장에 붙을지,
          <br />
          상담 전에는 알 수 없습니다.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[13px] leading-relaxed text-white/58">
          구매를 결정하라는 페이지가 아닙니다. 업종, 설비, 메뉴 방향을 먼저
          확인하고 도입 가능성부터 판단하세요.
        </p>
        <p className="mx-auto mt-6 max-w-xl text-[15px] font-semibold leading-relaxed text-white/85 md:text-[17px]">
          <span className="text-white/40 line-through decoration-[#E83517] decoration-2">원팩</span>{" "}
          <span className="text-white/40 line-through decoration-[#E83517] decoration-2">획일 프랜차이즈</span>
          {" "}— 이제, 검증된 베이스로 같이.
        </p>
        <a
          href="mailto:hello@noideasupply.example"
          className="mt-6 inline-flex items-center gap-1 rounded-lg bg-[#E83517] px-5 py-2.5 text-xs font-semibold text-white transition hover:brightness-95"
        >
          우리매장 도입 문의하기
          <ChevronRight className="h-3.5 w-3.5" />
        </a>
        <p className="mt-5 text-xs leading-relaxed text-white/45">
          상담은 실제로 돌아가는 본점에서 — 말로 설명하지 않고, 직접 보여드립니다.
        </p>
      </motion.div>
    </section>
  );
}

export default App;
