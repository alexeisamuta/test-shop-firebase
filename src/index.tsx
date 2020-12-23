import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'
import {Provider} from "react-redux";
import {store} from "./s2_bll/store";
import {BrowserRouter} from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyCZxcqjzxJH2881m3f5DPy7lYW6beJzgqM",
    authDomain: "test-shop-back-e3bf0.firebaseapp.com",
    databaseURL: "https://test-shop-back-e3bf0-default-rtdb.firebaseio.com",
    projectId: "test-shop-back-e3bf0",
    storageBucket: "test-shop-back-e3bf0.appspot.com",
    messagingSenderId: "259904558977",
    appId: "1:259904558977:web:d80c6e5b1de9eedb173a80"
}

firebase.initializeApp(firebaseConfig)
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,

    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
