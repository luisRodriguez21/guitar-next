import Link from "next/link"
import Layout from "@/components/Layout"


export default function NotFound() {
    return (
        <Layout title="Página No Encontrada" >
            <p className="error">Página No Encontrada</p>
            <Link href='/' legacyBehavior>
                <a className="error-enlace">
                    Ir a Inicio
                </a>
            </Link>
        </Layout>
    )
}

