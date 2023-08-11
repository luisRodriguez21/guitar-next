import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import styles from '@/styles/carrito.module.css'


export default function Carrito({ carrito, actualizarCantidad, eliminarGuitarra }) {
    const [total, setTotal] = useState(0)


    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    }, [carrito])


    return (
        <Layout>
            <main className="container">
                <h2 className="heading">Carrito</h2>
                <div className={styles.contenido}>

                    <div className={styles.carrito}>
                        <h2>Articulos</h2>

                        {
                            carrito.length === 0 ?
                            'Carrito vacio'
                            :
                            carrito.map(producto => (
                                <div key={producto.id} className={styles.producto}>

                                    <div>
                                        <Image src={producto.imagen} width={250} height={150} alt="imagen producto" />
                                    </div>

                                    <div className="">
                                        <p className={styles.nombre}>{producto.nombre}</p>
                                        <p className={styles.cantidad}>
                                            Cantidad:
                                            <select
                                                className={styles.select}
                                                value={producto.cantidad}
                                                onChange={(e) => actualizarCantidad({
                                                    cantidad: +e.target.value,
                                                    id: producto.id
                                                })}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </p>
                                        <p className={styles.precio}>$ <span>{producto.precio}</span></p>
                                        <p className={styles.subtotal}>Subtotal: $ <span>{producto.precio * producto.cantidad}</span></p>
                                    </div>

                                    <button
                                        className={styles['btn-eliminar']}
                                        type="button"
                                        onClick={() => eliminarGuitarra(producto.id)}
                                    >X</button>

                                </div>
                            ))
                        }
                    </div>

                    <aside className={styles.resumen}>
                        <h3>Resumen del pedido</h3>
                        <p>Total a pagar: {total}</p>
                    </aside>

                </div>
            </main>
        </Layout>
    )
}
