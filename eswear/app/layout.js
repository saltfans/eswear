import Link from 'next/link';
import '../styles/globals.css';
import { Fragment } from 'react';
import Image from 'next/legacy/image';
import { HomeIcon, BellAlertIcon, HeartIcon, PlusIcon, ChatBubbleBottomCenterTextIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
// Counter use for client side! japievieno bilde kas bus profila bilde.
import Counter from './Counter';
export default function RootLayout({ children }) {
  return (
  <html>
    <head />
    <body class='bg-gradient-to-r from-gray-500 via-purple-500 to-pink-500'>
       <div class='w-48 h-full bg-black/40 shadow-3xl backdrop-blur-sm'>

        <div class="w-full h-auto pl-4 grid items-center justify-items-center border-b-2 border-pink-600">
          <Image src='/others/manifuns.png' alt='me' width='192' height='192' />
        </div>

        <nav class='px-6 mt-8 pb-8 text-blue-300'>
          <ul>
            <li class='rounded border-2 p-1 mb-2 border-pink-500 w-36 h-10'>
              <Link href="/" className='flex justify-start'>
                <HomeIcon className="h-6 w-6 pr-1"/>
                <span className='pl-1'>Home</span>
              </Link>
            </li>
            <li class='rounded border-2 p-1 mb-2 border-pink-500 w-36 h-10'>
              <Link href="/notifications" className='flex justify-start'>
                <BellAlertIcon className="h-6 w-6 pr-1"/>
                <span className='pl-1'>Notifications</span>
              </Link>
            </li>
            <li class='rounded border-2 p-1 mb-2 border-pink-500 w-36 h-10'>
              <Link href="/swipe" className='flex justify-start'>
                <HeartIcon className="h-6 w-6 pr-1"/>
                <span className='pl-1'>Swipe</span>
              </Link>
            </li>
            <li class='rounded border-2 p-1 mb-2 border-pink-500 w-36 h-10'>
              <Link href="/post" className='flex justify-start'>
                <PlusIcon className="h-6 w-6 pr-1"/>
                <span className='pl-1'>Create Post</span>
              </Link>
            </li>
            <li class='rounded border-2 p-1 mb-2 border-pink-500 w-36 h-10'>
              <Link href="messages" className='flex justify-start'>
                <ChatBubbleBottomCenterTextIcon className="h-6 w-6 pr-1"/>
                <span className='pl-1'>Messages</span>
              </Link>
            </li>

            <li class='rounded border-2 p-1 mb-2 border-pink-500 w-36 h-10'>
              <Counter/>
            </li>
          </ul>
        </nav>
      </div> 

      <div>{children}</div>
    </body>
  </html>
  )
}
