import Link from 'next/link';
import { Fragment } from 'react'

export default function RootLayout({ children }) {
  return (
  <html>
    <head />
    <body>
      <Popover className="relative bg-white">
        
          <Link href="/">Home</Link>
          <Link href="/notifications">Notifications</Link>
          <Link href="/swipe">Swipe for Match</Link>
      </Popover>
      <div>{children}</div>
    </body>
  </html>
  )
}
