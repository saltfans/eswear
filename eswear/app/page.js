// app/page.js
// This file maps to the index route (/)
import Image from 'next/legacy/image';
export default function Page() {
    return (
    <div>
        <div className="w-full">
            <div className="">
                <Image src='/others/profile2.jpg' alt='me' width='600' height='500' className='rounded-full' />
                <p>Username</p>
            </div>
            <div>
                <p>5 min ago...</p>
                <p>Icon menu for copy link or report</p>
            </div>
        </div>
        <div className="w-full">
            <div>
                <Image src='/others/profile1.jpg' alt='me' width='82' height='82' className='rounded-full' />
            </div>
            <div>
                Icons - Likes , Coment , Roses...
                daudzums zem iconaam
            </div>
        </div>
    </div>
    )
}