import React from 'react';
import Image from 'next/legacy/image';

import { CheckBadgeIcon } from '@heroicons/react/24/solid';


// app/page.js
// This file maps to the index route (/)

const PostGifts = () => {
    return (
        <div className='w-full relative bg-black/20 px-4 py-2'>
                <div className='w-full rounded-lg bg-black/10 flex w-full mx-1 my-0.5'>
                    <div className='flex flex-wrap gap-3'>
                        <label className='cursor-pointer'>
                            <input type='radio' className='peer sr-only' name='priceing'/>
                            <div className='w-48 mx-w-xl p-2 
                            bg-black/30 text-white rounded-md 
                            hover:shadow ring-2 ring-transparent 
                            peer-checked:text-blue-300 
                            peer-checked:ring-pink-500 
                            peer-checked:ring-offset-2'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center'>
                                        <Image src='/others/roses/rose-red.png' width='40' height='40'/>
                                        <p className='text-xs font-semibold uppercase text-red-500'>
                                            Red Roses
                                        </p>
                                        <CheckBadgeIcon className='w-3 h-3 ml-2'/>
                                    </div>
                                    <div className='flex items-end justify-between'>
                                        <span className='text-xs font-bold'>Top 2 Gift!</span>
                                        <p className='text-xs font-bold'>1,5€ / One</p>
                                    </div>
                                </div>
                            </div>
                        </label>
                        <label className='cursor-pointer'>
                            <input type='radio' className='peer sr-only' name='priceing'/>
                            <div className='w-48 mx-w-xl p-2 
                            bg-black/30 text-white rounded-md 
                            hover:shadow ring-2 ring-transparent 
                            peer-checked:text-blue-300 
                            peer-checked:ring-yellow-500 
                            peer-checked:ring-offset-2'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center'>
                                        <Image src='/others/roses/rose-yellow.png' width='40' height='40'/>
                                        <p className='text-xs font-semibold uppercase text-yellow-500'>
                                            Yellow Roses
                                        </p>
                                        <CheckBadgeIcon className='w-3 h-3 text-yellow-500 ml-2'/>
                                    </div>
                                    <div className='flex items-end justify-between'>
                                        <span className='text-xs font-bold'>Top 2 Gift!</span>
                                        <p className='text-xs font-bold'>2,5€ / One</p>
                                    </div>
                                </div>
                            </div>
                        </label>
                        <label className='cursor-pointer'>
                            <input type='radio' className='peer sr-only' name='priceing'/>
                            <div className='w-48 mx-w-xl p-2 
                            bg-black/30 text-white rounded-md 
                            hover:shadow ring-2 ring-transparent 
                            peer-checked:text-blue-300 
                            peer-checked:ring-blue-500 
                            peer-checked:ring-offset-2'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center'>
                                        <Image src='/others/roses/rose-blue-1.png' width='40' height='40'/>
                                        <p className='text-xs font-semibold uppercase text-blue-500'>
                                            Blue Roses
                                        </p>
                                        <CheckBadgeIcon className='w-3 h-3 text-blue-500 ml-2'/>
                                    </div>
                                    <div className='flex items-end justify-between'>
                                        <span className='text-xs font-bold'>Top 1 Gift!</span>
                                        <p className='text-xs font-bold'>5,00€ / One</p>
                                    </div>
                                </div>
                            </div>
                        </label>
                        <label className='cursor-pointer'>
                            <input type='radio' className='peer sr-only' name='priceing'/>
                            <div className='w-48 mx-w-xl p-2 
                            bg-black/30 text-white rounded-md 
                            hover:shadow ring-2 ring-transparent 
                            peer-checked:text-blue-300 
                            peer-checked:ring-purple-500 
                            peer-checked:ring-offset-2'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center'>
                                        <Image src='/others/roses/rose-purple.png' width='40' height='40'/>
                                        <p className='text-xs font-semibold uppercase text-purple-500'>
                                            Purple Roses
                                        </p>
                                        <CheckBadgeIcon className='w-3 h-3 text-purple-500 ml-2'/>
                                    </div>
                                    <div className='flex items-end justify-between'>
                                        <span className='text-xs font-bold'>Top 3 Gift!</span>
                                        <p className='text-xs font-bold'>7,70€ / One</p>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
        </div>
    )
}
export default PostGifts