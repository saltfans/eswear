import Image from 'next/legacy/image';
import { HeartIcon } from '@heroicons/react/24/solid';

// app/page.js
// This file maps to the index route (/)
export default function Page() {
    return (
        <div class='grid place-items-center justify-items-center mt-2'>
            <div className='p-4 w-full text-white'>
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
                <div className='pt-5'>
                    <div className='grid'>
                        <span className='font-semibold text-lg'>texts</span>
                        <span className='font-thin text-lg'>texts3222</span>
                    </div>
                </div>
                <div className='pt-5'>
                    <div className='grid'>
                        <span className='font-semibold'>Mission</span>
                        <span className='font-thin'>uzdevums seit raksturots</span>
                    </div>
                </div>
            </div>
            <ul>
                <li>Line 1-3 Profile pic on left.</li>
                <li>Line 1 Balance € on right.</li>
                <li>Line 2 Earned Gifts on right.</li>
                <li>Line 3 My profile Level on right.</li>
                <li>Line 4 Mission name!</li>
                <li>Line 5 Mission complated 57%/100%</li>
            </ul>
        </div>
    )
}