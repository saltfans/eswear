import React from "react"
import Login from "./Login"
import { UserIcon } from '@heroicons/react/24/solid'
export default function LoginPage() {
    return (
        <div>
            <Login />
            <UserIcon  className="w-8 h-8 "/>
        </div>
    )
}