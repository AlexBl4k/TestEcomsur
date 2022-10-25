import { combineReducers , applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from '../reducers/CartReducer';
import { productsReducer } from '../reducers/ProductsReducer';

const composeEnhancers = ( typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose

const reducers = combineReducers({
    productsReducer,
    cartReducer,
})
export const store = createStore ( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)