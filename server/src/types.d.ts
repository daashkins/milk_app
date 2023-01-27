export interface IProductToOrder {
    id: string
    name: string
    type: string
    quantity: number
    price: number
}

export interface IProductInDb {
    cart_product_id: string
    product_id: string
    cart_id: string
    quantity_in_cart: number
}
