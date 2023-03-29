import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"


export default function Layout({ children, title = '', description = ''}) {
    return (
        <>  
            <Head>
                <title>{`Guitar LA - ${title}`}</title>
                <meta name="description" content={description} />
            </Head>

            <Header />

            
            { children }

            <Footer />

        </>
    )
}
