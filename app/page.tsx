import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="max-w-[1920px] w-full mx-auto grid items-center justify-center gap-6 px-4 text-center md:px-6">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Shin min cher</h1>
            <h2 className="text-2xl font-medium text-gray-500 dark:text-gray-400">Game Designer</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I participated in 4 projects at Sogang mtec.
              I did balance design in the first project, skill content design in the second project, and I am currently planning to submit it to GIGDC in charge of main planning in the 4th project.
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">A Participate Projects</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              List of production projects.
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
                RTS like a chess game
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
                A similar game to Vampire Survival, and took charge of skill design for 3 characters.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Game 3"
                className="mb-4 aspect-video w-full rounded-md object-cover"
                height="300"
                src="/images/projectHEX.jpg"
                width="400"
              />
              <h3 className="text-lg font-semibold"> Project SP </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A text RPG game about space pirates and their journey.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Game 2"
                className="mb-4 aspect-video w-full rounded-md object-cover"
                height="300"
                src="/images/prosp.png"
                width="400"
              />
              <h3 className="text-lg font-semibold"> HEXTEC: entropy </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                He was in charge of the main planning and was in charge of the overall production and sound of the game.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="max-w-[1920px] w-full mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills and Experience</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              As a game planner, I have very inexperienced skills, but I will learn related skills using my strengths until graduation
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-8">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold">Skills</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>Game Design</li>
                <li>Game content Design</li>
                <li>Level Design</li>
                <li>UI/UX Design</li>
                <li>Prototyping</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold">Tools</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>Unity</li>
                <li>3D Max</li>
                <li>Microsoft Office</li>
                <li>Many ai tools</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold">Experience</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>Participate in 4 game projects</li>
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
