import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import {productsReducer} from "./products-reducer";
import {basketReducer} from "./basket-reducer";

const rootReducer = combineReducers({
    products: productsReducer,
    basket: basketReducer
})

export type RootReducerType = typeof rootReducer

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})
export type AppRootStateType = ReturnType<RootReducerType>

// в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store