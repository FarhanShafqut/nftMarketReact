// import React from 'react'

export default function card() {
  return (
    <div>
        <div className='bg-slate-800 max-w-[500px] rounded-2xl my-3 sm:my-0 ' >
            <img className=' w-full max-h-96 object-cover' src={require("../../assests/Image Placeholder.png")} alt="" />
            <div className="p-2 px-5">
           <p className="text-lg text-white font-semibold">Space Walking</p>
            </div>
           <div className="p-2 px-5 ">
            <img className=" inline w-8" src={require("../../assests/Avatar Placeholder-9.png")} alt="" /><span className=" ps-2 text-white">Animakid</span>
            </div>
        </div>
    </div>
  )
}


