import React from "react";
import { UserIcon } from '@heroicons/react/24/solid'

export default function Header() {
    return (
        <div className="sticky top-0 w-full flex items-center bg-inherit justify-between p-4 left-0
        border-b border-solid bodrer-white">
            <h1 className="text-3xl select-none sm:text-6xl">SALTFANS</h1>
            <UserIcon  className="w-8 h-8 duration-300 hover:opacity-40 curser-pointer"/>
        </div>
    )
}