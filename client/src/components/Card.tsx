import * as React from 'react'
import Image from '../images/milk.png'
import { IProduct } from '../types'

type Props = {
    product: IProduct
}

const Card: React.FC<Props> = ({ product }) => {
    return (
        <div className="w-full w-96 max-w-sm bg-white border rounded-lg shadow">
            <a href={`/${product.id}`}>
                <img
                    className="p-8 rounded-t-lg"
                    src={`${Image}`}
                    alt="milk"
                    style={{ backgroundColor: 'rgb(243 244 246)' }}
                />
            </a>
            <div className="px-5 pb-5 mt-7">
                <h5 className="text-lg font-normal tracking-tight text-zinc-600">
                    {product.name}
                </h5>
                <div className="flex items-center justify-between mt-5">
                    <span className="font-normal text-slate-500">
                        {product.type}
                    </span>
                    <span className="text-yellow-600 text-bold0">
                        {product.storage} liter
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card
