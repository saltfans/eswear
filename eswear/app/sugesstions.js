import Image from 'next/legacy/image';
import { HeartIcon } from '@heroicons/react/24/solid';

// app/page.js
// This file maps to the index route (/)
export default function Page() {
    return (
        <div class='grid items-center justify-items-center mt-2'>
            <div class="p-8 w-full text-white">
            <div className='pt-3'>
                    <div className='grid bg-black/20 m-auto'>
                        <div className='flex flex-wrap gap-1'>
                        <label className='cursor-pointer'>
                            <input type='radio' className='peer sr-only' name='priceing'/>
                            <div className='w-11/12 mx-w-xl p-2 
                            bg-black/30 text-white rounded-md 
                            hover:shadow ring-2 ring-transparent 
                            peer-checked:text-blue-300 
                            peer-checked:ring-pink-500 
                            peer-checked:ring-offset-2'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center'>
                                        <Image src='/others/profile1.jpg' width='40' height='40'/>
                                        <p className='text-xs font-semibold text-red-500'>
                                            Profile Category.
                                        </p>
                                    </div>
                                    <div className='flex items-end justify-between'>
                                        <span className='text-xs font-bold'>Follow</span>
                                        <span className='text-xs font-bold'>Subscribe</span>                                        
                                    </div>
                                </div>
                            </div>
                        </label>
                        </div>
                    </div>
                </div>
                <Image src='/others/profile2.jpg' alt='me' width='82' height='82' className='rounded-full' />

            </div>
        </div>
    )
}