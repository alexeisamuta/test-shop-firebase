import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {productType, stringType} from "./products-reducer";

const initialState: initialStateBasketType = {
    productsInBasket: [],
    total: 0
}

const slice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        setProductsInBasket: (state, action: PayloadAction<{ productsInBasket: productType }>) => {
            state.productsInBasket.push({...action.payload.productsInBasket, inBasket: 1})
            state.total += action.payload.productsInBasket.costOne
        },
        removeFromBasket: (state, action: PayloadAction<{ name: stringType }>) => {
            const item = state.productsInBasket.find((elem) => elem.name === action.payload.name)
            state.total -= item!.costOne * item!.inBasket
            state.productsInBasket = state.productsInBasket.filter((elem) => elem.name !== action.payload.name)
        },
        addOneProduct: (state, action: PayloadAction<{ name: string }>) => {
            const item = state.productsInBasket.find((elem) => elem.name === action.payload.name)
            item!.inBasket++
            state.total += item!.costOne
        },
        deleteOneProduct: (state, action: PayloadAction<{ name: string }>) => {
            const item = state.productsInBasket.find((elem) => elem.name === action.payload.name)
            item!.inBasket === 1
                ? state.productsInBasket = state.productsInBasket.filter((elem) => elem.name !== action.payload.name)
                : item!.inBasket--
            state.total -= item!.costOne
        },
    }
})

export const basketReducer = slice.reducer

export const {setProductsInBasket, removeFromBasket, addOneProduct, deleteOneProduct} = slice.actions

//type
export type initialStateBasketType = {
    productsInBasket: productType[]
    total: number
}