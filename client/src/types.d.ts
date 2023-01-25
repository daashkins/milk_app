export interface IProduct {
    id: string
    name: string
    type: string
    storage: number
    price: number
}
export type IParamsId = {
    id: string
}
export type ProductsContextType = {
    products: IProduct[]
}
