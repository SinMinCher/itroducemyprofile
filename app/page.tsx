import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="max-w-[1920px] w-full mx-auto grid items-center justify-center gap-6 px-4 text-center md:px-6">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">신민철</h1>
            <h2 className="text-2xl font-medium text-gray-500 dark:text-gray-400">포트폴리오</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              서강mtec에 재학하고 있으며 4개 프로젝트에 참여하였습니다.
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center">
        <div className="max-w-[1920px] w-full mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">참여한 게임 프로젝트</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              프로젝트 참여 목록
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Game 1"
                className="mb-4 aspect-video w-full rounded-md object-cover"
                height="300"
                src="/images/projectking.png"
                width="400"
              />
              <h3 className="text-lg font-semibold"> Project kingdoms </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                제스게임을 레퍼런스로 한 RTS게임
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Game 2"
                className="mb-4 aspect-video w-full rounded-md object-cover"
                height="300"
                src="/images/projsctesc.gif"
                width="400"
              />
              <h3 className="text-lg font-semibold"> ESCAPE </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                뱀파이어 서바이벌을 레퍼런스로 제작한 게임이며 스킬 디자인 등 작업에 참여
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Game 3"
                className="mb-4 aspect-video w-full rounded-md object-cover"
                height="300"
                src="/images/prosp.png"
                width="400"
              />
              <h3 className="text-lg font-semibold"> Project SP </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                우주해적과 그들의 여정에 대한 텍스트RPG게임
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Game 2"
                className="mb-4 aspect-video w-full rounded-md object-cover"
                height="300"
                src="/images/projectHEX.jpg"
                width="400"
              />
              <h3 className="text-lg font-semibold"> HEXTEC: entropy </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                메인기획으로 참여하였으며 전반적 작업지시와 사운드 담당하였음
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="max-w-[1920px] w-full mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">기술과 경험</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              현재 미흡하나 졸업 전까지 경험과 기술을 발전시키고 쌓아나갈 계획입니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-8">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold">기술</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>게임기획</li>
                <li>게임 컨텐츠 기획</li>
                <li>레벨디자인</li>
                <li>유저 경험 디자인</li>
                <li>QA작업</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold">사용가능한 툴</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>Unity</li>
                <li>3D Max</li>
                <li>Microsoft Office</li>
                
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold">연혁</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>4개 프로젝트 참여</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t flex justify-center">
        <div className="max-w-[1920px] w-full mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Feel free to reach out to me for any inquiries or collaborations.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="grid gap-2">
              <div className="grid grid-cols-2 gap-2">
                <input className="p-2 border rounded" placeholder="Name" type="text" />
                <input className="p-2 border rounded" placeholder="Email" type="email" />
              </div>
              <input className="p-2 border rounded" placeholder="Subject" type="text" />
              <textarea className="p-2 border rounded" placeholder="Message" rows={4} />
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
