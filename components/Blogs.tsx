import Image from 'next/image';
import React from 'react'
import axios from 'axios';
const Blogs = async() => {
    const data=await axios.get("http://localhost:3000/api/post");
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-2'>
        {data.data.map((ele:{title:string,body:string,id:string},index:number)=>{
            if(index>=8){return;}
            return <div className='flex items-center justify-between gap-2 rounded-md border border-slate-300' key={index}>
                    <div className="rounded-full flex shadow-lg  justify-center items-center w-[300px] h-[300px]">
                    <Image src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${ele.id}.svg`} 
                            width={200} height={200} alt="default"/>
                    </div>
                    <div className='flex-1 flex flex-col gap-4 px-2'>
                        <p className='font-semibold text-xl'>{ele.title}</p>
                        <p className='hidden sm:block'>{ele.body}</p>
                        <div className='flex flex-col md:flex-row gap-2 justify-between items-center'>
                            <p className='text-sm'>-Arpit Blagan.</p>
                            <button className='p-3.5 rounded-md bg-red-500 hover:bg-red-600'>
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
        })}
    </div>
  )
}

export default Blogs