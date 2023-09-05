'use client';
import { Footer_Data } from '@/Constant';
import Image from 'next/image';
import { useState } from 'react';

const Accordion = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<number>();
  return (
    <>
      {Footer_Data.map((item, index: number) => {
        return (
          <div key={index} className="cursor-pointer">
            <div className=" rounded p-2 pb-2 ">
              <div className="relative h-[45px]">
                <div
                  className={`container mx-auto max-w-[1237px] wrapper px-5 h-[48px] flex justify-between items-center relative ${
                    open && id === index ? 'Slider-text-wraper' : ''
                  } `}
                  onClick={() => {
                    setOpen(true), setId(index);
                  }}
                >
                  <p className="text-white uppercase lg:text-[1.5rem] md:text-[1rem] xs:text-[1rem]">
                    {item.que}
                  </p>
                  <div>
                    <button className="w-full text-left text-white font-semibold focus:outline-none">
                      <Image
                        src={
                          id === index && open ? '/Vector2.png' : '/Vector1.png'
                        }
                        loading="lazy"
                        decoding="async"
                        data-nimg="1"
                        width={18}
                        height={18}
                        alt="Picture of Logo"
                      />
                    </button>
                  </div>
                </div>
              </div>
              {id === index && open && (
                <div className="container mx-auto max-w-[1237px] px-5">
                  <p className="flex justify-around max-w-[77rem] leading-7 mt-5 text-[#a1a1a1] text-white p">
                    {item.ans}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
