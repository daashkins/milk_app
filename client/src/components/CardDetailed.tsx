import * as React from 'react'
import Image from '../images/milk.png'
import { useContext, useState } from 'react'
import { ProductsContext } from '../context/productsContext'
import { ProductsContextType, IParamsId } from '../types'
import { useParams } from 'react-router-dom'

const CardDetailed = () => {
    const { products } = useContext(ProductsContext) as ProductsContextType
    const { id } = useParams<IParamsId>()
    const product = products.find((product) => product.id === id)
    const [quantityToOrder, setQuantityToOrder] = useState<number>(50)
    const [styleLeftForSliderLabel, setStyleLeftForSliderLabel] = useState<any>(
        { left: '25%' }
    )
    const handleInputQuantityChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setQuantityToOrder(Number(event.target.value))
        let newLeft: number =
            ((Number(event.target.value) - 1) * 100) / (200 - 1)
        let newPosition: number = 10 - newLeft * 0.2
        setStyleLeftForSliderLabel({
            left: `calc(${newLeft}% + (${newPosition}px))`,
        })
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
                            defaultValue="50"
                            min="1"
                            max="200"
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
                    <button className="bg-gray-300 w-36 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded inline-flex items-center mt-14 justify-center">
                        <span>Order</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardDetailed
