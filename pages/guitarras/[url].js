import { useState } from "react";
import { useRouter } from "next/router"
import Image from "next/image"
import Layout from "@/components/Layout";
import styles from '@/styles/guitarras.module.css'


// generara las paginas estaticas de todas las paginas dependiendo los registros que regrese la api
export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()
    console.log("data: ", data);

    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))

    console.log("paths: ", paths);

    return {
        paths,
        fallback: false, // genera pagina 404 si no encuentra esa url

    }
}

export async function getStaticProps({ params: { url } }) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const { data: guitarra } = await respuesta.json()

    return {
        props: {
            guitarra
        }
    }
}

/*
export async function getServerSideProps({ query: { url } }){    
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const { data: guitarra } = await respuesta.json()
    
    return {
        props: {
            guitarra
        }
    }
}
*/

export default function DetailGuitarra({ guitarra, agregarCarrito }) {
    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes
    const [ cantidad, setCantidad ] = useState(0)



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handleSubmit");

        if(cantidad < 1){
            alert("Debes seleccionar una cantidad")
            return
        }

        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            descripcion,
            precio,
            cantidad
        }

        console.log("guitarraSeleccionada: ",guitarraSeleccionada);
        agregarCarrito(guitarraSeleccionada)
    }



    return (
        <Layout title={`Guitarra ${nombre}`}>
            <div className={styles.guitarra}>
                <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form onSubmit={handleSubmit} className={styles.formulario}>
                        <label htmlFor="cantidad">Catidad</label>

                        <select id="cantidad" onChange={e => setCantidad(parseInt(e.target.value))}>
                            <option value="0">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <input
                            type="submit"
                            value="Agregar al carrito"
                        />
                    </form>

                </div>
            </div>
        </Layout>
    )
}
