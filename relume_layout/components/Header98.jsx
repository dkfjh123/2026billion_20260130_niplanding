"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header98() {
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container relative">
        <div className="relative z-10 flex min-h-[32rem] flex-col items-center justify-center p-8 text-center md:min-h-[40rem] md:p-16">
          <div className="w-full max-w-lg">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              내 브랜드의 상호를 그대로 쓰고 싶어요
            </h1>
            <p className="text-text-alternative md:text-md">
              No Idea Pizza는 가맹이 아닙니다. 검증된 피자 감도와 메뉴 경쟁력을
              당신의 매장에 맞게 도입하는 것입니다.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="상담하기" variant="primary">
              상담하기
            </Button>
            <Button title="자세히 보기" variant="secondary-alt">
              자세히 보기
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="size-full object-cover"
            alt="Relume placeholder image"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
    </section>
  );
}
