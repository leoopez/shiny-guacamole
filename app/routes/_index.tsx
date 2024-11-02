import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-9 text-center">
            <h1 className="text-7xl	font-bold max-w-5xl">
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
          <div className="flex flex-col text-xl font-bold	text-black">
            <div className="bg-slate-900 rounded-t-2xl flex gap-2 p-4">
              <p className="h-5 w-5 bg-red-500 rounded-[50%]"></p>
              <p className="h-5 w-5 bg-yellow-500 rounded-[50%]"></p>
              <p className="h-5 w-5 bg-green-500 rounded-[50%]"></p>
            </div>
            <div className="bg-slate-100 rounded-b-2xl p-2">
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
        </header>
      </div>
    </div>
  );
}
