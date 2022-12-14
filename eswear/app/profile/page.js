import Image from 'next/legacy/image';
import { HeartIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
// app/page.js
// This file maps to the index route (/)
export default function Page() {
    return (
        <div class='grid place-items-center justify-items-center mt-2'>
            <div className='p-8 w-full text-white'>
                
                <div className='flex justify-between items-center'>
                <Link href='/profile' >
                    <Image src='/others/profile1.jpg' alt='me' width='80' height='80' className='' />
                    </Link>
                    <div>
                        <div className='grid'>
                            <span className='text-sm'>Post</span>
                            <span className='font-semibold text-sm'>23</span>
                        </div>
                    </div>
                    <div>
                        <div className='grid'>
                            <span className='text-sm'>Followers</span>
                            <span className='font-semibold text-sm'>790</span>
                        </div>
                    </div>
                    <div>
                        <div className='grid'>
                            <span className='text-sm'>Subscribers</span>
                            <span className='font-semibold text-sm'>217</span>
                        </div>
                    </div>
                </div>
                <div className='pt-3 flex justify-between items-center'>
                    <div>
                        <div className='grid'>
                            <span className='font-semibold text-lg'>Balance : 370.60€</span>
                            <span className='font-thin text-sm'>Level 17</span>
                        </div>
                    </div>
                    <div>
                        <div className='grid'>
                            <span className='font-semibold text-sm'>Earned Gifts</span>
                            <span className='font-thin text-sm'>
                                <Image src='/others/roses/rose-red.png' width='30' height='30'/>
                                <Image src='/others/roses/rose-blue-1.png' width='30' height='30'/>
                                <Image src='/others/roses/rose-yellow.png' width='30' height='30'/>
                                <Image src='/others/roses/rose-purple.png' width='30' height='30'/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-black/40 h-6 px-2 flex items-center'>
                    <span className='text-xs text-center'>0 XP / 100 XP</span>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='grid'>
                            <span className='font-semibold text-lg'>Balance : 370.60€</span>
                            <span className='font-thin text-sm'>Level 17</span>
                        </div>
                    </div>
                    <div>
                        <div className='grid'>
                            <span className='font-semibold text-lg'>Balance : 370.60€</span>
                            <span className='font-thin text-sm'>Level 17</span>
                        </div>
                    </div>
                </div>
                <div className='pt-3'>
                    <div className='grid bg-black/20 m-auto'>
                        <div className='flex flex-wrap gap-1'>
                        <label className='cursor-pointer'>
                            <input type='radio' className='peer sr-only' name='priceing'/>
                            <div className='w-11/12 mx-w-xl p-2 
                            bg-black/30 text-white rounded-md 
                            hover:shadow ring-2 ring-transparent 
                            peer-checked:text-blue-300 
                            peer-checked:ring-kkkk-500 
                            peer-checked:ring-offset-2'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center'>
                                        <Image src='/others/roses/rose-red.png' width='40' height='40'/>
                                        <p className='text-xs font-semibold text-red-500'>
                                            Get Your First 10 Red Roses!
                                        </p>
                                    </div>
                                    <div className='flex items-end justify-between'>
                                        <span className='text-xs font-bold'>You will get :</span>
                                        <p className='text-xs font-bold'>125 XP</p>
                                    </div>
                                </div>
                            </div>
                        </label>
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
                                        <UserGroupIcon width='40' height='40' className='c'/>
                                        <p className='text-xs font-semibold text-red-500'>
                                            Get Your First Subscriber!
                                        </p>
                                    </div>
                                    <div className='flex items-end justify-between'>
                                        <span className='text-xs font-bold'>You will get :</span>
                                        <p className='text-xs font-bold'>225 XP</p>
                                    </div>
                                </div>
                            </div>
                        </label>
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
                                        <Image src='/others/roses/rose-red.png' width='40' height='40'/>
                                        <p className='text-xs font-semibold text-red-500'>
                                            Create 5 awsome profile posts!
                                        </p>
                                    </div>
                                    <div className='flex items-end justify-between'>
                                        <span className='text-xs font-bold'>You will get :</span>
                                        <p className='text-xs font-bold'>175 XP</p>
                                    </div>
                                </div>
                            </div>
                        </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}