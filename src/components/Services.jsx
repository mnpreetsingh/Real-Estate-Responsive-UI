import React from "react";

function Services() {
  return (
    <section className="p-5 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-2 text-center md:flex-row md:justify-between md:items-center">
        <h2 className="text-xl font-semibold text-black-dark md:text-4xl">
          Our Excellent Services
        </h2>
        <p className="text-base text-gray-dark md:text-md md:max-w-[560px] ">
          Check out our best service you can possibly orders in building your
          company and don't forget to ask via our email or our customer service
          if you are interested in using our services
        </p>
      </div>

      {/* Service CARD  */}
      <div className="flex gap-5 overflow-x-auto mt-4 md:mt-20">
        <div className="flex flex-col gap-2 min-w-[16.25rem]">
          <div>
            <img className="shadow-md md:w-[370px] md:h-[290px]" src="/service/service1.png" alt="" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-black-dark">Industrial</h3>
          <p className="text-base md:text-md text-gray-dark md:w-[400px] ">
            Industrial development is our main line of business. We do Factory
            Construction, Warehouse and others.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-w-[16.25rem]">
          <div>
            <img className="shadow-md md:w-[370px] md:h-[290px]" src="/service/service2.png" alt="" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-black-dark">Commercial</h3>
          <p className="text-base md:text-md text-gray-dark md:w-[400px] ">
            Our experience building in the Commercial field includes Showrooms,
            Supermalls and Office Buildings.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-w-[16.25rem]">
          <div>
            <img className="shadow-md md:w-[370px] md:h-[290px] " src="/service/service3.png" alt="" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-black-dark">Resedential</h3>
          <p className="text-base text-gray-dark md:text-md md:w-[400px]">
            Residential development is the beginning that has shaped us to this
            day. Our development includes Houses & Apartments.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
