import Image from 'next/legacy/image';
import { HeartIcon } from '@heroicons/react/24/solid';

// app/page.js
// This file maps to the index route (/)
export default function Page() {
    return (
        <div class='grid place-items-center justify-items-center mt-2'>
            <div className='p-8 w-full text-white'>
                <div className='flex justify-between items-center'>
                    <Image src='/others/profile1.jpg' alt='me' width='60' height='60' className='rounded-full' />
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
                <div className='pt-5 flex justify-between items-center'>
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
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-black/40 h-12 flex items-center'>
                    <span className='text-xs'>0 XP / 100 XP</span>
                </div>
                <div className='pt-5'>
                    <div className='grid'>
                        <span className='font-semibold'>Mission Name</span>
                        <span className='font-thin'>uzdevums seit raksturots</span>
                    </div>
                </div>
            </div>
        </div>
    )
}