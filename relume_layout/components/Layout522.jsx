"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout522() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">구조</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              가맹이 아닌 도입
            </h2>
            <p className="md:text-md">당신의 매장, 당신의 선택</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="relative p-6 sm:col-span-2 md:p-8 lg:p-12">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10">
              <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                특징
              </p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                상품 모듈 상담
              </h3>
              <p className="text-text-alternative">
                도우, 소스, 토핑부터 시그니처까지 선택적 도입
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button variant="secondary-alt">알아보기</Button>
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link-alt"
                  size="link"
                >
                  더보기
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10 flex flex-1 flex-col justify-between">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                100% 자율 운영
              </h3>
              <p className="text-text-alternative">
                로열티 없이 당신의 브랜드로 운영하세요
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link-alt"
                  size="link"
                >
                  더보기
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10 flex flex-1 flex-col justify-between">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                제조사·협력업체 연결
              </h3>
              <p className="text-text-alternative">
                검증된 공급망과 파트너 네트워크를 활용하세요
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link-alt"
                  size="link"
                >
                  더보기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
