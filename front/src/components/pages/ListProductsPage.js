import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../reducers/ProductsReducer'

export const ListProductsPage = () => {
    const {loading, setLoading} = useState(true)
    const {alert, setAlert} = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch( getProducts() )
    }, [dispatch])

    return (
      <>
        <NavBar title = "Welcome" />
        <main>
        {
          (loading) ?
                      <section>
                        <SpinnerLoader/>
                      </section>
                    : 
                      <Products />
                      // {
                      //   alert && <customAlert/>
                      // }

        }
        </main>

      </>

    )
}