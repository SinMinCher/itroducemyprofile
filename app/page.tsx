'use client';

import { Button } from "@/components/ui/button";
import ScrollButton from "@/components/ScrollButton";
import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
      {/* Header Section */}
      <header className="w-full py-4 bg-gray-200 dark:bg-gray-800 flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">신민철의 포트폴리오</h1>
        <div className="flex space-x-4">
          <ScrollButton targetId="section1">소개</ScrollButton>
          <ScrollButton targetId="section2">참여 프로젝트</ScrollButton>
          <ScrollButton targetId="section3">기술과 경험</ScrollButton>
        </div>
      </header>

      {/* Hero Section */}
      <section id="section1" className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="max-w-[1920px] w-full mx-auto grid items-center justify-center gap-6 px-4 text-center md:px-6">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">신민철</h1>
            <h2 className="text-2xl font-medium text-gray-500 dark:text-gray-400">포트폴리오</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              서강대학교 미래교육원에 게임개발 전공으로 재학하고 있으며 4개 프로젝트에 참여하였습니다.
            </p>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="550"
            src="/images/pro.png"
            width="550"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="section2" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center">
        <div className="max-w-[1920px] w-full mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">참여한 게임 프로젝트</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              프로젝트 참여 목록
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <img
                alt="Game 1"
                className="mb-4 aspect-video w-full rounded-md object-cover"
                height="300"
                src="/images/projectking.png"
                width="400"
              />
              <h3 className="text-lg font-semibold">Project kingdoms</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                제스게임을 레퍼런스로 한 RTS게임
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <img
                alt="Game 2"
                className="mb-4 aspect-video w-full rounded-md object-cover"
                height="300"
                src="/images/projsctesc.gif"
                width="400"
              />
              <h3 className="text-lg font-semibold">ESCAPE</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                뱀파이어 서바이벌을 레퍼런스로 제작한 게임이며 스킬 디자인 등 작업에 참여
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <img
                alt="Game 3"
                className="mb-4 aspect-video w-full rounded-md object-cover"
                height="300"
                src="/images/prosp.png"
                width="400"
              />
              <h3 className="text-lg font-semibold">Project SP</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                우주해적과 그들의 여정에 대한 텍스트RPG게임
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <img
                alt="Game 4"
                className="mb-4 aspect-video w-full rounded-md object-cover"
                height="300"
                src="/images/projectHEX.jpg"
                width="400"
              />
              <h3 className="text-lg font-semibold">HEXTEC: entropy</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                메인기획으로 참여하였으며 전반적 작업지시와 사운드 담당하였음
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="section3" className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="max-w-[1920px] w-full mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">기술과 경험</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              현재 미흡하나 졸업 전까지 경험과 기술을 발전시키고 쌓아나갈 계획입니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-8">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-2 text-lg font-semibold">기술</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>게임기획</li>
                <li>게임 컨텐츠 기획</li>
                <li>레벨디자인</li>
                <li>유저 경험 디자인</li>
                <li>QA작업</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-2 text-lg font-semibold">사용가능한 툴</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>Unity</li>
                <li>3D Max</li>
                <li>Microsoft Office</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-2 text-lg font-semibold">연혁</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>4개 프로젝트 참여</li>
                <li>게임개발 전공</li>
                <li>기술 발전 계획</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
