import React from 'react';
import Image from 'next/legacy/image';


// app/page.js
// This file maps to the index route (/)

const PostComments = () => {
    return (
        <div className='w-full relative bg-red-500 px-4 py-2'>
                <div className='rounded-lg bg-slate-500 w-full mx-1 px-1 py-1 my-0.5'>
                    <Image src='/others/profile1.jpg' width='26' height='26' className='rounded-full'/>
                    <span className='text-[10px] font-serif font-light tracking-tight pr-2 text-left'>Admin</span>
                    <div className='box-content'>
                        <p>Man jau patiik! x,xsc</p>    
                    </div> 
                </div>
        </div>
    )
}
export default PostComments