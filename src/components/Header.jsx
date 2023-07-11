import React from 'react';

export default function Header() {
  return (
    <div className="bg-transparent w-full absolute top-0 flex flex-row justify-between m-auto p-5 z-10">
      <div className="font-kanit bg-transparent">
        <p className="text-white text-3xl bg-transparent">MovieBoxd</p>
      </div>
      <div className="hidden md:flex flex-row gap-3 font-kanit bg-transparent ">
        {/* <p className="text-white bg-transparent">LOG IN</p>
        <p className="text-white bg-transparent">SIGN UP</p> */}
        <p className="text-white bg-transparent">MOVIES</p>
      </div>
    </div>
  );
}
