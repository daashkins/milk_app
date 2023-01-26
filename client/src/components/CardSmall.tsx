import * as React from 'react'
import Image from '../images/milk.png'
import { IProductToOrder } from '../types'

type Props = {
    product: IProductToOrder
}

const CardSmall: React.FC<Props> = ({ product }) => {
    let totalPrice = (product.price * product.quantity).toFixed(2)
    return (
        <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
        <div className="w-1/4">
            <img
                src={Image}
                alt="milk"
                className="w-full h-full object-center object-cover"
            />
        </div>
        <div className="md:pl-3 md:w-3/4">
            <div className="flex items-center justify-between w-full pt-1">
                <p className="text-base font-black leading-none text-gray-800">
                    {product.name}
                </p>
                <p className="text-normal font-black leading-none text-gray-800 pr-6">
                    {product.quantity} liters
                </p>
            </div>
            <p className="text-xs leading-3 text-gray-600 pt-2">
            {product.type}
            </p>
            <p className="text-xs leading-3 text-gray-600 py-4">
                Price: ${product.price}
            </p>
            <div className="flex items-center justify-between pt-5 pr-6">
                <div className="flex itemms-start">
                    <p className="text-xs leading-3 underline text-red-500 cursor-pointer">
                        Remove
                    </p>
                </div>
                <p className="text-base font-black leading-none text-gray-800">
                    ${totalPrice}
                </p>
            </div>
        </div>
    </div>
    )
}

export default CardSmall

