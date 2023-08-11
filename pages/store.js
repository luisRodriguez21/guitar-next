import Link from 'next/link'
import Layout from "@/components/Layout"
import Guitarra from '@/components/Guitarra'
import styles from '@/styles/grid.module.css'

// getStaticPaths - obtiene el listado de paginas que se van a crear ciando se hace el build (Static Site Generation)

// getStaticProps ->  obtiene los datos cuando se hace el build (Static site Generation - SSG) -- cada que cambia algo se hace otro build y se sube al server
/*
export async function getStaticProps(){ // se ejecuta en el servidor |
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const { data: guitarras } = await respuesta.json()
    // console.log("guitarras: ",guitarras);
    
    return {
        props: {
            guitarras
        }
    }
}
*/
  
// getServerSideProps -> los datos se obtienen en cada request (Server side Rendering - SSR)
export async function getServerSideProps(){ // se ejecuta en el servidor |
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const { data: guitarras } = await respuesta.json()
    // console.log("guitarras: ",guitarras);
    
    return {
        props: {
            guitarras
        }
    }
}


export default function Tienda({ guitarras }) {
    console.log("guitarras: ",guitarras);

    return (
        <>
            <Layout title={"Tienda"}>
                <main className="container">
                    <h2 className="heading">Nuestra coleccion</h2>   
                    
                    <div className={styles.grid}>
                        {
                            guitarras.map(guitarra =>(
                                <Guitarra 
                                    key={guitarra.id}
                                    guitarra={guitarra.attributes}
                                />
                            ))    
                        }
                    </div>                    
                </main> 
            </Layout>
        </>
    )
}
