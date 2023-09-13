import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Pages/Products/Products'
import Layout from './Components/Layout/Layout'

const App = () => {
  return (
    <div className='app'>
        <BrowserRouter>
          <Layout>
          <Routes>
            <Route path='/' element={<Products />} />
          </Routes>
          </Layout>
        </BrowserRouter>
    </div>
  )
}

export default App