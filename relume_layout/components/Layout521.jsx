"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout521() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">증거</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              치밀한 피자
            </h2>
            <p className="md:text-md">
              No Idea라는 이름 뒤에 꽤 치밀한 피자가 있습니다.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="relative p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                코리안 피자 포지션
              </h3>
              <p className="text-text-alternative">
                꽈리불고기, 제육, 불닭고구마 등 한국식 토핑의 조합
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  더보기
                </Button>
              </div>
            </div>
          </div>
          <div className="relative p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                시그니처 메뉴 반응
              </h3>
              <p className="text-text-alternative">
                콤비네이션, 반반피자, 갈릭소스 등 실제 메뉴의 검증된 반응
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  더보기
                </Button>
              </div>
            </div>
          </div>
          <div className="relative p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                폴리쉬 도우 숙성력
              </h3>
              <p className="text-text-alternative">
                24~48시간 저온 숙성 기반의 도우 제품력과 맛의 깊이
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  더보기
                </Button>
              </div>
            </div>
          </div>
          <div className="relative p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                코발트블루 공간감
              </h3>
              <p className="text-text-alternative">
                다시 찾고 싶은 브랜드 경험과 일관된 분위기의 구현
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
