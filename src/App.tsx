import React, {useEffect} from 'react';
import './App.css';
import firebase from 'firebase'
import {setProducts} from './s2_bll/products-reducer';
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from "./s2_bll/store";
import {Header} from './s1_ui/header/Header';
import {SimpleContainer} from './common/Container';
import {Main} from './s1_ui/main/Main';
import {Basket} from './s1_ui/basket/Basket';
import {Route, Switch} from 'react-router-dom';
import {initialStateBasketType} from "./s2_bll/basket-reducer";
import {NotFoundComponent} from './common/NotFoundComponent';

function App() {

    const productInBasket = useSelector<AppRootStateType, initialStateBasketType>(state => state.basket)
    const dispatch = useDispatch()

    useEffect(() => {
        const db = firebase.database()
        const products = db.ref('products')
        products.on('value', (elem) => {
            dispatch(setProducts({products: elem.val()}))
        })
    }, [dispatch])

    return (
        <div>
            <Header total={productInBasket.total}/>
            <Switch>
                <Route exact path="/">
                    <SimpleContainer component={<Main/>}/>
                </Route>
                {productInBasket.productsInBasket.length ?
                    <Route path="/basket">
                        <SimpleContainer component={<Basket/>}/>
                    </Route>
                    : <NotFoundComponent/>}
            </Switch>
        </div>
    )
}

export default App;
