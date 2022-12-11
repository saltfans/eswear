// app/page.js
// This file maps to the index route (/)
import Image from 'next/legacy/image';
import { HeartIcon, ChatBubbleLeftEllipsisIcon, GiftIcon } from '@heroicons/react/24/solid';
export default function Page() {
    return (
    <div>
        <div className="w-full">
            <div className="w-full bg-white/50 h-42 flex">
                <Image src='/others/profile2.jpg' alt='me' width='64' height='64' className='rounded-full float-left' />
                <div className='pl-4'>
                <storng className='text-sm font-sans font-medium text-left'>Username</storng><br/>
                <span className='text-sm font-serif font-light tracking-tight text-left text-zinc-800'>Level : 1</span>
                </div>
                <div className='float-right pr-2'>
                    <p className='text-sm font-sans font-medium text-right'>Icon</p>
                    <p className='text-sm font-serif font-light tracking-tight text-right'>5 min ago.</p>
                </div>
            </div>
            
        </div>
        <div className="w-full bg-white/30 ">
            <div className='w-full'>
                <Image src='/others/profile1.jpg' alt='me' width='420' height='320' className='rounded-full' />
            </div>
            <div className='flex'>
                <HeartIcon  className='h-8 w-8'/>
                <ChatBubbleLeftEllipsisIcon className='h-8 w-8'/> 
                <GiftIcon className='h-8 w-8' />
                <Image src='/others/roses/rose-red.png' width='40' height='40' />
                
            </div>
        </div>
    </div>
    )
}