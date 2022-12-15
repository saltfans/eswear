
import React from 'react';
import Image from 'next/legacy/image';
import { EllipsisVerticalIcon, UserGroupIcon } from '@heroicons/react/24/solid';



// app/page.js
// This file maps to the index route (/)

const ProfileMissions = () => {
    return (
        <div className='flex flex-wrap gap-1'>
            <label className='cursor-pointer w-48'>
                <input type='radio' className='peer sr-only' name='priceing'/>
                <div className='w-11/12 mx-w-xl p-2 bg-black/30 text-white rounded-md 
                    hover:shadow ring-2 ring-transparent peer-checked:text-blue-300 
                    peer-checked:ring-kkkk-500 peer-checked:ring-offset-2'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center'>
                            <Image src='/others/roses/rose-red.png' width='40' height='40'/>
                            <p className='text-xs font-semibold text-red-500'>
                                Spend 1h online!
                            </p>
                        </div>
                        <div className='flex items-end justify-between'>
                            <span className='text-xs font-bold'>You will get :</span>
                            <p className='text-xs font-bold'>25 XP</p>
                        </div>
                    </div>
                </div>
            </label>
            <label className='cursor-pointer w-48'>
                <input type='radio' className='peer sr-only' name='priceing'/>
                <div className='w-11/12 mx-w-xl p-2 bg-black/30 text-white rounded-md 
                    hover:shadow ring-2 ring-transparent peer-checked:text-blue-300 
                    peer-checked:ring-pink-500 peer-checked:ring-offset-2'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center'>
                            <UserGroupIcon  className='text-red-500 w-8 h-8'/>
                            <p className='text-xs font-semibold text-red-500'>
                                Create 1 profile Post!
                            </p>
                        </div>
                        <div className='flex items-end justify-between'>
                            <span className='text-xs font-bold'>You will get :</span>
                            <p className='text-xs font-bold'>50 XP</p>
                        </div>
                    </div>
                </div>
            </label>
            <label className='cursor-pointer w-48'>
                <input type='radio' className='peer sr-only' name='priceing'/>
                <div className='w-11/12 mx-w-xl p-2 bg-black/30 text-white rounded-md 
                    hover:shadow ring-2 ring-transparent peer-checked:text-blue-300 
                    peer-checked:ring-pink-500 peer-checked:ring-offset-2'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center'>
                            <Image src='/others/roses/rose-red.png' width='40' height='40'/>
                            <p className='text-xs font-semibold text-red-500'>
                                Get Verificed Profile!
                            </p>
                        </div>
                        <div className='flex items-end justify-between'>
                            <span className='text-xs font-bold'>You will get :</span>
                            <p className='text-xs font-bold'>175 XP</p>
                        </div>
                    </div>
                </div>
            </label>
            <label className='cursor-pointer w-48'>
                <input type='radio' className='peer sr-only' name='priceing'/>
                <div className='w-11/12 mx-w-xl p-2 bg-black/30 text-white rounded-md 
                    hover:shadow ring-2 ring-transparent peer-checked:text-blue-300 
                    peer-checked:ring-kkkk-500 peer-checked:ring-offset-2'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center'>
                            <Image src='/others/roses/rose-red.png' width='40' height='40'/>
                            <p className='text-xs font-semibold text-red-500'>
                                Get Your First 10 Red Roses!
                            </p>
                        </div>
                        <div className='flex items-end justify-between'>
                            <span className='text-xs font-bold'>You will get :</span>
                            <p className='text-xs font-bold'>125 XP</p>
                        </div>
                    </div>
                </div>
            </label>
            <label className='cursor-pointer w-48'>
                <input type='radio' className='peer sr-only' name='priceing'/>
                <div className='w-11/12 mx-w-xl p-2 bg-black/30 text-white rounded-md 
                    hover:shadow ring-2 ring-transparent peer-checked:text-blue-300 
                    peer-checked:ring-pink-500 peer-checked:ring-offset-2'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center'>
                            <UserGroupIcon  className='text-red-500 w-8 h-8'/>
                            <p className='text-xs font-semibold text-red-500'>
                                Get Your First Subscriber!
                            </p>
                        </div>
                        <div className='flex items-end justify-between'>
                            <span className='text-xs font-bold'>You will get :</span>
                            <p className='text-xs font-bold'>225 XP</p>
                        </div>
                    </div>
                </div>
            </label>
            <label className='cursor-pointer w-48'>
                <input type='radio' className='peer sr-only' name='priceing'/>
                <div className='w-11/12 mx-w-xl p-2 bg-black/30 text-white rounded-md 
                    hover:shadow ring-2 ring-transparent peer-checked:text-blue-300 
                    peer-checked:ring-pink-500 peer-checked:ring-offset-2'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center'>
                            <Image src='/others/roses/rose-red.png' width='40' height='40'/>
                            <p className='text-xs font-semibold text-red-500'>
                                Create 5 awsome profile posts!
                            </p>
                        </div>
                        <div className='flex items-end justify-between'>
                            <span className='text-xs font-bold'>You will get :</span>
                            <p className='text-xs font-bold'>175 XP</p>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    )
}
export default ProfileMissions