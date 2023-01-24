import * as React from 'react'
import Card from './Card'
import { BiSearch } from 'react-icons/bi'

const Main = () => {
    const productsTypes = [
        'Whole milk',
        'Rice milk',
        'Coconut milk',
        'Macadamia milk',
        'Hemp milk',
        'Cashew milk',
        'Almond milk',
        'Soy milk',
        'Oat milk',
        'Walnut milk',
        'Pea milk',
    ]
    return (
        <div className="container mx-auto">
            <div className="flex justify-between mt-24">
                <form className="w-96">
                    <div className="relative">
                        <BiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-transparent-600"
                        />
                    </div>
                </form>

                <select
                    id="underline_select"
                    className="block py-2.5 px-0 w-80 text-lg font-normal text-gray-500 bg-transparent border-0 border-none border-transparent appearance-none focus:outline-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                    <option>Filter</option>
                    {productsTypes.map((item, index) => {
                        return (
                            <option key={`${index}`} value={`${item}`}>
                                {item}
                            </option>
                        )
                    })}
                </select>
            </div>

            <div className="mt-10 mb-10">
                <h6 className="font-medium leading-tight text-base mt-0 mb-2 text-stone-900">
                    99 products
                </h6>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div className="group relative">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Main
