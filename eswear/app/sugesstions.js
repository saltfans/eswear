import Image from 'next/legacy/image';
import { HeartIcon } from '@heroicons/react/24/solid';

// app/page.js
// This file maps to the index route (/)
export default function Page() {
    return (
        <div class='grid items-center h-full justify-items-center'>
            <div class=" w-full h-full text-white">
                    <div className='grid h-full bg-black/20 m-auto '>
                        <div className='flex flex-wrap h-full gap-1'>
                        <label className='cursor-pointer w-full h-full'>
                            <input type='radio' className='peer sr-only' name='priceing'/>
                            <div className='w-full justify-items-center h-full mx-w-xl p-2 
                            bg-black/30 text-white rounded-md 
                            hover:shadow ring-2 ring-transparent 
                            peer-checked:text-blue-300 
                            peer-checked:ring-pink-500 
                            peer-checked:ring-offset-2'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center'>
                                        <Image src='/others/profile2.jpg' width='40' height='40'/>
                                        <p className='text-xs font-semibold text-red-500'>
                                            Profile Category.
                                        </p>
                                    </div>
                                    <div className='flex items-end justify-between'>
                                        <span className='text-xs font-bold'>Follow</span>
                                        <span className='text-xs font-bold'>Subscribe</span>                                        
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-xs'>Level 1</span>
                                        <span className='texts-xs'>Online time: 1d 23h 53min</span>
                                    </div>
                                </div>
                            </div>
                        </label>
                        </div>
                    </div>
            </div>
        </div>
    )
}