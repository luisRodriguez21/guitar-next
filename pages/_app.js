import { useState, useEffect } from 'react'
import Layout from "../components/Layout"
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
	const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
	const [carrito, setCarrito] = useState(carritoLS)
	const [paginaLista, setPaginaLista] = useState(false)

	console.log("carritoLS: ",carritoLS);


	
	useEffect(() => { // solucionar problema de Hydration 
		setPaginaLista(true)
	}, [])


	useEffect(() => {
		console.log("checking localstorage...");	
		localStorage.setItem('carrito', JSON.stringify(carrito))
	}, [carrito])


	const agregarCarrito = (guitarra) => {
		console.log("agregando... ",guitarra);

		if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
			const carritoActualizado = carrito.map(guitarraState => {
				if(guitarraState.id === guitarra.id){
					guitarraState.cantidad = guitarra.cantidad
				}

				return guitarraState
			})
			
			setCarrito(carritoActualizado)
		} else {
			setCarrito([...carrito, guitarra])
		}
	}


	const actualizarCantidad = (guitarra) => {
		console.log("actualizarCantidad.. ",guitarra);

		const carritoActualizado = carrito.map(guitarraState => {
			if(guitarraState.id === guitarra.id){
				guitarraState.cantidad = guitarra.cantidad
			}

			return guitarraState
		})

		setCarrito(carritoActualizado)
	}

	const eliminarGuitarra = (id) => {
		const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)
		setCarrito(carritoActualizado)
	}


	return paginaLista ? (
		<Component 
			{...pageProps} 
			carrito={carrito}
			agregarCarrito={agregarCarrito}
			actualizarCantidad={actualizarCantidad}
			eliminarGuitarra={eliminarGuitarra}
		/>		
	) : null
}
