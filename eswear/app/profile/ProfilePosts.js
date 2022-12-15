import React from 'react';
import Image from 'next/legacy/image';
import { HeartIcon, ChatBubbleLeftEllipsisIcon, GiftIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import PostComments from './PostCom';
import PostGifts from './PostGifts';

// app/page.js
// This file maps to the index route (/)

const ProfilePosts = () => {
    return (
        <div className='flex flex-wrap gap-1'>
            <div className="w-full">
                <div className="w-full bg-black/40  flex">
                    <div className='pl-2 pt-2 pb-2 flex-initial'>dd
                    </div>
                    <div className='pl-1 pt-2 flex-initial align-text-top'>
                        <storng className='text-sm font-sans text-emerald-100 leading-3 font-medium text-left'>Username</storng><br/>
                        <p className='text-xs font-serif font-light leading-3  text-left text-emerald-300'>Level : 1</p>
                    </div>
                    <div className='flex relative w-full text-right align-text-top'>
                        <div className='float-right pr-2 pt-2 flex-initial absolute right-0 top-0 flex flex-row-reverse'>
                            <EllipsisVerticalIcon className='h-5 w-5 text-emerald-300'/>
                            <p className='text-xs font-serif font-light tracking-tight text-right leading-3 text-emerald-300'>5 min ago.</p>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
export default ProfilePosts