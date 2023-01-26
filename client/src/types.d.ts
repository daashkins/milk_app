import { ThemeCssVarOverrides } from "@mui/material"

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

// export interface ICart {
//     id: string
//     products: IProductToOrder[]
// }

export type IParamsId = {
    id: string
}
export type ProductsContextType = {
    products: IProduct[]
    cart: IProductToOrder[]
    addToCart: (product: IProduct, quantity: number) => void
    updateCart: (product: IProduct, quantity: number) => ThemeCssVarOverrides
    removeFromCart: (product: IProductToOrder) => void
    // updateCart: (products: IProduct[]) => void
}
