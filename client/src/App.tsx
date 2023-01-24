import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Product from './components/Product'
import './App.css'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:id" element={<Product />} />
            </Routes>

            <div className="App"></div>
        </>
    )
}

export default App
