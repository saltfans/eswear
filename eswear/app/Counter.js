'use client';
//CLIENT COMPONENTS
// imports for Popover dropdown ... menu!
import { useState } from 'react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

import Link from 'next/link';
import { Popover } from '@headlessui/react';

export default function Counter() {
    return (
    <Popover className='relative'>
        <Popover.Button className='flex justify-start'>
            <EllipsisHorizontalIcon className="h-6 w-6 pr-1"/>
            <span className='pl-1'>More</span>
        </Popover.Button>
        <Popover.Panel className='absolute w-48 bg-red-300'>
            <div className=''>
                <div className=''>
                    <Link href="##"><p>My Profile with pic</p></Link>
                    
                </div>
                <div className='grid grid-cols-5'>
                    <Link href="##">otrais</Link>
                    <Link href="##">tresais</Link>
                    <Link href="##">ceturtais</Link>
                </div>
            </div>
        </Popover.Panel>
    </Popover>
    )
}