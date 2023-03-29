import Link from "next/Link"
import styles from "../styles/footer.module.css"


export default function Footer() {


    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.contentFooter}`}>
                <nav className={styles.navigation} legacyBehavior>
                    <Link href="/" legacyBehavior>
                        Inicio                      
                    </Link>
                    <Link href="/aboutus" legacyBehavior>                         
                        Nosotros 
                    </Link>
                    <Link href="/store" legacyBehavior>                        
                        Tienda
                    </Link>
                    <Link href="/blog" legacyBehavior>                        
                        Blog
                    </Link>
                
                </nav>

                <p className={styles.copyright}>Todos los derehcos reservados { new Date().getFullYear() } </p>
            </div>
        </footer>
    )
}
