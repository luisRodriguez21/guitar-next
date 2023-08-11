import Head from "next/head"
import Link from "next/link"
import Layout from "../components/Layout"
import Guitarra from "@/components/Guitarra"
import Post from "@/components/Post"
import Curso from "@/components/Curso"
import stylesGrid from '@/styles/grid.module.css'


export async function getStaticProps(){
	const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
	const urlBlogs = `${process.env.API_URL}/blogs?populate=imagen`
	const urlCurso = `${process.env.API_URL}/curso?populate=imagen`
	
	const [ resGuitarras, resBlogs, resCurso ] = await Promise.all([
		fetch(urlGuitarras),
		fetch(urlBlogs),
		fetch(urlCurso)
	])

	const [{ data: guitarras }, { data: blogs }, { data: curso } ] = await Promise.all([
		resGuitarras.json(),
		resBlogs.json(),
		resCurso.json()
	])


	return {
		props: {
			guitarras,
			blogs,
			curso
		}
	}

}

export default function Home({ guitarras, blogs, curso }) {
	// console.log("guitarras: " ,guitarras);
	// console.log("blogs: " ,blogs);
	// console.log("curso: " ,curso);


	return (
		<>		
			<Layout title={"Inicio"}>	
				<main className="container">
					<h1  >Nuestra colección</h1>
                    
					<div className={stylesGrid.grid}>
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

				<Curso 
					curso={curso}
				/>

				<section className="container"> 
					<h2 className="heading">Nuestra colección</h2>
					<div className={stylesGrid.grid}>
                        {
                            blogs?.map(blog => (
                                <Post
                                    key={blog.id} 
                                    blogs={blog}
                                />
                            ))
                        }
                    </div>
				</section>
			</Layout>				
		</>
	)
}
