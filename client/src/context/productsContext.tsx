import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState, createContext } from 'react'
import axios from 'axios'
import { ProductsContextType, IProduct, IProductToOrder, ICart } from '../types'

export const ProductsContext = createContext<ProductsContextType | null>(null)

const ProductsProvider = ({ children }: any) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [productsInCart, setProductsInCart] = useState<IProductToOrder[]>([])
    const [cart, setCart] = useState<ICart>({
        id: uuidv4(),
        products: [],
    })

    useEffect(() => {
        axios.get('http://localhost:8000/api/products').then((response) => {
            console.log(response.data)
            setProducts([...response.data])
        })
    }, [])

    useEffect(() => {

    }, [cart])

    const addToCart = (product: IProduct, quantity: number) => {
        let currentProducts = [...cart.products];
        const index = currentProducts.findIndex(productInCart => productInCart.id === product.id)
        if(index >= 0){
            currentProducts[index].quantity= currentProducts[index].quantity+ quantity
            setCart({
                ...cart, // Copy the old fields
                products: [...currentProducts], // But override this one
            })
        } else {
        const newItemInCart: IProductToOrder = {
            id: product.id,
            name: product.name,
            type: product.type,
            quantity: quantity,
            price: product.price
        }
        setCart({
            ...cart, // Copy the old fields
            products: [...cart.products, newItemInCart], // But override this one
        })
        }
    }

    console.log(cart);

    return (
        <ProductsContext.Provider
            value={{ products, cart, addToCart}}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider
