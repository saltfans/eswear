'use client';
//CLIENT COMPONENTS
// imports for Popover dropdown ... menu!
import { useState } from 'react';
import { EllipsisHorizontalIcon, ChartBarIcon, AcademicCapIcon, UsersIcon, CircleStackIcon, BuildingLibraryIcon } from '@heroicons/react/24/solid';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { Popover } from '@headlessui/react';

export default function Counter() {
    return (
    <Popover className='relative'>
        <Popover.Button className='flex justify-start'>
            <EllipsisHorizontalIcon className="h-6 w-6 pr-1"/>
            <span className='pl-1'>More</span>
        </Popover.Button>
        <Popover.Panel className='fixed w-48 inset-y-0 left-0 bg-slate-600'>
            <div className='w-full h-auto pl-4 pl-4 grid items-center justify-items-center border-b-2 border-pink-600'>
                <Image src='/others/manifuns.png' alt='me' width='192' height='192' />
            </div>
            <nav class='px-6 mt-8 pb-8 text-blue-300'>
            <ul>
                <li class='rounded border-2 p-1 mb-2 border-pink-500 w-36 h-10'>
                <Link href="/" className='flex justify-start'>
                    <AcademicCapIcon className="h-6 w-6 pr-1"/>
                    <span className='pl-1'>My Level Stats</span>
                </Link>
                </li>
                <li class='rounded border-2 p-1 mb-2 border-pink-500 w-36 h-10'>
                <Link href="/notifications" className='flex justify-start'>
                    <UsersIcon className="h-6 w-6 pr-1"/>
                    <span className='pl-1'>My Fans</span>
                </Link>
                </li>
                <li class='rounded border-2 p-1 mb-2 border-pink-500 w-36 h-10'>
                <Link href="/swipe" className='flex justify-start'>
                    <CircleStackIcon className="h-6 w-6 pr-1"/>
                    <span className='pl-1'>Balance</span>
                </Link>
                </li>
                <li class='rounded border-2 p-1 mb-2 border-pink-500 w-36 h-10'>
                <Link href="/post" className='flex justify-start'>
                    <BuildingLibraryIcon className="h-6 w-6 pr-1"/>
                    <span className='pl-1'>Statements</span>
                </Link>
                </li>
                <li class='rounded border-2 p-1 mb-2 border-pink-500 w-36 h-10'>
                <Link href="messages" className='flex justify-start'>
                    <ChartBarIcon className="h-6 w-6 pr-1"/>
                    <span className='pl-1'>Statistic</span>
                </Link>
                </li>
            </ul>
            </nav>
            
        </Popover.Panel>
    </Popover>
    )
}