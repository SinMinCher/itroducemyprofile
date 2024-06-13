import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="max-w-[1920px] w-full mx-auto grid items-center justify-center gap-6 px-4 text-center md:px-6">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">John Doe</h1>
            <h2 className="text-2xl font-medium text-gray-500 dark:text-gray-400">Game Designer</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              With over 10 years of experience in the gaming industry, I have designed award-winning games that have
              captivated audiences worldwide. My passion for creating immersive and engaging experiences is at the heart
              of everything I do.
            </p>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="550"
            src="/placeholder.svg"
            width="550"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center">
        <div className="max-w-[1920px] w-full mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore a selection of my most acclaimed game designs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Game 1"
                className="mb-4 aspect-video w-full rounded-md object-cover"
                height="300"
                src="/placeholder.svg"
                width="400"
              />
              <h3 className="text-lg font-semibold">Cosmic Odyssey</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                An immersive space exploration game that takes players on a thrilling journey through the cosmos.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Game 2"
                className="mb-4 aspect-video w-full rounded-md object-cover"
                height="300"
                src="/placeholder.svg"
                width="400"
              />
              <h3 className="text-lg font-semibold">Enchanted Realms</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A fantasy role-playing game that immerses players in a world of magic, adventure, and enchantment.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <img
                alt="Game 3"
                className="mb-4 aspect-video w-full rounded-md object-cover"
                height="300"
                src="/placeholder.svg"
                width="400"
              />
              <h3 className="text-lg font-semibold">Pixel Playground</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A retro-inspired arcade game that challenges players with fast-paced action and vibrant pixel art.
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
              I have a diverse set of skills and extensive experience in the gaming industry, allowing me to create
              exceptional game designs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-8">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold">Skills</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>Game Design</li>
                <li>Level Design</li>
                <li>Narrative Design</li>
                <li>UI/UX Design</li>
                <li>Prototyping</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold">Tools</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>Unity</li>
                <li>Unreal Engine</li>
                <li>Adobe Creative Suite</li>
                <li>Figma</li>
                <li>Jira</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold">Experience</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>10+ years in the gaming industry</li>
                <li>Designed 5 award-winning games</li>
                <li>Collaborated with teams of 20+ developers</li>
                <li>Managed game projects from concept to launch</li>
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

