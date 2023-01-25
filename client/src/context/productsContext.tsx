import * as React from 'react'
import { useEffect, useState, createContext } from 'react'
import axios from 'axios'
import { ProductsContextType, IProduct } from '../types'

export const ProductsContext = createContext<ProductsContextType | null>(null)

const ProductsProvider = ({ children }: any) => {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products').then((response) => {
            console.log(response.data)
            setProducts([...response.data])
        })
    }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider
