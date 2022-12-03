import Image from 'next/legacy/image';
import { HeartIcon } from '@heroicons/react/24/solid';

// app/page.js
// This file maps to the index route (/)
export default function Page() {
    return (
        <div class='grid items-center justify-items-center mt-8'>
            <div class="flex -space-x-2 overflow-hidden">
                <ul>
                    <li>Info about gifts....</li>
                    <li>Total Red roses 10,000 ! Price for one 1.42€</li>
                    <li>Total Blue Roses 8,000 ! Price for one 3,5€</li>
                </ul>
            </div>
            <br/>            COMEING SOON
        </div>
    )
}