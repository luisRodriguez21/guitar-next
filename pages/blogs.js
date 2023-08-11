import Layout from "@/components/Layout"
import Post from '@/components/Post'
import styles from '@/styles/grid.module.css'


export async function getStaticProps(){ // se ejecuta en el servidor |
    const respuesta = await fetch(`${process.env.API_URL}/blogs?populate=imagen`)
    const { data: blogs } = await respuesta.json()
    console.log("blogs: ",blogs);
    
    return {
        props: {
            blogs
        }
    }
}

export default function Blog({ blogs }) {

    return (
        <>
            <Layout title={"Blog"}>
                <main className="container">
                    <h2 className="heading">Blog</h2>   
                    
                    <div className={styles.grid}>
                        {
                            blogs?.map(blog => (
                                <Post
                                    key={blog.id} 
                                    blogs={blog}
                                />
                            ))
                        }
                    </div>

                </main>    
            </Layout>
        </>
    )
}
