"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout105() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">철학</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              No Idea라는 이름 뒤에
            </h3>
          </div>
          <div>
            <p className="mb-5 md:mb-4 md:text-md">
              모두가 뉴욕을 흉내 낼 때, 노아이디어피자는 한국을 담았습니다.
              이것은 브랜드 복제가 아니라 메뉴 감도와 상품성의 도입입니다.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-0 md:gap-6 md:py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo"
                    className="size-6"
                  />
                </div>
                <p>
                  프랜차이즈식 통제 대신 자기 상호와 자기 운영을 유지하면서
                  검증된 메뉴 경쟁력만 가져오는 더 자율적인 구조입니다.
                </p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo"
                    className="size-6"
                  />
                </div>
                <p>
                  써보고 판단하세요. 도입할지, 멈출지, 바꿀지. 이후의 모든
                  선택은 대표님 자율입니다.
                </p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo"
                    className="size-6"
                  />
                </div>
                <p>한국식 토핑과 도우의 조합으로 차별화된 메뉴를 만듭니다.</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button variant="primary">상담하기</Button>
              <Button variant="secondary">더보기</Button>
            </div>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
