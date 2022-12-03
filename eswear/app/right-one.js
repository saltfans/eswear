import Image from 'next/legacy/image';
import { HeartIcon } from '@heroicons/react/24/solid'
// app/page.js
// This file maps to the index route (/)
export default function Page() {
    return (
        <div class='grid items-center justify-items-center mt-8'>
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