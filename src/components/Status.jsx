import React from "react";

function Status() {
  return (
    <main>
      <section className="blue-grad-2 text-white p-5 gap-4 flex flex-col md:hidden">
        <div className="flex justify-between">
          <div>
            <div className="flex items-baseline">
              <h2 className="text-3xl font-bold">25</h2>
              <h2 className="text-lg font-medium ml-1">Years</h2>
            </div>
            <h3 className="text-xl font-semibold -mt-3">Operated</h3>
          </div>
          <div className="text-xl font-bold">EST</div>
        </div>
        <p className="text-sm">
          As a trusted general project that has been operating for 25 years, our
          commitment is always to prioritize our client satisfaction.
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold">300+</h3>
            <p>
              Happy <br /> Client
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold">900+</h3>
            <p>
              Amazing <br /> Projects
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold">20+</h3>
            <p>
              Award <br /> Winnings
            </p>
          </div>
        </div>
      </section>
      

      {/* BRAND LOGO  */}
      <div className="p-5 max-w-[1200px] mx-auto flex gap-12 h-[100px] md:h-[200px] items-center overflow-x-auto md:justify-between">
        <div className="h-20 grid place-content-center ">
          <img className="min-w-[6rem] md:min-w-[8rem]" src="/brand/brand1.png" alt="" />
        </div>
        <div className="h-20 grid place-content-center ">
          <img className="min-w-[6rem] md:min-w-[8rem]" src="/brand/brand2.png" alt="" />
        </div>
        <div className="h-20 grid place-content-center ">
          <img className="min-w-[6rem] md:min-w-[8rem]" src="/brand/brand3.png" alt="" />
        </div>
        <div className="h-20 grid place-content-center ">
          <img className="min-w-[6rem] md:min-w-[8rem]" src="/brand/brand4.png" alt="" />
        </div>
        <div className="h-20 grid place-content-center ">
          <img className="min-w-[6rem] md:min-w-[8rem]" src="/brand/brand5.png" alt="" />
        </div>
      </div>
    </main>
  );
}

export default Status;
