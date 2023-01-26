import * as React from 'react'

const Header = () => {
    return (
        <div className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-center">
            <h1
                className="text-5xl font-bold mt-4 mb-6"
                style={{ color: '#cd94a7' }}
            >
                <a href="/">The Milk Store</a>
            </h1>
        </div>
    )
}

export default Header
