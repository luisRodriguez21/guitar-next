import Link from 'next/link'
import Image from 'next/image'
import Layout from "../components/Layout"
import styles from "../styles/aboutus.module.css"

export default function Aboutus() {
    return (
        <>
            <Layout title={"Nosotros"}>
                <main className="container">
                    <h1 className="heading">Nosotros</h1>   
                    
                    <div className={styles.content}>
                        <Image alt="us" src="/img/nosotros.jpg" width={1000} height={800} />

                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            </p>
                        </div>

                    </div>
                </main>    
            </Layout>
        </>
    )
}
