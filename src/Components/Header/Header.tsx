'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <main>
        <section className="flex flex-row justify-between items-center p-5">
          <div className="flex flex-row justify-start items-center gap-2">
            <Image
              src="/logo.png"
              width={20}
              height={20}
              alt="Picture of Logo"
            />
            <h5 className="text-white text-[1rem]">
              {!click ? 'Lorem ' : 'Menu'}
            </h5>
          </div>

          <div className="text-white lg:hidden md:hidden md:block">
            <ul className="flex flex-row justify-start items-center gap-5 text-[1rem]">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Dolor</Link>
              </li>
            </ul>
          </div>

          <div className="text-white md:hidden block text-3xl">
            {!click ? (
              <div
                onClick={() => {
                  setClick(!click);
                }}
              >
                <FaBars />
              </div>
            ) : (
              <div
                onClick={() => {
                  setClick(!click);
                }}
              >
                <FaTimes />
              </div>
            )}
          </div>
        </section>
        {click && (
          <section className="px-10 pt-32 md:hidden block">
            <ul className="text-xl text-white flex flex-col justify-start gap-5">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Dolor</Link>
              </li>
              <li className="flex flex-row justify-start gap-10 text-[#ffffff] opacity-70">
                <Link href="#">Lorem ipsum</Link>
                <Link href="#">Comming Soon</Link>
              </li>
            </ul>
          </section>
        )}
      </main>
    </>
  );
};

export default Header;
