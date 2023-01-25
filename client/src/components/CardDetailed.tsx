import * as React from 'react'
import Image from '../images/milk.png'
import { useContext, useState } from 'react'
import { ProductsContext } from '../context/productsContext'
import { ProductsContextType, IParamsId } from '../types'
import { useParams } from 'react-router-dom'
// import Box from '@mui/material/Box'
// import Slider from '@mui/material/Slider'

// const valuetext = (value: number) => {
//     return `${value}°C`
// }

const CardDetailed = () => {
    const { products } = useContext(ProductsContext) as ProductsContextType
    const { id } = useParams<IParamsId>()
    const product = products.find((product) => product.id === id)
    const [quantityToOrder, setQuantityToOrder] = useState<number>(1)
    // const [styleLeftForSliderLabel, setStyleLeftForSliderLabel] = useState<string>("55px")

    const [styleLeftForSliderLabel, setStyleLeftForSliderLabel] = useState<any>(
        { left: '55px' }
    )
    const handleInputQuantityChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setQuantityToOrder(Number(event.target.value))
        const newLeft = Number(event.target.value) * 1.68 - 30
        setStyleLeftForSliderLabel({ left: `${newLeft.toString()}px` })
    }

    console.log(styleLeftForSliderLabel)
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
                    <p className="text-gray-700 text-base mb-4">
                        {product?.type}
                    </p>
                    <p className="text-gray-700 text-base mb-10">
                        {product?.storage} liter
                    </p>
                    <p className="text-gray-700 text-base mb-10">
                        {product?.price} Euro
                    </p>
                    <form className="range">
                        <input
                            name="range"
                            type="range"
                            defaultValue="50"
                            min="1"
                            max="200"
                            step="1"
                            className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance cursor-pointer range-sm dark:bg-gray-700 accent-amber-800"
                            onChange={handleInputQuantityChange}
                        />
                        <output
                            htmlFor="range"
                            className="chat-bubble"
                            style={styleLeftForSliderLabel}
                        >
                            <div className="bubble">{quantityToOrder}</div>
                            <div className="pointer"></div>
                        </output>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded inline-flex items-center mt-14">
                            <span>Order</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CardDetailed
