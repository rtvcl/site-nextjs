import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="flex p-5 gap-5 items-center  relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:bg-black before:-z-10 before:rounded-l-3xl before:translate-x-1/4 ">
      <div className="w-3/5  relative h-full flex flex-col justify-center">
        <Image
          src="/img-1.png"
          alt="Profile Image"
          layout="responsive"
          width="100%"
          height="100%"
          className="bg-blue-200 rounded-3xl "
        />
      </div>
      <div className="flex flex-col gap-1 w-full justify-between text-white">
        <h1 className="text-2xl font-bold">Wira</h1>
        <p className="text-sm leading-4">
          Coming from a tech background, today I am trying to find a sweet spot
          between Business, Tech, and Design to face and solve user&apos;s
          problems as a Product Manager.
        </p>
        <Link href={'/about'}>
          <button className="bg-white text-black rounded-md mt-3 hover:bg-gray-200">
            Read me!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
