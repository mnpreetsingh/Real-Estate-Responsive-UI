import React from "react";

function HeroSection() {
  return (
    <section className="black-grad">
      <div className="black-grad text-white flex flex-col md:flex-row md:items-end md:gap-10 max-w-[1200px] mx-auto ">
        <div className="flex flex-col pt-10 px-5 text-white gap-2 mb:pb-20">
          <h1 className="font-medium text-xl md:text-5xl">
            We Provide <br /> Architectural Design <br /> and Construction
          </h1>
          <p className="text-[#C4C4C4] text-base md:text-md md:max-w-[35rem]">
            More than 100 building and housing projects that we have built. The
            building owner chose us over other contractors in Delhi, because our
            work is different.
          </p>
          <button className="self-start px-3 py-1.5 mt-2 blue-grad">
            Discover More
          </button>
          <div class=" md:flex justify-between mt-8 hidden mb-8 ">
            <div class="flex flex-col">
              <h3 class="text-xl font-bold text-white">300+</h3>
              <p>
                Happy <br />
                Client
              </p>
            </div>
            <div class="flex flex-col">
              <h3 class="text-xl font-bold text-white">900+</h3>
              <p>
                Amazing <br />
                Projects
              </p>
            </div>
            <div class="flex flex-col">
              <h3 class="text-xl font-bold text-white">20+</h3>
              <p>
                Awards
                <br />
                Winnings
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image  */}
        <div>
          <div class="flex justify-end -mt-32 ">
            <picture>
              <source
                media="(min-width: 765px)"
                srcset="images/big_hero_image.png"
              />
              <source
                media="(max-width: 768px)"
                srcset="images/hero_building.png"
              />
              <img
                src="images/hero_building.png"
                alt="Small building"
                class="md:w-[500px]"
              />
            </picture>
          </div>
          <section class="blue-grad-2 p-5 text-white gap-12 hidden flex-col md:flex">
            <div class="flex justify-between gap-8">
              <div class="text-xl font-bold">EST</div>
              <div>
                <div class="flex items-baseline">
                  <h2 class="text-3xl font-bold text-white">25</h2>
                  <h2 class="text-lg font-medium ml-1 text-white">Years</h2>
                </div>
                <h3 class="-mt-3 text-white">Operated</h3>
              </div>
              <p class="text-sm max-w-[400px]">
                As a trusted general project that has been operating for 25
                years, our commitment is always to prioritize our client
                satisfaction.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
