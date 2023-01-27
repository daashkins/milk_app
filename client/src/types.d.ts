import { ThemeCssVarOverrides } from '@mui/material'

export interface IProduct {
    id: string
    name: string
    type: string
    storage: number
    price: number
}

export interface IProductToOrder {
    id: string
    name: string
    type: string
    quantity: number
    price: number
}

export type IParamsId = {
    id: string
}
export type ProductsContextType = {
    products: IProduct[]
    cart: IProductToOrder[]
    addToCart: (product: IProduct, quantity: number) => void
    submitCart: (cart: IProductToOrder[] ) => void
}
