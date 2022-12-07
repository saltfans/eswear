import Image from 'next/legacy/image';
import LoginBtn from './login-btn';
// app/page.js
// This file maps to the index route (/)
export default function NewPage() {
    return (
        <html>
        <head />
        <body class='bg-gradient-to-r from-gray-500 via-purple-500 to-pink-500'>
          
        <div id="homepage" class="">
          <div className='container mx-auto  grid grid-cols-2 border-b-2 border-sky-500'>
            <div className=' ' >
                <Image src='./others/manifuns.png' height='350' width='350' className='' />
            </div>
            <div className='float-left m-6'>
              
            </div>
          </div>
          <div>
          </div>
        </div>
        </body>
        </html>
    )
}