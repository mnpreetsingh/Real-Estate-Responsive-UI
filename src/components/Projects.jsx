import React from "react";

function Projects() {
  return (
    <section className="p-5 flex flex-col gap-8 max-w-[1200px] mx-auto">
      <h2 className="mt-4 text-xl md:text-4xl font-semibold text-black-dark">
        Our Best <br /> Projects
      </h2>
      <div className="grid grid-cols-2 gap-5 max-w-[360px] md:grid-cols-4 md:max-w-[1200px]">
        <img src="/bigProject/bigProject1.png" alt="" />
        <img src="/bigProject/bigProject2.png" alt="" />
        <img src="/bigProject/bigProject3.png" alt="" />
        <img src="/bigProject/bigProject4.png" alt="" />
      </div>
    </section>
  );
}

export default Projects;
