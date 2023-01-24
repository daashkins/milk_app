import * as React from 'react'
import { useParams } from 'react-router-dom'
import CardDetailed from './CardDetailed'

type ProductParams = {
    id: string
}

const Product = () => {
    const { id } = useParams<ProductParams>()

    return (
        <div className="container mx-auto">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Back
            </button>
            <div className="flex justify-center items-center" style={{height:'70vh'}}>
                <div className="group relative">
                    <CardDetailed />
                </div>
            </div>
        </div>
    )
}

export default Product
