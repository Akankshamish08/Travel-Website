import React from "react";

function About() {
  return (
    <>
   
      <div className="flex row justify-between gap-6 p-9 m-5 items-center ">
        <div>
          {" "}
          <h6 className="text-[10px]   text-center md:text-[30px] lg:text-[45px] tracking-[0.1rem] text-lime-600 font-bold uppercase">
            About Mr. Arun
          </h6>
         
        </div>
        <div>
          <p className=" text-[20px] p-9  text-black-600 ">
            Mr. Arun is a retired journalist with over 30 years of experience in
            the field. Throughout his career, he has covered major events,
            conducted impactful interviews, and mentored countless aspiring
            journalists.
          </p>
          <p className=" text-[20px] p-9  text-black-600 ">
            Now, he is ready to share his wealth of knowledge and practical
            insights with you through this exclusive 2-week online course.
          </p>
        </div>
        <p></p>
      </div>
      
    </>
  );
}

export default About;
