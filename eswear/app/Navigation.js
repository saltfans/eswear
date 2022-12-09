"use client";
import React, { useState } from "react";
import { HomeIcon, BellAlertIcon, HeartIcon, PlusIcon, ChatBubbleBottomCenterTextIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Navigation = () => {
  const Menus = [
    { name: "Home", href: "/", icon: <HomeIcon className="h-5 w-5 mx-2"/> },
    { name: "News", href: "/notifications", icon: <BellAlertIcon className="h-5 w-5 mx-2"/>},
    { name: "Swipe", href: "/swipe", icon: <HeartIcon className="h-5 w-5 mx-2"/> },
    { name: "Chat", href: "/messages", icon: <ChatBubbleBottomCenterTextIcon className="h-5 w-5 mx-2"/>},
    { name: "More", href: "#", icon: <EllipsisHorizontalIcon className="h-5 w-5 mx-2"/> },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="bg-black px-6 rounded-t-xl fixed inset-x-0 bottom-0 sm:hidden">
      <ul className="w-full text-center">
    
        {Menus.map(({ name, href, icon }) => (
          <li key={name} className="w-16 inline-block">
            <Link href={href}>
            <a className="flex flex-col text-center p-4 text-sky-500">
              <span className="text-xl cursor-pointer duration-500">
                {icon}
              </span>
            </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;