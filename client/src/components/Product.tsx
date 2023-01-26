import * as React from 'react'
import CardDetailed from './CardDetailed'
import BackButton from './BackButton'

const Product = () => {
    return (
        <div className="container mx-auto">
            <BackButton />
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
