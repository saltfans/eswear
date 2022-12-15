"use client"
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

const LoginPage = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (   
    
    <div id="homepage" class="">
      <div className='container  mx-auto list-item sm:grid grid-cols-2 border-b-2 border-sky-500'>
      <div className="container" style={{ padding: '50px 0 100px 0' }}>
        {!session ? (
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
        ) : (
          <p>Account page will go here.</p>
        )}
      </div>

      </div>
    </div>
    )
}

export default LoginPage