import React from 'react';
import Image from 'next/legacy/image';


// app/page.js
// This file maps to the index route (/)

const PostComments = () => {
    return (
        <div className='w-full relative bg-red-500 p-4'>
                <div className='rounder-lg bg-slate-500 w-full mx-1 px-1 py-1 my-0.5'>
                    <Image src='/others/profile1.jpg' width='26' height='26' className='rounded-full'/>
                    Admin 
                </div>
        </div>
    )
}
export default PostComments