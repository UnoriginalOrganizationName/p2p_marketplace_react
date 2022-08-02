import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  
  useEffect(()=>{
    (
      async ()=>{
        const res = await fetch(process.env.API_URL + "/auto_login",
        {
          credentials: "include",
        });
        const data = await res.json();
      }
    )();
  })
  
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp

