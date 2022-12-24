import Image from 'next/image'
import Login from '../Login'
import UserDashboard from '../UserDashboard'
import { useAuth } from '../AuthContext'

export default function Home() {
  const { currentUser } = useAuth()

  return (
    < >
      {!currentUser && <Login />}
      {currentUser && <UserDashboard/>}
    </>
  )
}