import React from "react";

function Footer() {
  return (
    <footer class="black-grad">
      <div class="mx-auto max-w-[1200px] text-white p-5 flex flex-col md:flex-row gap-[40px] md:gap-[140px] py-20">
        <div class="flex flex-col gap-4 max-w-[550px]">
          <h2 class="text-white text-2xl font-semibold">EST</h2>
          <p>
            is a general contractor company based in Jakarta. More than 25 years
            of experience in building and carving out Indonesia's development.
          </p>
          <div class="flex mt-4 gap-2">
            <img src="/social/logo1.svg" />
            <img src="/social/logo2.svg" />
            <img src="/social/logo3.svg" />
            <img src="/social/logo4.svg" />
          </div>
        </div>
        <div class="flex gap-8">
          <div class="flex flex-col">
            <h4 class="font-semibold text-lg">Company</h4>
            <p class="text-md hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent mt-8">
              About
            </p>
            <p class="text-md hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent mt-4">
              How it works
            </p>
            <p class="text-md hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent mt-4">
              Terms
            </p>
            <p class="text-md hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent mt-4">
              Privacy Policy
            </p>
          </div>
          <div class="flex flex-col">
            <h4 class="font-semibold text-lg">More</h4>
            <p class="text-md hover:border-b-1 hover:border-white cursor-pointer border-b-2 border-transparent mt-8">
              Documentation
            </p>
            <p class="text-md hover:border-b-2 hover:border-white cursor-pointer border-b-2 border-transparent mt-4">
              License
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
