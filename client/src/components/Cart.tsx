import React, { useContext } from 'react'
import { ProductsContext } from '../context/productsContext'
import { ProductsContextType } from '../types'
import BackButton from './BackButton'
import CardSmall from './CardSmall'
const Cart = () => {
    const { cart } = useContext(
        ProductsContext
    ) as ProductsContextType

    const subTotal = (cart.reduce( ( sum, { price, quantity } ) => sum + price * quantity , 0).toFixed(2))
    const total = (Number(subTotal) + 3.65).toFixed(2)
    return (
        <>
            <div className="container mx-auto " key={`${Math.random() * 10}`}>
                <BackButton />
                <div
                    className="flex md:flex-row flex-col justify-center"
                    id="cart"
                >
                    <div
                        className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen align-center"
                        id="scroll"
                    >
                        <p className="text-4xl font-black leading-9 text-gray-800">
                                    Shopping Cart
                                </p>
                        {cart.map(productInCart => {
                            return (<CardSmall product={productInCart} key={`productCart${productInCart.id}`}/>)
                        })}
                    </div>
                    <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                        <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                            <div>
                                <p className="text-4xl font-black leading-9 text-gray-800">
                                    Summary
                                </p>
                                <div className="flex items-center justify-between pt-16">
                                    <p className="text-base leading-none text-gray-800">
                                        Subtotal
                                    </p>
                                    <p className="text-base leading-none text-gray-800">
                                        ${subTotal}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between pt-5">
                                    <p className="text-base leading-none text-gray-800">
                                        Shipping
                                    </p>
                                    <p className="text-base leading-none text-gray-800">
                                        $3.65
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                    <p className="text-2xl leading-normal text-gray-800">
                                        Total
                                    </p>
                                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                                        ${total}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
