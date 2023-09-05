"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Frame4 from "../../../public/Assets/Images/Frame4.png";
import Image from "next/image";

const SlideText = ({ title }: { title: string }) => {
  return (
    <>
      <section 
      className="flex  text-white"
      >
        <div className="Slider-text-wraper">
          <Marquee>{title}</Marquee>
        </div>

        {/* <Image
      src={Frame4}
      width={500}
      height={500}
      alt="Picture of the author"
    /> */}
      </section>
    </>
  );
};

export default SlideText;
