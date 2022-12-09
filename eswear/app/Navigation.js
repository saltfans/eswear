"use client";
import Image from 'next/legacy/image';
import { HeartIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const Navigation = () => {
    const [active, setActive] = useState(0);
    const Menus = [
        { name: "Home", icon: "home-outline", dis: "translate-x-0" },
        { name: "Notification", icon: "home-outline", dis: "translate-x-0" },
        { name: "Swipe", icon: "home-outline", dis: "translate-x-0" },
        { name: "Nessage", icon: "home-outline", dis: "translate-x-0" },
        { name: "More", icon: "home-outline", dis: "translate-x-0" },
    ];
// app/page.js
// This file maps to the index route (/)
    return (
        <div class='bg-black[50] max-h-[4.4rem] px-6 rounded-t-xl'>
            <ul className='flex relative'>
                <span className={`bg-rose-600 border-4 border-gray-900 ${Menus[active].dis} duration-500 rounded-full h-16 w-16 absolute top-5`}>
                    <span className='w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow'></span>
                    <span className='w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow'></span>
                </span>

                {Menus.map((menu, i) => (
                    <li className='w-16'>
                        <a className={`flex flex-col text-center pt-6`} onClick={() => setActive(i)}>
                            <span></span>
                        </a>
                    </li>
                ))}
            </ul>
            navigation
        </div>
    )
}