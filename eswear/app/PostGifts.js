import React from 'react';
import Image from 'next/legacy/image';



// app/page.js
// This file maps to the index route (/)

const PostGifts = () => {
    return (
        <div className='w-full relative bg-black/20 px-4 py-2'>
                <div className='rounded-lg bg-slate-500 flex w-full mx-1 px-1 py-1 my-0.5'>
                    <div className='flex-initial'>
                        <Image src='/others/roses/rose-red.png' width='50' height='50'/>
                        <span>Red Roses</span>
                        <Image src='/others/roses/rose-blue-2.png' width='50' height='50'/>
                        <span>Blue Roses</span>
                        <Image src='/others/roses/rose-purple.png' width='50' height='50'/>
                        <span>Purple Roses</span>
                        <Image src='/others/roses/rose-yellow.png' width='50' height='50'/>
                        <span>Yellow Roses</span>
                    </div>
                </div>
        </div>
    )
}
export default PostGifts