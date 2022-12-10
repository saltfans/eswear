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
                <p>Icon menu</p>
            </div>
        </div>
        <div className="w-full">
            <div>
                <Image src='/others/profile1.jpg' alt='me' width='82' height='82' className='rounded-full' />
            </div>
        </div>
        
        <ul>
            <li>MY STORY OR ADD STORY Before other poeple Storys!</li>
            <br/>
            <li>Next line Posts from Users by time include my ones..</li>
            <li>Profile pic, username left </li>
            <li>Date time on right with ...menu to copy link or report post!</li>
            <li>POSTS</li>
            <li>999Likes 50€ tips... all info from post Coments Like button u.c.</li>
        </ul>
    </div>
    )
}