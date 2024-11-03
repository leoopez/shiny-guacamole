import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <div className="fixed -z-10 top-10 left-10 big-grid h-fit w-fit bg-pattern p-4 font-caviet text-xl text-slate-800  opacity-50">
        <div className="bg-diagonal-pattern-yellow col-start-2 col-span-3 row-start-15 row-span-16 flex justify-center items-center	">
          <span className="h-fit">API</span>
        </div>
        <div className="bg-diagonal-pattern-green col-start-7	col-span-10 row-start-16 row-span-4 flex justify-center items-center	">
          <span className="h-fit">Payment</span>
        </div>
        <div className="bg-diagonal-pattern-green col-start-7	 col-span-10 row-start-21 row-span-4 flex justify-center items-center	">
          <span className="h-fit">Serivice</span>
        </div>
        <div className="bg-diagonal-pattern-green col-start-7	 col-span-10 row-start-26 row-span-4 flex justify-center items-center	">
          <span className="h-fit">Authentication</span>
        </div>
        <div className="bg-diagonal-pattern-blue col-start-18	 col-span-8 row-start-4 row-span-8 flex justify-center items-center">
          <span className="h-fit">3th Party</span>
        </div>
        <div className="bg-diagonal-pattern-pink col-start-22	 col-span-4 row-start-16 row-span-4 flex justify-center items-center">
          <span className="h-fit">Q</span>
        </div>
        <div className="bg-diagonal-pattern-pink col-start-22	 col-span-4 row-start-21 row-span-4 flex justify-center items-center">
          <span className="h-fit">Q</span>
        </div>
        <div className="bg-diagonal-pattern-pink col-start-22	 col-span-4 row-start-26 row-span-4 flex justify-center items-center">
          <span className="h-fit">Q</span>
        </div>
        <div className="bg-diagonal-pattern-green col-start-30	 col-span-10 row-start-16 row-span-4 flex justify-center items-center">
          <span className="h-fit">Process</span>
        </div>
        <div className="bg-diagonal-pattern-green col-start-30	 col-span-10 row-start-21 row-span-4 flex justify-center items-center">
          <span className="h-fit">Process</span>
        </div>
        <div className="bg-diagonal-pattern-green col-start-30	 col-span-10 row-start-26 row-span-4 flex justify-center items-center">
          <span className="h-fit">Process</span>
        </div>
        <div className="bg-diagonal-pattern-red col-start-41	 col-span-4 row-start-16 row-span-4 flex justify-center items-center">
          <span className="h-fit">DB</span>
        </div>
        <div className="bg-diagonal-pattern-red col-start-41	 col-span-4 row-start-21 row-span-4 flex justify-center items-center">
          <span className="h-fit">DB</span>
        </div>
        <div className="bg-diagonal-pattern-red col-start-41	 col-span-4 row-start-26 row-span-4 flex justify-center items-center">
          <span className="h-fit">DB</span>
        </div>
        <div className="bg-diagonal-pattern-blue col-start-18	 col-span-8 row-start-34 row-span-8 flex justify-center items-center">
          <span className="h-fit">3th Party</span>
        </div>
        <div className="bg-diagonal-pattern-purple col-start-50	 col-span-8 row-start-28 row-span-8 flex justify-center items-center">
          <span className="h-fit">Data Lake</span>
        </div>
        <div className="bg-diagonal-pattern-orange col-start-50 col-span-3 row-start-6 row-span-16 flex justify-center items-center	">
          <span className="h-fit">BUS</span>
        </div>
      </div>
      <header className="flex flex-col items-center gap-10">
        <div className="flex flex-col gap-16 min-h-screen items-center justify-center">
          <div className="flex flex-col items-center gap-9 text-center">
            <h1 className="text-7xl	font-bold max-w-5xl typewriter">
              Building Software That Holds Value
            </h1>
            <p className="text-2xl font-semibold max-w-3xl leading-none">
              Hi
              <img
                src="/meow_firefighter.png"
                alt="meow_firefighter"
                className="inline w-10"
              />
              , I&apos;m Leonardo. I create dynamic apps that better user
              experience. Thanks for pass by c:
            </p>
            <div className="flex gap-4 text-xl">
              <button className="bg-slate-800 font-medium	 text-white  px-4 rounded-md">
                About Me &#x2193;
              </button>
              <button className="bg-slate-200 font-medium	 text-black py-2 px-4 rounded-md">
                Read My Resume &#x2192;
              </button>
            </div>
          </div>
          <div className="flex flex-col text-xl font-semibold	text-black">
            <div className="bg-slate-900 rounded-t-lg flex gap-2 p-4">
              <p className="h-5 w-5 bg-red-500 rounded-[50%]"></p>
              <p className="h-5 w-5 bg-yellow-500 rounded-[50%]"></p>
              <p className="h-5 w-5 bg-green-500 rounded-[50%]"></p>
            </div>
            <div className="bg-slate-100 rounded-b-lg p-2">
              <p className="">
                <span className="text-green-500">➜ </span>
                <span className="text-cyan-500">shiny-guacamole </span>
                <span className="text-blue-500">git:&#40;</span>
                <span className="text-red-500">main</span>
                <span className="text-blue-500">&#41;</span>
                <span className="text-yellow-500">: </span>
                git add .
              </p>
              <p className="">
                <span className="text-green-500">➜ </span>
                <span className="text-cyan-500">shiny-guacamole </span>
                <span className="text-blue-500">git:&#40;</span>
                <span className="text-red-500">main</span>
                <span className="text-blue-500">&#41;</span>
                <span className="text-yellow-500">: </span>
                git commit -m &quot;first commit of a incredible project&quot;
              </p>
              <p className="">
                <span className="text-green-500">➜ </span>
                <span className="text-cyan-500">shiny-guacamole </span>
                <span className="text-blue-500">git:&#40;</span>
                <span className="text-red-500">main</span>
                <span className="text-blue-500">&#41;</span>
                <span className="text-yellow-500">: </span>
                git push origin
              </p>
              <p className="">
                <span className="text-green-500">➜ </span>
                <span className="text-cyan-500">shiny-guacamole </span>
                <span className="text-blue-500">git:&#40;</span>
                <span className="text-red-500">main</span>
                <span className="text-blue-500">&#41;</span>
                <span className="text-yellow-500">: </span>
                clear
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
