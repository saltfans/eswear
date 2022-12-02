'use client';
//CLIENT COMPONENTS
// imports for Popover dropdown ... menu!
import { useState } from 'react';

import Link from 'next/link';
import { Popover } from '@headlessui/react';

export default function Counter() {
    return (
    <Popover className='relative'>
        <Popover.Button className='text-red-500'>More</Popover.Button>
        <Popover.Panel className='absolute z-10m w-48 bg-red-300'>
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