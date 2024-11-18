import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-pattern ">
      <header className="flex flex-col gap-6 min-h-screen ">
        <nav className="flex justify-between items-center p-4 w-full">
          <ul className="flex gap-4 w-full justify-around">
            <div>
              <li>
                <img src="./home.svg" className="w-10" alt="" />
              </li>
            </div>
            <div className="flex gap-10 text-xl font-light">
              <li>
                <div>About</div>
              </li>
              <li>
                <div>Projects</div>
              </li>
              <li>
                <div>Contact</div>
              </li>
            </div>
          </ul>
        </nav>
        <div className="flex flex-col gap-9 text-center backdrop-opacity-0 items-center p-10 rounded-md">
          <h1 className="text-6xl	font-bold max-w-6xl typewriter">
            Building Software That Holds Value
          </h1>
          <div className="flex flex-col gap-9 text-center rounded-xl items-center">
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
              <button className="bg-slate-50 font-medium	 text-black py-2 px-4 rounded-md">
                Read My Resume &#x2192;
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-screen items-center">
          <div className="flex items-center justify-center w-full">
            <div className="big-grid p-4 font-light font-caviet text-xl text-slate-800 ">
              <div className="bg-diagonal-pattern-yellow col-start-1 col-span-3 row-start-12 row-span-16 flex justify-center items-center	">
                <span className="h-fit">API</span>
              </div>
              <div className="bg-diagonal-pattern-green col-start-8	col-span-10 row-start-13 row-span-4 flex justify-center items-center	">
                <span className="h-fit">Payment</span>
              </div>
              <div className="bg-diagonal-pattern-green col-start-8	 col-span-10 row-start-18 row-span-4 flex justify-center items-center	">
                <span className="h-fit">Serivice</span>
              </div>
              <div className="bg-diagonal-pattern-green col-start-8	 col-span-10 row-start-23 row-span-4 flex justify-center items-center	">
                <span className="h-fit">Authentication</span>
              </div>
              <div className="bg-diagonal-pattern-blue col-start-18	 col-span-8 row-start-1 row-span-8 flex justify-center items-center">
                <span className="h-fit">3th Party</span>
              </div>
              <div className="bg-diagonal-pattern-pink col-start-22	 col-span-4 row-start-13 row-span-4 flex justify-center items-center">
                <span className="h-fit">Q</span>
              </div>
              <div className="bg-diagonal-pattern-pink col-start-22	 col-span-4 row-start-18 row-span-4 flex justify-center items-center">
                <span className="h-fit">Q</span>
              </div>
              <div className="bg-diagonal-pattern-pink col-start-22	 col-span-4 row-start-23 row-span-4 flex justify-center items-center">
                <span className="h-fit">Q</span>
              </div>
              <div className="bg-diagonal-pattern-green col-start-30	 col-span-10 row-start-13 row-span-4 flex justify-center items-center">
                <span className="h-fit">Process</span>
              </div>
              <div className="bg-diagonal-pattern-green col-start-30	 col-span-10 row-start-18 row-span-4 flex justify-center items-center">
                <span className="h-fit">Process</span>
              </div>
              <div className="bg-diagonal-pattern-green col-start-30	 col-span-10 row-start-23 row-span-4 flex justify-center items-center">
                <span className="h-fit">Process</span>
              </div>
              <div className="bg-diagonal-pattern-red col-start-41	 col-span-4 row-start-13 row-span-4 flex justify-center items-center">
                <span className="h-fit">DB</span>
              </div>
              <div className="bg-diagonal-pattern-red col-start-41	 col-span-4 row-start-18 row-span-4 flex justify-center items-center">
                <span className="h-fit">DB</span>
              </div>
              <div className="bg-diagonal-pattern-red col-start-41	 col-span-4 row-start-23 row-span-4 flex justify-center items-center">
                <span className="h-fit">DB</span>
              </div>
              <div className="bg-diagonal-pattern-blue col-start-18	 col-span-8 row-start-31 row-span-8 flex justify-center items-center">
                <span className="h-fit">3th Party</span>
              </div>
              <div className="bg-diagonal-pattern-purple col-start-	 col-span-8 row-start-25 row-span-8 flex justify-center items-center">
                <span className="h-fit">Data Lake</span>
              </div>
              <div className="bg-diagonal-pattern-orange col-start-50 col-span-3 row-start-3 row-span-16 flex justify-center items-center	">
                <span className="h-fit">BUS</span>
              </div>
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-16 row-start-5  col-span-2 row-span-2"
                alt=""
              />
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-48 row-start-7 col-span-2 row-span-2"
                alt=""
              />
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-48 row-start-11 col-span-2 row-span-2"
                alt=""
              />
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-48 row-start-15 col-span-2 row-span-2"
                alt=""
              />
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-48 row-start-26 col-span-2 row-span-2"
                alt=""
              />
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-48 row-start-30 col-span-2 row-span-2"
                alt=""
              />
              <div className="col-start-38 row-start-8 col-span-11 row-span-5 border-t-4 border-l-4 border-black" />
              <div className="col-start-40 row-start-12 col-span-6 row-span-8 border-b-4 border-r-4 border-black" />
              <div className="col-start-40 row-start-17 col-span-6 row-span-8 border-b-4 border-r-4 border-black" />
              <div className="col-start-14 row-start-6 col-span-3 row-span-7 border-t-4 border-l-4 border-black" />
              <div className="col-start-46 row-start-12 col-span-3 border-t-4 border-black" />
              <div className="col-start-46 row-start-31 col-span-3 border-t-4 border-black" />
              <div className="col-start-46 row-start-27 col-span-3 border-t-4 border-black" />
              <div className="col-start-46 row-start-16 col-span-3 border-t-4 border-black" />
              <div className="col-start-43 row-start-25 col-span-3 row-span-6 border-r-4 border-black" />
              <div className="col-start-4 row-start-15 col-span-3 border-t-4 border-black" />
              <div className="col-start-4 row-start-20 col-span-3 border-t-4 border-black" />
              <div className="col-start-4 row-start-25 col-span-3 border-t-4 border-black" />
              <div className="col-start-18 row-start-15 col-span-3 border-t-4 border-black" />
              <div className="col-start-18 row-start-20 col-span-3 border-t-4 border-black" />
              <div className="col-start-18 row-start-25 col-span-3 border-t-4 border-black" />
              <div className="col-start-26 row-start-15 col-span-3 border-t-4 border-black" />
              <div className="col-start-26 row-start-20 col-span-3 border-t-4 border-black" />
              <div className="col-start-26 row-start-25 col-span-3 border-t-4 border-black" />
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-6 row-start-14  col-span-2 row-span-2"
                alt=""
              />
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-6 row-start-19  col-span-2 row-span-2"
                alt=""
              />
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-6 row-start-24  col-span-2 row-span-2"
                alt=""
              />
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-20 row-start-14  col-span-2 row-span-2"
                alt=""
              />
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-20 row-start-19  col-span-2 row-span-2"
                alt=""
              />
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-20  row-start-24  col-span-2 row-span-2"
                alt=""
              />
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-28 row-start-14  col-span-2 row-span-2"
                alt=""
              />
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-28 row-start-19  col-span-2 row-span-2"
                alt=""
              />
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-28  row-start-24  col-span-2 row-span-2"
                alt=""
              />
              <img
                src="./triangle-svgrepo-com.svg"
                className="rotate-90 col-start-16  row-start-33  col-span-2 row-span-2"
                alt=""
              />
              <div className="col-start-14 row-start-27 row-span-7 col-span-3 border-b-4 border-l-4 border-black" />
            </div>
            <div className="medium-grid p-4 font-light font-caviet text-xl text-slate-800 ">
              <div className="bg-diagonal-pattern-orange rounded-[50%] row-start-1 col-span-5 row-span-5 col-start-6"></div>
              <div className="col-start-6 row-start-6  col-span-1 row-span-6 border-l-4 border-black rotate-205" />
              <div className="col-start-12 row-start-3  col-span-13 row-span-4 border-t-4 border-black" />
              <div className="col-start-8 row-start-14  col-span-7 row-span-4 border-t-4 border-black" />
              <div className="col-start-22 row-start-13  col-span-13 row-span-4 border-t-4 border-black -rotate-6" />
              <div className="col-start-12 row-start-30  col-span-19 row-span-4 border-t-4 border-black" />
              <div className="col-start-6 row-start-18  col-span-1 row-span-9 border-l-4 border-black -rotate-12" />
              <div className="col-start-36 row-start-16  col-span-1 row-span-11 border-l-4 border-black rotate-12" />
              <div className="col-start-34 row-start-4  col-span-1 row-span-6 border-l-4 border-black -rotate-50" />
              <div className="col-start-11 row-start-25  col-span-15 row-span-1 border-t-4 border-black -rotate-22" />
              <div className="col-start-31 row-start-16  col-span-5 row-span-1 border-t-4 border-black -rotate-40" />
              <div className="bg-diagonal-pattern-orange rounded-[50%]  row-start-1 col-span-5 row-span-5 col-start-26"></div>
              <div className="bg-diagonal-pattern-orange rounded-[50%]  col-span-5 row-span-5 col-start-2 row-start-12"></div>
              <div className="bg-diagonal-pattern-orange rounded-[50%]  col-span-5 row-span-5 col-start-16 row-start-12"></div>
              <div className="bg-diagonal-pattern-orange rounded-[50%]  col-span-5 row-span-5 col-start-26 row-start-18"></div>
              <div className="bg-diagonal-pattern-orange rounded-[50%]  col-span-5 row-span-5 col-start-6 row-start-28"></div>
              <div className="bg-diagonal-pattern-orange rounded-[50%]  col-span-5 row-span-5 col-start-32 row-start-28"></div>
              <div className="bg-diagonal-pattern-orange rounded-[50%]  col-span-5 row-span-5 col-start-36 row-start-10"></div>
            </div>
            <div className="medium-grid p-4 font-light font-caviet text-xl text-slate-800 ">
              <div className="bg-diagonal-pattern-green rounded-[50%]  col-span-5 row-span-5 col-start-18"></div>
              <div className="bg-diagonal-pattern-green rounded-[50%]  col-span-5 row-span-5 col-start-10 row-start-12"></div>
              <img
                src="./triangle-svgrepo-com.svg"
                className="col-start-13 row-start-9  col-span-3 row-span-3 -rotate-25"
                alt=""
              />
              <div className="col-start-16 row-start-6 row-span-6 border-l-4 border-black rotate-35" />
              <div className="bg-diagonal-pattern-green rounded-[50%]  col-span-5 row-span-5 col-start-4 row-start-24"></div>
              <img
                src="./triangle-svgrepo-com.svg"
                className="col-start-7 row-start-21  col-span-3 row-span-3 -rotate-30"
                alt=""
              />
              <div className="col-start-10 row-start-17 row-span-6 border-l-4 border-black rotate-25" />
              <div className="bg-diagonal-pattern-green rounded-[50%]  col-span-5 row-span-5 col-start-16 row-start-22"></div>
              <img
                src="./triangle-svgrepo-com.svg"
                className="col-start-15 row-start-19  col-span-3 row-span-3 rotate-30"
                alt=""
              />
              <div className="col-start-15 row-start-17 row-span-4 border-l-4 border-black -rotate-30" />
              <div className="bg-diagonal-pattern-green rounded-[50%]  col-span-5 row-span-5 col-start-26 row-start-10"></div>
              <img
                src="./triangle-svgrepo-com.svg"
                className="col-start-21 row-start-29  col-span-3 row-span-3 rotate-30"
                alt=""
              />
              <div className="col-start-21 row-start-27 row-span-4 border-l-4 border-black -rotate-30" />
              <div className="bg-diagonal-pattern-green rounded-[50%]  col-span-5 row-span-5 col-start-32 row-start-20"></div>
              <img
                src="./triangle-svgrepo-com.svg"
                className="col-start-31 row-start-17  col-span-3 row-span-3 rotate-30"
                alt=""
              />
              <div className="col-start-31 row-start-15 row-span-4 border-l-4 border-black -rotate-30" />
              <div className="bg-diagonal-pattern-green rounded-[50%]  col-span-5 row-span-5 col-start-22 row-start-32"></div>
              <img
                src="./triangle-svgrepo-com.svg"
                className="col-start-24 row-start-7  col-span-3 row-span-3 rotate-12"
                alt=""
              />
              <div className="col-start-24 row-start-5 row-span-5 border-l-4 border-black -rotate-45" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
