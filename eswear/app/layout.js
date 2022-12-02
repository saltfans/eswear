import Link from 'next/link';
import '../styles/globals.css';
import { Fragment } from 'react';


// Counter use for client side!
import Counter from './Counter';
export default function RootLayout({ children }) {
  return (
  <html>
    <head />
    <body>
       <nav class='flex sm:justify-center space-x-4'>
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
