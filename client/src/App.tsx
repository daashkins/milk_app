import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import './App.css'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>

            <div className="App"></div>
        </>
    )
}

export default App
