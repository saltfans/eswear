import React from 'react';
import Image from 'next/legacy/image';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';



// app/page.js
// This file maps to the index route (/)

const PostComments = () => {
    return (
        <div className='w-full relative bg-black/20 px-4 py-2'>
                <div className='rounded-lg bg-slate-500 flex w-full mx-1 px-1 py-1 my-0.5'>
                    <div className='flex-initial'>
                        <Image src='/others/profile1.jpg' width='62' height='62' className='rounded-full'/>
                    </div>
                    <span className='text-[10px] font-serif font-light tracking-tight pl-2 pr-2 text-left'>Admin</span>
                    <div className='w-9/10'>
                        <p className='whitespace-normal  text-xs text-left normal-case text-ellipsis overflow-hidden'>
                            Man jau patiik!! kaut aks jasfann iwnd lw awjd awlj foawnwof mjaowf nawofn sfnoa fnwaf  nfak w
                        </p>
                    </div>
                    <div className='flex relative w-full text-right w-28 align-text-top'>
                        <div className='float-right flex-initial absolute right-0 top-0 flex flex-row-reverse'>
                            <EllipsisVerticalIcon className='h-5 w-5 text-emerald-300'/>
                            <p className='text-xs font-serif font-light tracking-tight text-right leading-3 text-emerald-300'>5 min ago.</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default PostComments