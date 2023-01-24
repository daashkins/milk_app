import * as React from 'react'
import Image from '../images/milk.png'

const CardDetailed = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col md:flex-row rounded-lg bg-transparent shadow-lg">
                <img
                    className="h-96 md:h-auto object-cover w-96 bg-white rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={`${Image}`}
                    alt=""
                />
                <div className="p-6 w-96 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                        Card title
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                        This is a wider card with supporting text below as a
                    </p>
                    <p className="text-gray-700 text-base mb-10">
                        44 liter
                    </p>
                    <input id="small-range" type="range" value="50" min="1" max="100" step="1" className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"/>
                    <output className="bubble"></output>
                </div>
            </div>
        </div>
    )
}

export default CardDetailed
