import Link from 'next/link';
import '../styles/globals.css';
import Providers from './providers';
import { Fragment } from 'react';
import Image from 'next/legacy/image';
// Counter use for client side! japievieno bilde kas bus profila bilde.
//login
import LoginBtn from './login-btn';
export default function LoginPage() {
  return (
    
  <html>
    <head />
    <body class='bg-gradient-to-r from-gray-500 via-purple-500 to-pink-500'>
     
      
    <div id="homepage" class="">
      <div className='container mx-auto  grid grid-cols-2 border-b-2 border-sky-500'>
        <div className=' ' >
            <Image src='/others/manifuns.png' height='350' width='350' className='' />
        </div>
        <div className='float-left m-6'>
          <LoginBtn />
        </div>
      </div>
      <div>
      </div>
    </div>
    </body>
  </html>
  )
}