import React from 'react';

export default function Intro() {
  return (
    <div className="-translate-y-8 bg-transparent relative top-2/3  w-full md:w-2/4 m-auto flex flex-col items-center justify-center text-white ">
      <div className="bg-transparent flex-col items-center justify-center font-merriweather">
        <p className="bg-transparent md:text-3xl md:text-center text-sm font-poppins text-center">
          Track films you’ve watched.
        </p>
        <p className="bg-transparent md:text-3xl md:text-center text-sm font-poppins text-center">
          Save those you want to see.
        </p>
        <p className="bg-transparent md:text-3xl md:text-center text-sm font-poppins text-center">
          Tell your friends what’s good.
        </p>
      </div>
      <p className="text-gray-400 md:text-2xl my-5 text-sm">
        The social network for film lovers
      </p>
    </div>
  );
}
