import * as React from 'react'
import Card from './Card'
import { BiSearch } from 'react-icons/bi'
import { useContext, useState } from 'react'
import { ProductsContext } from '../context/productsContext'
import { IProduct, ProductsContextType } from '../types'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const Pagination = () => {
    const { products } = useContext(ProductsContext) as ProductsContextType
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [productsPerPage, setProductsPerPage] = useState<number>(9)
    const lastPage: number = products.length / 9
    const indexOfLastProduct: number = currentPage * productsPerPage
    const indexOfFirstProduct: number = indexOfLastProduct - productsPerPage
    const currentProducts: IProduct[] = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    )

    const handleLastPage = () => {
        setCurrentPage(lastPage)
    }

    const paginateForward = () => {
        if (currentPage < lastPage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const paginateBackward = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className="flex items-center justify-center border-t border-gray-200 bg-transparent mt-7 mb-7">
            <div>
                <nav
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                >
                    <p
                        className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        onClick={paginateBackward}
                    >
                        <span className="sr-only">Previous</span>
                        <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
                    </p>
                    <p
                        aria-current="page"
                        className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                    >
                        {currentPage}
                    </p>
                    <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                        of
                    </span>
                    <p
                        onClick={handleLastPage}
                        className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                    >
                        {lastPage}
                    </p>
                    <p
                        className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        onClick={paginateForward}
                    >
                        <span className="sr-only">Next</span>
                        <BsChevronRight
                            className="h-5 w-5"
                            aria-hidden="true"
                        />
                    </p>
                </nav>
            </div>
        </div>
    )
}

export default Pagination
