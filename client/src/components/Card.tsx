import * as React from 'react'
import Image from '../images/milk.png'
import { IProduct } from '../types'

const Card = () => {
    return (
        <div className="w-full w-96 max-w-sm bg-white border rounded-lg shadow">
            <a href="#">
                <img
                    className="p-8 rounded-t-lg"
                    src={`${Image}`}
                    alt="product image"
                    style={{ backgroundColor: 'rgb(243 244 246)' }}
                />
            </a>
            <div className="px-5 pb-5 mt-7">
                <a href="#">
                    <h5 className="text-lg font-normal tracking-tight text-zinc-600">
                        Kristian's early coconut milk
                    </h5>
                </a>

                <div className="flex items-center justify-between mt-5">
                    <span className="font-normal text-slate-500">
                        Coconut milk
                    </span>
                    <span className="font-normal text-amber-200">35 liter</span>
                </div>
            </div>
        </div>
    )
}

export default Card
