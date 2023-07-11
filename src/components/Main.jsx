import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Popular from './Popular';

export default function Main() {
  return (
    <>
      <div className=" justify-between  m-auto mt-0 w-full h-screen relative top-0">
        <img
          src={require('../images/joker3.jpg')}
          className=" object-cover absolute  w-full h-2/3 z-0"
        />
        <Header />
        <Intro />
      </div>
      <Popular />
    </>
  );
}
