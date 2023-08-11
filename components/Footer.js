import Link from "next/link"
import styles from "../styles/footer.module.css"


export default function Footer() {


    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.contentFooter}`}>
                <nav className={styles.navigation}>
                    <Link href="/">
                        Inicio                      
                    </Link>
                    <Link href="/aboutus">                         
                        Nosotros 
                    </Link>
                    <Link href="/store">                        
                        Tienda
                    </Link>
                    <Link href="/blogs">                        
                        Blog
                    </Link>                
                </nav>
                <p className={styles.copyright}>Todos los derehcos reservados { new Date().getFullYear() } </p>
            </div>
        </footer>
    )
}
