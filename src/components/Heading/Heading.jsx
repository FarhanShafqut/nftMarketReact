import React from 'react'
export default function Heading(prop) {
  return (
    <div className=" py-12 sm:py-0 px-4 mx-auto sm:ms-10  md:ms-14 2xl:ms-52 ">
            <div>
            <h1 className='font-bold text-4xl text-white'>{prop.txt1}</h1>
             <span><h3 className='text-xl text-white mt-3'>{prop.txt2} </h3></span>
            </div>
        </div>
  )
}
