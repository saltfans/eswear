import Image from 'next/legacy/image';

import { HeartIcon, GiftIcon, HandThumbUpIcon, HandThumbDownIcon, FireIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
// app/page.js
// This file maps to the index route (/)
export default function Page() {
    return (
        <div class='grid items-center justify-items-center mt-8'>
            <div>
                <Image src='/others/swipetest.jpg' alt='me' width='384' height='384' />
                <p>More details about user here...</p>
            </div>
            <div className='flex space-x-4 mt-2'>
                <div><ArrowUturnLeftIcon className="h-8 w-8 text-yellow-500" /></div>
                <div><HandThumbDownIcon className="h-8 w-8 text-blue-500"/></div>
                <div><GiftIcon className="h-8 w-8 text-red-500"/></div>
                <div><HandThumbUpIcon className="h-8 w-8 text-green-500"/></div>
                <div><FireIcon className='h-8 w-8 text-purple-500' /></div>
            </div>
        </div>
    )
}