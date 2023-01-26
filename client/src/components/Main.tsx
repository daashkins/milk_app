import * as React from 'react'
import Card from './Card'
import { BiSearch } from 'react-icons/bi'
import { useContext, useState } from 'react'
import { ProductsContext } from '../context/productsContext'
import { IProduct, ProductsContextType } from '../types'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import BackButton from './BackButton'

const Main = () => {
    const productsTypes = [
        'All',
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

    const { products } = useContext(ProductsContext) as ProductsContextType
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [productsPerPage] = useState<number>(9)
    const [filter, setFilter] = useState<string>('all')
    const [search, setSearch] = useState<string>('')
    const [searchValue, setSearchValue] = useState<string>('')

    let lastPage: number = products.length / 9
    let currentProducts: IProduct[] = []
    let indexOfLastProduct: number = currentPage * productsPerPage
    let indexOfFirstProduct: number = indexOfLastProduct - productsPerPage
    let totalProductsToShow: number = products.length

    const getCurrentProducts = () => {
        if (filter !== 'all') {
            const filteredProducts = products.filter(
                (product) => product.type === filter
            )
            lastPage =
                filteredProducts.length > 9
                    ? Math.ceil(filteredProducts.length / 9)
                    : 1
            totalProductsToShow = filteredProducts.length
            currentProducts = filteredProducts.slice(
                indexOfFirstProduct,
                indexOfLastProduct
            )
            return
        } else if (search !== '') {
            const searchedProducts = products.filter((product) =>
                product.name.includes(search)
            )
            lastPage =
                searchedProducts.length > 9
                    ? Math.ceil(searchedProducts.length / 9)
                    : 1
            totalProductsToShow = searchedProducts.length
            currentProducts = searchedProducts.slice(
                indexOfFirstProduct,
                indexOfLastProduct
            )
            return
        } else {
            currentProducts = products.slice(
                indexOfFirstProduct,
                indexOfLastProduct
            )
            return
        }
    }
    getCurrentProducts()

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

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const handleSearchSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        setSearch(searchValue)
        setSearchValue('')
    }
    const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault()
        setFilter(event.target.value)
    }

    return (
        <div className="container mx-auto" key={`${Math.random() * 10}`}>
            <div
                className="flex justify-between mt-24"
                key={`${Math.random() * 10}`}
            >
                <form
                    className="w-96 relative"
                    key="form"
                    onSubmit={handleSearchSubmit}
                >
                    <BiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
                    <input
                        key="search"
                        type="text"
                        autoFocus
                        placeholder="Search"
                        value={searchValue}
                        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 "
                        onChange={handleSearchChange}
                    />
                </form>

                <select
                    id="underline_select"
                    className="block py-2.5 px-0 w-80 text-lg font-normal text-gray-500 bg-transparent border-0 border-none border-transparent appearance-none focus:outline-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    onChange={handleFilter}
                >
                    <option key="1">Filter</option>
                    {productsTypes.map((item, index) => {
                        return (
                            <option key={`key${index}`} value={`${item}`}>
                                {item}
                            </option>
                        )
                    })}
                </select>
            </div>

            <div className="mt-10 mb-10" key={`${Math.random() * 10}`}>
                <h6 className="font-medium leading-tight text-base mt-0 mb-2 text-stone-900">
                    {totalProductsToShow} products
                </h6>
            </div>
            {totalProductsToShow === 0 && <BackButton />}
            <div
                className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
                key={`${Math.random() * 10}`}
            >
                {currentProducts.map((product) => {
                    return (
                        <div
                            className="group relative"
                            key={`${Math.random() * 10}`}
                        >
                            <Card product={product} key={product.id} />
                        </div>
                    )
                })}
            </div>
            <div
                className="flex items-center justify-center border-t border-gray-200 bg-transparent mt-7 mb-7"
                key={`${Math.random() * 10}`}
            >
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

export default Main
