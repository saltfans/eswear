// app/page.js
// This file maps to the index route (/)
import Image from 'next/legacy/image';
import { HeartIcon, ChatBubbleLeftEllipsisIcon, GiftIcon } from '@heroicons/react/24/solid';
export default function Page() {
    return (
    <div>
        <div className="w-full">
            <div className="w-full bg-black/40  flex">
                <Image src='/others/profile2.jpg' alt='me' width='54' height='54' className='rounded-full float-left m-2' />
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
        <div className="w-full  text-blue-300 ">
            <div className='w-full bg-white/30'>
                <Image src='/others/manifuns.png' alt='me' width='420' height='320'  className='bg-black/24 float-center'/>
            </div>
            <div className='flex w-full items-stretch space-x-2 bg-black/40 shadow-3xl content-center flot-left'>
                <div className='m-1 w-auto h-full place-items-center'>
                <HeartIcon  className='h-6 w-6'/>
                <span className='text-[10px] font-serif font-light tracking-tight pr-2 text-left'>
                    Likes
                </span>
                </div>
                <div className='m-1 w-auto h-full place-items-center'>
                <ChatBubbleLeftEllipsisIcon className='h-6 w-6'/>
                <span className='text-[10px] font-serif font-light tracking-tight pr-2 text-left'>
                    Coments
                </span>
                </div> 
                <div className='m-1 w-auto h-full place-items-center'>
                <GiftIcon className='h-6 w-6' />
                <span className='text-[10px] font-sans font-medium text-left pr-2 bold text-yellow-400'>
                    Gifts
                </span>
                </div>
                <Image src='/others/roses/rose-red.png' width='40' height='40' />
                
            </div>
        </div>
    </div>
    )
}