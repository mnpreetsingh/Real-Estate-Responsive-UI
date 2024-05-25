import React from "react";

function News() {
  return (
    <section className="p-5 max-w-[1200px] mx-auto">
      <h2 className="mt-4 text-xl font-semibold text-black-dark md:text-4xl">
        News & Update
      </h2>
      <div className="flex gap-5 overflow-x-auto mt-4">
        <div className="flex flex-col gap-2 min-w-[250px]">
          <div>
            <img className="shadow-md md:w-[370px]" src="/service/service3.png" alt="" />
          </div>
          <div className="flex gap-4 ">
            <div >
              <p className="text-2xl font-semibold text-black-dark leading-none" >12</p>
              <p className="text-base text-center">Jan</p>
            </div>
            <h4 className="font-semibold text-md md:text-lg">Elements of Paint</h4>
          </div>
          <p className="text-base text-gray-dark md:text-md ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque consequuntur ut eveniet autem porro beatae facere ratione similique minima...
            <span className="text-blue-500">Read more</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 min-w-[250px]">
          <div>
            <img className="shadow-md md:w-[370px]" src="/service/service2.png" alt="" />
          </div>
          <div className="flex gap-4 ">
            <div >
              <p className="text-2xl font-semibold text-black-dark leading-none" >12</p>
              <p className="text-base text-center">Jan</p>
            </div>
            <h4 className="font-semibold text-md md:text-lg">Right Steps in Warehouse Planning</h4>
          </div>
          <p className="text-base text-gray-dark md:text-md ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque consequuntur ut eveniet autem porro beatae facere ratione similique minima...
            <span className="text-blue-500">Read more</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 min-w-[250px]">
          <div>
            <img className="shadow-md md:w-[370px]" src="/service/service1.png" alt="" />
          </div>
          <div className="flex gap-4 ">
            <div >
              <p className="text-2xl font-semibold text-black-dark leading-none" >12</p>
              <p className="text-base text-center">Jan</p>
            </div>
            <h4 className="font-semibold text-md md:text-lg">Right Solution to Build Home</h4>
          </div>
          <p className="text-base text-gray-dark md:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque consequuntur ut eveniet autem porro beatae facere ratione similique minima...
            <span className="text-blue-500">Read more</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default News;
