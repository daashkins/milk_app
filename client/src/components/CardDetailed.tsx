import * as React from 'react'
import Image from '../images/milk.png'
import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/productsContext'
import { ProductsContextType, IParamsId, IProduct } from '../types'
import { useParams } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'

const CardDetailed = () => {
    const { products } = useContext(ProductsContext) as ProductsContextType
    const { cart, addToCart } = useContext(
        ProductsContext
    ) as ProductsContextType
    const { id } = useParams<IParamsId>()
    const product: IProduct | undefined = products.find(
        (product) => product.id === id
    )
    const [quantityToOrder, setQuantityToOrder] = useState<number>(1)
    const [styleLeftForSliderLabel, setStyleLeftForSliderLabel] = useState<any>(
        { left: '3%' }
    )
    const [quantityInCart, setQuantityInCart] = useState<number>(0)

    useEffect(() => {
        const existingQuantityInCart = cart.find(
            (productInCart) => productInCart.id === product?.id
        )?.quantity
        if (existingQuantityInCart !== undefined) {
            setQuantityInCart(existingQuantityInCart)
        }
    }, [cart])
    const handleInputQuantityChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setQuantityToOrder(Number(event.target.value))
        let newLeft: number
        if (product) {
            newLeft =
                ((Number(event.target.value) - 1) * 100) / (product.storage - 1)
            let newPosition: number = 10 - newLeft * 0.2
            setStyleLeftForSliderLabel({
                left: `calc(${newLeft}% + (${newPosition}px))`,
            })
        }
    }
    const handleOrder = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        product && addToCart(product, quantityToOrder)
    }

    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col md:flex-row rounded-lg bg-transparent shadow-lg">
                <img
                    className="h-96 md:h-auto object-cover w-96 bg-white rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={`${Image}`}
                    alt="Milk"
                />
                <div className="p-6 w-96 flex flex-col justify-start ml-8">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                        {product?.name}
                    </h5>
                    <p className="text-slate-500 text-base mb-4">
                        {product?.type}
                    </p>
                    <p className="text-yellow-600 text-bold mb-10">
                        {product?.storage} liter
                    </p>
                    <p className="text-gray-700 text-base mb-10">
                        {product?.price} Euro
                    </p>
                    <div className="range-wrap">
                        <input
                            name="range"
                            type="range"
                            defaultValue={quantityToOrder}
                            min="1"
                            max={product?.storage}
                            step="1"
                            className="w-full h-1 mb-6 bg-white rounded-lg appearance cursor-pointer range-sm accent-lime-500"
                            onChange={handleInputQuantityChange}
                        />
                        <div
                            className="range-value"
                            id="rangeV"
                            style={styleLeftForSliderLabel}
                        >
                            <span>{quantityToOrder}</span>
                        </div>
                    </div>
                    <div className="flex justify-between mt-14">
                        <button
                            className="bg-gray-300 w-36 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded inline-flex items-center justify-center"
                            onClick={handleOrder}
                        >
                            <span>Order</span>
                        </button>
                        <div>
                            <a href="/cart">
                            <BsCart
                                className="text-gray-800"
                                style={{
                                    fontSize: '35px',
                                    marginRight: '50px',
                                }}
                            />
                            <div className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
                                {quantityInCart}
                            </div>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetailed
