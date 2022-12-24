import Image from 'next/image'
import Login from '../components/Login'
import UserDashboard from '../components/UserDashboard'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { currentUser } = useAuth()

  return (
    < >
      {!currentUser && <Login />}
      {currentUser && <UserDashboard/>}
    </>
  )
}