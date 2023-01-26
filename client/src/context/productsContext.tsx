import * as React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState, createContext } from 'react'
import axios from 'axios'
import { ProductsContextType, IProduct,IProductToOrder, ICart } from '../types'

export const ProductsContext = createContext<ProductsContextType | null>(null)

const ProductsProvider = ({ children }: any) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [productsInCart, setProductsInCart] = useState<IProductToOrder[]>([])
    const [cart, setCart]= useState<ICart>({
        id: uuidv4(),
        products: []
    })

    useEffect(() => {
        axios.get('http://localhost:8000/api/products').then((response) => {
            console.log(response.data)
            setProducts([...response.data])
        })
    }, [])

    return (
        <ProductsContext.Provider value={{ products,productsInCart, cart }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider
