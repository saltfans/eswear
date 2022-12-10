// app/page.js
// This file maps to the index route (/)
import Image from 'next/legacy/image';
export default function Page() {
    return (
    <div>
        <div className="w-full">
            <div className="w-full bg-white/50 h-42 flex">
                <Image src='/others/profile2.jpg' alt='me' width='64' height='64' className='rounded-full float-left' />
                <div>
                <storng>Username</storng><br/>
                <span>Level : 1</span>
                </div>
            </div>
            <div>
                <p>5 min ago...</p>
                <p>Icon menu for copy link or report</p>
            </div>
        </div>
        <div className="w-full">
            <div>
                <Image src='/others/profile1.jpg' alt='me' width='420' height='320' className='rounded-full' />
            </div>
            <div>
                Icons - Likes , Coment , Roses...
                daudzums zem iconaam
            </div>
        </div>
    </div>
    )
}