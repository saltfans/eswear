import '../styles/globals.css';
import Script from 'next/script';
import { AuthProvider } from '../app/auth/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
  )
}

export default MyApp