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

export interface ICart {
    id: string
    products: IProductToOrder[]
}

export type IParamsId = {
    id: string
}
export type ProductsContextType = {
    products: IProduct[]
    cart: ICart
    productsInCart: IProductToOrder[]
}
