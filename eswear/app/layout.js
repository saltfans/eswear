import Link from 'next/link';
import '../styles/globals.css';
import { Fragment } from 'react';
import Image from 'next/legacy/image';

// Counter use for client side! japievieno bilde kas bus profila bilde.
import Counter from './Counter';
export default function RootLayout({ children }) {
  return (
  <html>
    <head />
    <body class='bg-gradient-to-r from-gray-500 via-purple-500 to-pink-500'>
       <nav class='w-48 h-full bg-black/40 shadow-3xl border-r-xl border-white-500'>

        <div class="logo">
          <Image src='/others/manifuns.png' alt='me' width='192' height='192' />
        </div>


        <Link href="/">Home</Link>
        <Link href="/notifications">Notifications</Link>
        <Link href="/swipe">Swipe for match</Link>
        <Link href="/post">Create Post</Link>
        <Link href="messages">Messages</Link>
        
        <Counter />
      </nav> 

      <div>{children}</div>
    </body>
  </html>
  )
}
