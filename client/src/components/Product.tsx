import * as React from 'react'
import CardDetailed from './CardDetailed'
import { BsChevronLeft } from 'react-icons/bs'

const Product = () => {
    return (
        <div className="container mx-auto">
            <button className="bg-transparent text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-24">
                <a
                    href="/"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <BsChevronLeft />
                    <span> Back</span>
                </a>
            </button>
            <div
                className="flex justify-center items-center"
                style={{ height: '70vh' }}
            >
                <div className="group relative">
                    <CardDetailed />
                </div>
            </div>
        </div>
    )
}

export default Product
