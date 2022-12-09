"use client";
import React, { useState } from "react";
import { HomeIcon, BellAlertIcon, HeartIcon, PlusIcon, ChatBubbleBottomCenterTextIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Navigation = () => {
  const Menus = [
    { name: "Home", href: "/", icon: <HomeIcon className="h-4 w-4 mx-2"/> },
    { name: "News", href: "/notifications", icon: <BellAlertIcon className="h-4 w-4 mx-2"/>},
    { name: "Swipe", href: "/swipe", icon: <HeartIcon className="h-4 w-4 mx-2"/> },
    { name: "Chat", href: "/messages", icon: <ChatBubbleBottomCenterTextIcon className="h-4 w-4 mx-2"/>},
    { name: "More", href: "#", icon: <EllipsisHorizontalIcon className="h-4 w-4 mx-2"/> },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="bg-white px-6 rounded-t-xl">
      <ul className="flex relative">
    
        {Menus.map(({ name, href, icon }) => (
          <li key={name} className="w-16">
            <Link href={href}>
            <a className="flex flex-col text-center pt-6">
              <span className="text-xl cursor-pointer duration-500">
                {icon}
              </span>
              <span className="translate-y-4 duration-700 opacity-100">
                {name}
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