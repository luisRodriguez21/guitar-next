import Image from "next/image"
import Link from "next/Link"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"


export default function Header() {
    const router = useRouter();



    return (
        <header className={styles.header}>
            <div className={`container ${styles.bar}`}>    
                <Link href={"/"} legacyBehavior>
                    <a>
                        <Image src="/img/logo.svg" width={300} height={40} alt="img" />
                    </a>
                </Link>                
            
                <nav className={styles.navigation} legacyBehavior>
                    <Link href="/" legacyBehavior>
                        <a className={ router.pathname === "/" ? styles.active : '' }>
                            Inicio
                        </a>                        
                    </Link>
                    <Link href="/aboutus" legacyBehavior>                         
                        <a className={ router.pathname === "/aboutus" ? styles.active : '' }>
                            Nosotros
                        </a>   
                    </Link>
                    <Link href="/store" legacyBehavior>                        
                        <a className={ router.pathname === "/store" ? styles.active : '' }>
                            Tienda
                        </a> 
                    </Link>                    
                    <Link href="/blog" legacyBehavior>                        
                        <a className={ router.pathname === "/blog" ? styles.active : '' }>
                            Blog
                        </a> 
                    </Link>                    
                </nav>            
            </div>
        </header>
    )
}
