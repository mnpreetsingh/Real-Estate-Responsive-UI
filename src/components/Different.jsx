import React from "react";

function Different() {
  return (
    <section className="p-5 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-2">
        <div className="h-1 w-[90px] blue-grad" />
        <div  className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end">
          <h2 className="text-xl font-semibold text-black-dark md:text-4xl">
            What Make us <br /> Different?
          </h2>
          <p className="text-base text-gray-dark md:text-md md:max-w-[560px]">
            Check out our best service you can possibly orders in building your
            company and don't forget to ask via our email or our customer
            service if you are interested in using our services.
          </p>
        </div>
      </div>

      {/* FEATURES  Card*/}
      <div className=" mt-10 md:mt-20 flex flex-col items-center text-center md:flex-row md:justify-between ">
        <div className="mt-10 flex items-center flex-col gap-2 max-w-[14.625rem] md:h-[370px]">
          <div>
            <img src="/features/icon1.png" alt="" />
          </div>
          <h3 className=" mt-2 text-lg font-semibold text-black-dark">
            Experienced
          </h3>
          <p className="text-base text-gray-dark ">
            Our experience of 25 years of building and making achievements in
            the world of development.
          </p>
        </div>
        <div className="mt-10 flex items-center flex-col gap-2 max-w-[14.625rem] md:h-[370px]">
          <div>
            <img src="/features/icon2.png" alt="" />
          </div>
          <h3 className=" mt-2 text-lg font-semibold text-black-dark">
            Competitive Price
          </h3>
          <p className="text-base text-gray-dark ">
            The prices we offer you are very competitive without reducing the
            quality of the company's work in the slightest.
          </p>
        </div>
        <div className="mt-10 flex items-center flex-col gap-2 max-w-[14.625rem] md:h-[370px]">
          <div>
            <img src="/features/icon3.png" alt="" />
          </div>
          <h3 className=" mt-2 text-lg font-semibold text-black-dark">
            On Time
          </h3>
          <p className="text-base text-gray-dark ">
            We prioritize the quality of our work and finish it on time.
          </p>
        </div>
        <div className="mt-10 flex items-center flex-col gap-2 max-w-[14.625rem] md:h-[370px]">
          <div>
            <img src="/features/icon4.png" alt="" />
          </div>
          <h3 className=" mt-2 text-lg font-semibold text-black-dark">
            Best Material
          </h3>
          <p className="text-base text-gray-dark ">
            The material determines the building itself so we recommend that you
            use the best & quality materials in its class.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Different;
