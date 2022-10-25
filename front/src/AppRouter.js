import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { ProductInfoPage } from './components/pages/ProductInfoPage'
import { CartPage } from './components/pages/CartPage'
import { savedData } from './reducers/CartReducer'
import { ListProductsPage } from './components/pages/ListProductsPage'

export const AppRouter = () => {
    const dispatch = useDispatch()

    useEffect(()=> {
        const data = localStorage.getItem('data')
        if( !!data ) {
            dispatch(savedData(data))
        }
    },[])
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ListProductsPage/>}/>
                <Route exact path="/product/:_id" element={<ProductInfoPage/>}/>
                <Route exact path="/cart" element={<CartPage/>}/>
                <Route exact path="/" element={<Navigate replace to={'/'}/>}/>
            </Routes>
        </Router>
    )
}