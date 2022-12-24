"use client";
import Link from 'next/link';
import '../styles/globals.css';
import Providers from './providers';
import { Fragment } from 'react';
import Image from 'next/legacy/image';
import { HomeIcon, BellAlertIcon, HeartIcon, PlusIcon, ChatBubbleBottomCenterTextIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
// Counter use for client side! japievieno bilde kas bus profila bilde.
import Counter from './Counter';
import RightOne from './right-one';
import Sugesstions from './sugesstions';
import Gifts from './gifts';
import Navigation from './Navigation';
//login
export default function RootLayout({ children }) {
  return (
    
  <html>
    <head />
    <body class='bg-gradient-to-r from-gray-500 via-purple-500 to-pink-500'>
    <Providers>  
    <div id='homepage2' class=" container list-item sm:grid grid-cols-6 gap-x-2 gap-y-3 m-auto sm:px-4">
       <div class='w-full min-w-48 h-full bg-black/40 shadow-3xl backdrop-blur-sm row-span-3 hidden sm:block'>

        <div class="w-full h-auto pl-4 grid items-center justify-items-center border-b-2 border-pink-600">
          <Image src='/others/saltfans.png' alt='me' width='192' height='192'  />
        </div>

        <nav class='px-6 mt-8 pb-8 text-blue-300'>
          <ul>
            <li class='rounded border-2 p-1 mb-2 border-pink-500 w-full h-10'>
              <Link href="/" className='flex justify-start'>
                <HomeIcon className="h-6 w-6 pr-1"/>
                <span className='pl-1'>Home</span>
              </Link>
            </li>
            <li class='rounded border-2 p-1 mb-2 border-pink-500 w-full h-10'>
              <Link href="/notifications" className='flex justify-start'>
                <BellAlertIcon className="h-6 w-6 pr-1"/>
                <span className='pl-1 '>Notifications</span>
              </Link>
            </li>
            <li class='rounded border-2 p-1 mb-2 border-pink-500 w-full h-10'>
              <Link href="/swipe" className='flex justify-start'>
                <HeartIcon className="h-6 w-6 pr-1"/>
                <span className='pl-1'>Swipe</span>
              </Link>
            </li>
            <li class='rounded border-2 p-1 mb-2 border-pink-500 w-full h-10'>
              <Link href="/post" className='flex justify-start'>
                <PlusIcon className="h-6 w-6 pr-1"/>
                <span className='pl-1'>Create Post</span>
              </Link>
            </li>
            <li class='rounded border-2 p-1 mb-2 border-pink-500 w-full h-10'>
              <Link href="messages" className='flex justify-start'>
                <ChatBubbleBottomCenterTextIcon className="h-6 w-6 pr-1"/>
                <span className='pl-1'>Messages</span>
              </Link>
            </li>

            <li class='rounded border-2 p-1 mb-2 border-pink-500 w-full h-10'>
              <Counter />
            </li>
          </ul>
        </nav>
      </div> 
      <div className='bg-black/70 shadow-xl min-h[50px] col-span-3 row-span-3 sm:border-x-4 sm:border-b-4 sm:border-sky-500'>{children}</div>
      <div className='bg-black/70 rounded-lg shadow-xl min-h[50px] col-span-2 row-span-1 hidden sm:block'><RightOne /></div>
      <div className='bg-black/70 rounded-lg shadow-xl h-full col-span-2 row-span-1 hidden sm:block'><Sugesstions /></div>
      <div className='bg-black/40 rounded-lg shadow-xl min-h[50px] col-span-2 row-span-1 hidden sm:block'><Gifts /></div>
      <Navigation />     

      
    </div>
    </Providers>
    </body>
  </html>
  )
}