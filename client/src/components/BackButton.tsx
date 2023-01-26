import * as React from 'react'
import { BsChevronLeft } from 'react-icons/bs'

const BackButton = () => {
    return (
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
    )
}

export default BackButton
