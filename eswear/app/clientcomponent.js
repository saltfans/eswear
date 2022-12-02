'use client';
//CLIENT COMPONENTS
// imports for Popover dropdown ... menu!
import { Popover } from '@headlessui/react';

export default function Client() {(
    <Popover className='relative'>
        <Popover.Button>More</Popover.Button>
        <Popover.Panel className='absolute z-10'>
            <div className='grid grid-cols-2'>
              <Link href="##">pirmais</Link>
              <Link href="##">otrais</Link>
              <Link href="##">tresais</Link>
              <Link href="##">ceturtais</Link>
            </div>
        </Popover.Panel>
    </Popover>
)}