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
        <Popover.Panel className='absolute z-10'>
            <div className='grid grid-cols-2'>
              <Link href="##">pirmais</Link>
              <Link href="##">otrais</Link>
              <Link href="##">tresais</Link>
              <Link href="##">ceturtais</Link>
            </div>
        </Popover.Panel>
    </Popover>
    )
}