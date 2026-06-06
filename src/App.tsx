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
import heroPizzaCafe from "../nip_assets/hero/hero-bg-desktop.webp";

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
    <div className="overflow-x-hidden bg-[#f8fafc] selection:bg-slate-200">
      <section className="relative min-h-[70vh] overflow-hidden bg-[#f8fafc] md:min-h-screen">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroPizzaCafe}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-transparent to-slate-950/35" />
        </div>

        <div className="relative z-10 flex min-h-[70vh] flex-col md:min-h-screen">
          <Navbar />
          <Hero />
        </div>
      </section>

      <LandingStory />
    </div>
  );
}

function Navbar() {
  const links = ["브랜드 증거", "상품 모듈", "상담 절차", "FAQ", "자료"];

  return (
    <nav className="relative z-50 mx-auto flex w-full max-w-7xl select-none items-center justify-between px-[5%] py-5">
      <a href="#" className="flex items-center drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
        <span className="text-[21px] font-bold tracking-tight text-white">
          No Idea Supply
        </span>
        <span className="ml-1.5 flex translate-y-[1px] rotate-[-15deg] flex-col gap-[2.5px]">
          <span className="h-[1.5px] w-3.5 rounded-full bg-white" />
          <span className="h-[1.5px] w-2.5 translate-x-[2px] rounded-full bg-white" />
          <span className="h-[1.5px] w-3 translate-x-[4px] rounded-full bg-white/55" />
        </span>
      </a>

      <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[13px] font-medium text-white/75 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] md:flex">
        {links.map((link) => (
          <a key={link} href="#" className="transition-colors hover:text-white">
            {link}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="rounded-full border border-white/40 bg-white/95 px-4 py-1.5 text-xs font-semibold text-slate-900 shadow-[0_2px_10px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all hover:bg-white"
      >
        도입 상담
      </a>
    </nav>
  );
}

function Hero() {
  const [messageIndex, setMessageIndex] = useState(0);
  const activeMessage = heroMessages[messageIndex];
  const ActiveIcon = activeMessage.Icon;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % heroMessages.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative flex w-full flex-1 select-none items-center">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-[5%] py-14 text-left sm:py-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/90 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#5B8AD6]" />
          NO IDEA SUPPLY · 피자 상품 공급
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl text-[40px] font-bold leading-[1.07] tracking-[-0.048em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.4)] sm:text-5xl md:text-6xl lg:text-[62px]"
        >
          간판은 그대로.
          <br />
          <span className="text-white/55">피자 경쟁력만</span>
          <br />
          노아이디어처럼.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.8, ease: "easeOut" }}
          className="mt-5 max-w-lg text-[15px] font-medium leading-relaxed text-white/75 drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] sm:text-base"
        >
          노아이디어피자에서 검증된 피자 상품 모듈을, 내 상호·내 가격 그대로
          도입하는 <span className="font-semibold text-white">B2B 상담</span>입니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.8, ease: "easeOut" }}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/80 backdrop-blur-md sm:text-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#5B8AD6]" />
          가맹점 모집 아님 · 내 상호 그대로 운영
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mt-7 flex w-full max-w-xl items-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`hero-line-${messageIndex}`}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex w-full items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-md sm:gap-4 sm:rounded-[20px] sm:px-5 sm:py-4.5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-900 sm:h-12 sm:w-12 sm:rounded-2xl">
                <ActiveIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
              </div>
              <p className="flex-1 text-left text-[15px] font-semibold leading-snug tracking-[-0.02em] text-white sm:text-lg lg:text-xl">
                {activeMessage.text}
              </p>
              <ChevronRight className="h-4 w-4 shrink-0 text-white/50 sm:h-5 sm:w-5" />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[15px] font-semibold text-slate-950 shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-all duration-150 hover:bg-white/90 active:scale-95 sm:px-7 sm:py-4 sm:text-base"
          >
            우리매장 도입 문의하기
            <ChevronRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
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
      desc: "검증된 브랜드 감도와 함께 실행 가능한 제조, 공급, 협력 구조를 함께 정리합니다.",
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
        className="overflow-hidden rounded-[32px] bg-[#0A0A0B] px-6 py-12 sm:py-16 md:px-12 md:py-20"
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
          <div className="mt-14 border-t border-white/10 pt-14 text-center sm:mt-18 sm:pt-18">
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Direct Operation
            </p>
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
              가맹이 아니라, 이렇게 도입합니다.
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/55">
              노아이디어피자의 메뉴 감도는 참고하되, 운영의 주도권은 대표님
              매장에 남기는 구조입니다.
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
        className="relative mt-6 min-h-screen overflow-hidden rounded-[34px] bg-[#21346e] px-6 pb-10 pt-32 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)] md:px-12 md:pt-48"
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
          <p className="font-rubik text-xs font-black uppercase tracking-[0.24em] text-white/50">
            Problem / Fit
          </p>
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
            <p className="font-rubik text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
              Total Freedom
            </p>
            <p className="mt-4 text-[28px] font-semibold leading-[1.08] tracking-[-0.045em] text-white md:text-[42px]">
              써보고 판단하세요.
            </p>
            <p className="mt-5 max-w-3xl text-[18px] font-semibold leading-8 tracking-[-0.02em] text-white/72 md:text-[24px] md:leading-9">
              도입할지, 멈출지, 바꿀지.
              <br />
              이후의 모든 선택은 대표님 자율입니다.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-6 overflow-hidden rounded-[34px] border border-white/50 bg-white/76 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(0,71,171,0.10),transparent_32%),radial-gradient(circle_at_88%_18%,rgba(255,255,255,0.82),transparent_28%)]" />
        <div className="relative z-10">
          <div className="mb-9 max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">
              Brand Proof
            </p>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.04] tracking-[-0.055em] text-slate-950 md:text-[58px]">
              No Idea라는 이름 뒤에,
              <br />
              꽤 치밀한 피자가 있습니다.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-500 md:text-base">
              이름은 가볍게 들리지만, 메뉴와 도우, 공간과 반응은 가볍지 않습니다.
              파트너 매장에 붙일 수 있는 상품성은 여기서 출발합니다.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {proofMenuItems.map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-[28px] border border-white/65 bg-white/58 shadow-[0_18px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl"
              >
                <div className="overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="aspect-[16/10] w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0047AB]/70">
                    {card.label}
                  </p>
                  <h3 className="mt-3 text-[24px] font-semibold leading-tight tracking-[-0.04em] text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 rounded-[28px] border border-slate-900/10 bg-gradient-to-b from-[#252a38] to-[#1a1e29] p-7 text-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] md:p-10"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">
          Final CTA
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-[30px] font-semibold leading-[1.08] tracking-tight md:text-[44px]">
          피자가 우리 매장에 붙을지,
          <br />
          상담 전에는 알 수 없습니다.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[13px] leading-relaxed text-white/58">
          구매를 결정하라는 페이지가 아닙니다. 업종, 설비, 메뉴 방향을 먼저
          확인하고 도입 가능성부터 판단하세요.
        </p>
        <a
          href="mailto:hello@noideasupply.example"
          className="mt-6 inline-flex items-center gap-1 rounded-lg bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 transition hover:bg-white/90"
        >
          우리매장 도입 문의하기
          <ChevronRight className="h-3.5 w-3.5" />
        </a>
      </motion.div>
    </section>
  );
}

export default App;
