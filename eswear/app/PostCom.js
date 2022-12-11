import React from 'react';
import Image from 'next/legacy/image';


// app/page.js
// This file maps to the index route (/)

const PostComments = () => {
    return (
        <div className='w-full bg-black/20'>
                <div className='rounder-lg bg-slate-800/40 w-full mx-1 px-1 py-1 my-0.5'>
                    <Image src='/others/profile1.jpg' width='20' height='20'/>
                    Admin 
                </div>
        </div>
    )
}
export default PostComments