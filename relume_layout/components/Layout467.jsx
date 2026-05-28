"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout467() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-text-alternative md:mb-4">
              문제
            </p>
            <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
              메뉴 고민, 피자가 무기가 됩니다
            </h2>
            <p className="mb-6 text-text-alternative md:mb-8 md:text-md">
              객단가를 올릴 메뉴가 필요하신가요? 아니면 처음부터 차별화된
              브랜드를 만들고 싶으신가요?
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="상담하기" variant="secondary-alt">
                상담하기
              </Button>
              <Button
                title="더보기"
                variant="link-alt"
                size="link"
                iconRight={<RxChevronRight />}
              >
                더보기
              </Button>
            </div>
          </div>
          <div className="mx-[7.5%] md:mt-[25rem]">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-text-alternative md:mb-4 md:text-xl">
                  기존 운영자
                </h6>
                <p className="text-text-alternative">
                  현재 매장의 상호와 분위기를 유지하면서 시그니처 메뉴와
                  객단가를 높이세요.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-text-alternative md:mb-4 md:text-xl">
                  예비 창업자
                </h6>
                <p className="text-text-alternative">
                  프랜차이즈 고비용 구조 없이 자기 브랜드로 시작하고 성장하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="absolute inset-0 size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
