import Image from 'next/legacy/image';
import { HeartIcon } from '@heroicons/react/24/solid';

// app/page.js
// This file maps to the index route (/)
export default function Page() {
    return (
        <div class='grid items-center justify-items-center mt-8'>
            <div class="flex -space-x-2 overflow-hidden">
                <Image src='/others/profile1.jpg' alt='me' width='82' height='82' className='rounded-full' />
                <Image src='/others/profile2.jpg' alt='me' width='82' height='82' className='rounded-full' />
                <Image src='/others/profile1.jpg' alt='me' width='82' height='82' className='rounded-full' />
                <Image src='/others/profile2.jpg' alt='me' width='82' height='82' className='rounded-full' />
            </div>
        </div>
    )
}