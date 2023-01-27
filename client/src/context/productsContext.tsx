import * as React from 'react'
// import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState, createContext } from 'react'
import axios from 'axios'
import { ProductsContextType, IProduct, IProductToOrder } from '../types'
import { useNavigate } from 'react-router-dom'

export const ProductsContext = createContext<ProductsContextType | null>(null)

const ProductsProvider = ({ children }: any) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [cart, setCart] = useState<IProductToOrder[]>([])

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8080/api/products').then((response) => {
            setProducts([...response.data])
        })
    }, [])

    useEffect(() => {
        const existingCart = window.localStorage.getItem('cart')
        if (existingCart) {
            const productsInExistCart = JSON.parse(existingCart)
            setCart([...productsInExistCart])
        } else {
            window.localStorage.setItem('cart', '[]')
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product: IProduct, quantity: number) => {
        let currentProducts = [...cart]
        const index = currentProducts.findIndex(
            (productInCart) => productInCart.id === product.id
        )
        if (index >= 0) {
            currentProducts[index].quantity =
                currentProducts[index].quantity + quantity
            setCart([...currentProducts])
        } else {
            const newItemInCart: IProductToOrder = {
                id: product.id,
                name: product.name,
                type: product.type,
                quantity: quantity,
                price: product.price,
            }
            setCart([...cart, newItemInCart])
        }
    }

    const submitCart = async (cart: IProductToOrder[]) => {
        try {
            // await axios.post(`http://localhost:8080/api/cart`, {...cart})
            setTimeout(() => navigate('/'), 1000);
        } catch (err) {
            console.error(err)
            setTimeout(() => navigate('/'), 1000);
        }
        window.localStorage.setItem('cart', '[]')
    }



    return (
        <ProductsContext.Provider value={{ products, cart, addToCart, submitCart }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider
