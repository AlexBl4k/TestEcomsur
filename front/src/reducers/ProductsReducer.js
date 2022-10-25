import { fetchAsyncToApi } from "../services/fetchAsyncToApi"

const initialState = []

export const getProducts = (setLoading) => {
    return async (dispatch) => {
        try {
            const resp = await fetchAsyncToApi('/products', 'GET')
            setLoading(false)
            dispatch({
                type: 'set-products',
                payload: [...resp]
            })
        } catch (error) {
            console.log('Error a la insercion de productos')
        }
    }
}
export const  productsReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case 'set-products':
            // return action.payload
            return action.payload.sort((itm1, itm2) => itm2.rating - itm1.rating);
        default:
            return state
    }
}