import Image from 'next/legacy/image';
import { HeartIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import ProfileMissions from '../Missions';
import ProfilePosts from '../ProfilePosts';
// app/page.js
// This file maps to the index route (/)
export default function Page() {
    return (
        <div class='grid place-items-center justify-items-center mt-2'>
            <div className='p-8 w-full text-white'>
                
                <div className='flex justify-between items-center'>
                <Link href='/profile' >
                    <Image src='/others/profile1.jpg' alt='me' width='80' height='80' className='' />
                    </Link>
                    <div>
                        <div className='grid'>
                            <span className='text-sm'>Post</span>
                            <span className='font-semibold text-sm'>23</span>
                        </div>
                    </div>
                    <div>
                        <div className='grid'>
                            <span className='text-sm'>Followers</span>
                            <span className='font-semibold text-sm'>790</span>
                        </div>
                    </div>
                    <div>
                        <div className='grid'>
                            <span className='text-sm'>Subscribers</span>
                            <span className='font-semibold text-sm'>217</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='grid'>
                            <span className='font-semibold text-lg text-sky-700'>Username</span>
                            <span className='font-semibold text-sm text-pink-800'>Sauklis</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='grid'>
                            <span className='font-semibold text-sm'>Balance : 370.60€</span>
                            <span className='font-thin text-xs'>Level 17</span>
                        </div>
                    </div>
                    <div>
                        <div className='grid'>
                            <span className='font-semibold text-sm'>Earned Gifts</span>
                            <span className='font-thin text-sm'>
                                <Image src='/others/roses/rose-red.png' width='30' height='30'/>
                                <Image src='/others/roses/rose-blue-1.png' width='30' height='30'/>
                                <Image src='/others/roses/rose-yellow.png' width='30' height='30'/>
                                <Image src='/others/roses/rose-purple.png' width='30' height='30'/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-black/40 h-6 px-2 flex items-center'>
                    <span className='text-xs text-center'>0 XP / 100 XP</span>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='grid'>
                            <span className='font-semibold text-sm'>Subscribe price : 9.99€</span>
                            <span className='font-thin text-sm'>Change price</span>
                        </div>
                    </div>
                    <div>
                        <div className='grid'>
                            <span className='font-thin text-xs'>Time online: 2days 3m 1min</span>
                            <span className='font-thin text-sm'>Results : Top 14%</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='grid'>
                            <span className='font-semibold text-sm'>Edit Profile</span>
                        </div>
                    </div>
                    <div>
                        <div className='grid'>
                            <span className='font-semibold text-sm'>Roses Shop</span>
                        </div>
                    </div>
                    <div>
                        <div className='grid'>
                            <span className='font-semibold text-sm'>Get the sallary</span>
                        </div>
                    </div>
                </div>
                <div className='pt-3'>
                    <div className='grid bg-black/40 m-auto'>
                        <span className='text-semibold text-white'>MISSIONS</span>
                        <ProfileMissions />
                    </div>
                </div>
            </div>
            <div className='pt-2'>
                <div className='grid bg-white/40'>
                    <span>POSTS</span>
                    <ProfilePosts />
                </div>
            </div>
        </div>
    )
}