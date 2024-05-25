import React from "react";

function TeamandStory() {
  return (
    <>
      <section className="p-5 max-w-[1200px] mx-auto flex flex-col md:flex-row">
        <div className="bg-[url('/images/team_bg.png')] h-[340px] bg-no-repeat bg-cover flex justify-center items-end mb-36 md:flex-1 md:mr-40 md:flex-col md:justify-center md:h-[500px] ">
          <div className="flex flex-col items-center gap-2 black-grad h-[250px] w-[250px] relative top-20 md:top-0 p-5 md:-right-24">
            <div>
              <img src="/images/team_avatar.png" alt="" />
            </div>
            <h3 className="text-lg font-semibold text-white">Kylie Jenner</h3>
            <p className="text-base text-white text-center">
              More than 20 years of experience in the field of architecture and
              has worked on 100+ projects.
            </p>
          </div>
        </div>
        {/* --------  */}
        <div className="flex flex-col gap-2 md:flex-1 md:justify-center" > 
          <h2 className="text-xl font-semibold text-black-dark md:text-4xl">
            Meet and Talk with <br /> Our Best Architecture
          </h2>
          <p className="text-base text-gray-dark md:text-md ">
            All our teams are professional and competent in their fields and
            will help you realise your dream building with the excellent result.
          </p>
          <div className="flex justify-between mt-2">
            <button className="bg-[#0A72AD] px-2 py-1.5 text-white">
              See all team
            </button>
            <button className="flex items-center gap-2">
              How it works
              <img src="/images/arrow_icon.svg" />
            </button>
          </div>
        </div>
      </section>

      
      {/* Story Section  */}
      <section className="p-5 flex flex-col gap-4 md:flex-row-reverse max-w-[1200px] mx-auto">
        <img
          className="w-full shadow-md max-w-[570px] flex-1 border-8 border-white"
          src="/images/story_img.png"
          alt=""
        />
        <div className="flex flex-col gap-2 flex-1">
          <h2 className="mt-4 text-xl font-semibold text-black-dark md:text-4xl ">Our Story <br /> Who We Are
          </h2>
          <p className="mt-2 text-base text-gray-dark md:text-md">
            Established in 1992, PT. Wahana Cipta operates as a General
            Contracting company with a footprint that we have planted throughout
            Indonesia. Initially, we focused on construction in the field of
            residential| housing development in Jakarta. As the company grows,
            now we are present as a reliable..
          </p>
          <button className=" mt-5 self-start bg-[#0A72AD] px-2 py-1.5 text-white">
            See more
          </button>
        </div>
      </section>
    </>
  );
}

export default TeamandStory;
