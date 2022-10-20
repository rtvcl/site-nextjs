import React from 'react';
import { SiTwitter, SiLinkedin, SiTiktok, SiInstagram } from 'react-icons/si';
import { BiX } from 'react-icons/bi';
type Props = {};

const DrawerFooter = (props: Props) => {
  return (
    <div className="p-4 flex flex-col">
      <div className="flex flex-wrap text-3xl text-black justify-around py-2">
        <a
          target="_blank"
          href="https://twitter.com/agungwpg"
          className="cursor-pointer"
          rel="noreferrer"
        >
          <SiTwitter />
        </a>
        <a
          target="_blank"
          href="https://instagram.com/agungwpg"
          className="cursor-pointer"
          rel="noreferrer"
        >
          <SiInstagram />
        </a>
        <a target="_blank" href="#" className="cursor-pointer">
          <SiTiktok />
        </a>
        <a
          href="https://www.linkedin.com/in/agungwpg/"
          className="cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin />
        </a>
      </div>
      <button className="bg-black text-white text-lg rounded-md mt-3 px-4 py-2 hover:bg-gray-200 ">
        Download CV
      </button>
    </div>
  );
};

export default DrawerFooter;
