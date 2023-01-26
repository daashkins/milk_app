import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Product from './components/Product'
import Cart from './components/Cart'
import './App.css'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>

            <div className="App"></div>
        </>
    )
}

export default App
