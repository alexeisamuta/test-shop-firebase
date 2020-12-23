import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    products: {} as productsType
}

const slice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<{ products: productsType }>) => {
            state.products = action.payload.products
        }
    }
})

export const productsReducer = slice.reducer

export const {setProducts} = slice.actions

//type
export type InitialStateType = {
    products: productsType
}
export type productsType<T = productType> = {
    apple: T
    kiwi: T
    banana: T
    orange: T
}
export type productType = {
    name: stringType
    costOne: number
    country: string
    freshness: number
    quantity: number
    imageUrl: string
    inBasket: number
}
export type stringType = 'apple' | 'kiwi' | 'banana' | 'orange'

