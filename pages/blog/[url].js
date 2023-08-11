import React from 'react'
import Image from 'next/image'
import Layout from "@/components/Layout";
import { formatearFecha } from '@/utils/helpers'
import styles from '@/styles/blog.module.css'


export async function getServerSideProps({ query: { url } }){    
    const respuesta = await fetch(`${process.env.API_URL}/blogs?filters[url]=${url}&populate=imagen`)
    const { data: blog } = await respuesta.json()
    


    return {
        props: {
            blog
        }
    }
}


export default function DetailPost({ blog }) {
    const { contenido, imagen, titulo, url, publishedAt } = blog[0].attributes


    return (
        <Layout>
            <article className={`${styles.post} ${styles['mt-3']}`}>
                <Image src={imagen.data.attributes.url} alt={`imagen blog ${titulo}`} width={600} height={400} />
                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                    <p className={styles.resumen}>{contenido}</p>
                </div>
            </article>
        </Layout>
    )
}