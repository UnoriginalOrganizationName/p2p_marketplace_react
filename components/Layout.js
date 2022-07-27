import Head from "next/head"
import { Router } from "next/router"
import Header from "./Header"
const Layout = ({children}) => {

    return(
        <html>
            <Head>
                <title>Marketplace</title>
            </Head>
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )


}

export default Layout