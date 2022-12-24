import React from 'react'

export default function RootLayout({ children }) {
    return (
        <div className='flex flex-col min-h-screen relative bg-slate-900 text-white'> 
        <main className='flex-1 flex flex-col p-4'>
            {children}
        </main>
        </div>
    )
}