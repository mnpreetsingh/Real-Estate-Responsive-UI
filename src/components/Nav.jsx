import React from "react";

function Nav() {
  return (
    <>
      <nav class="bg-[#2B2B2B]">
        <div class="px-5 max-w-[1200px] mx-auto  text-white hidden h-10 items-center justify-between md:flex">
          <div class="text-[20px] font-bold">EST</div>
          <ul class="flex justify-between gap-20">
            <li>Home</li>
            <li>Servies</li>
            <li>Find a Team</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <nav class="px-5 bg-[#2B2B2B] text-white flex h-10 items-center justify-between md:hidden">
        <div class="text-[20px] font-bold">EST</div>
        <div>
          <img src="images/menu_icon.svg" />
        </div>
      </nav>
    </>
  );
}

export default Nav;
