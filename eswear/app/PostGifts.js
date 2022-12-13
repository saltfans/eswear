import React from 'react';
import Image from 'next/legacy/image';



// app/page.js
// This file maps to the index route (/)

const PostGifts = () => {
    return (
        <div className='w-full relative bg-black/20 px-4 py-2'>
                <div className='w-full rounded-lg bg-slate-500 flex w-full mx-1 px-1 py-1 my-0.5'>
                    <div className=''>
                        <div className='flex'>
                            <Image src='/others/roses/rose-red.png' width='50' height='50'/>
                            <div className='flex-initial pl-1'>
                                <strong className='text-sm leading-3 text-left'>Red Roses</strong>
                                <br/>
                                <span className='text-xs leading-3 text-left'>Price : 1.5€</span>
                                <input type='checkbox' id='checkbox-red' classname='bg-red-500' />
                            </div>
                        </div>
                        <div className='flex'>   
                            <Image src='/others/roses/rose-blue-2.png' width='50' height='50'/>
                            <div className='flex-initial pl-1'>
                                <strong className='text-sm leading-3 text-left'>Blue Roses</strong>
                                <br/>
                                <span className='text-xs leading-3 text-left'>Price : 7€</span>
                                <input type='checkbox' id='checkbox-red' classname='bg-blue-500' />
                            </div>
                        </div>
                        <div className='flex'> 
                            <Image src='/others/roses/rose-purple.png' width='50' height='50'/>
                            <div className='flex-initial pl-1'>
                                <strong className='text-sm leading-3 text-left'>Purple Roses</strong>
                                <br/>
                                <span className='text-xs leading-3 text-left'>Price : 5€</span>
                                <input type='checkbox' id='checkbox-red' classname='bg-purple-500' />
                            </div>
                        </div>
                        <div className='flex'> 
                            <Image src='/others/roses/rose-yellow.png' width='50' height='50'/>
                            <div className='flex-initial pl-1'>
                                <strong className='text-sm leading-3 text-left'>Yellow Roses</strong>
                                <br/>
                                <span className='text-xs leading-3 text-left'>Price : 2.5€</span>
                                <input type='checkbox' id='checkbox-red' classname='bg-yellow-500' />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default PostGifts