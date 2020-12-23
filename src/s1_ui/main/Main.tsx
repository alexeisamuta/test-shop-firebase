import React from "react";
import {createStyles, makeStyles, Paper, Theme} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../s2_bll/store";
import {InitialStateType, productType, stringType} from "../../s2_bll/products-reducer";
import Button from '@material-ui/core/Button';
import {removeFromBasket, setProductsInBasket} from "../../s2_bll/basket-reducer";
import {DescriptionProduct} from "../../common/DescriptionProduct";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: "center",
            '& > *': {
                margin: theme.spacing(3),
                width: 280,
                height: theme.spacing(60),
            },
        },
        insidePaper: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
        },
        avatar: {
            width: 280,
            height: 160
        },
        button: {
            width: 280,
            height: 80
        }
    }),
);

export const Main = () => {

    const {products} = useSelector<AppRootStateType, InitialStateType>(state => state.products)
    const productInBasket = useSelector<AppRootStateType, productType[]>(state => state.basket.productsInBasket)
    const dispatch = useDispatch()
    const classes = useStyles();

    const addInBasketClick = (product: productType) => {
        dispatch(setProductsInBasket({productsInBasket: product}))
    }

    const removeFromBasketFunc = (name: stringType) => {
        dispatch(removeFromBasket({name}))
    }

    return (
        <div className={classes.root}>
            {Object.values(products).map((elem) => {
                return (
                    <Paper elevation={3}>
                        <div className={classes.insidePaper}>
                            <img src={elem.imageUrl} className={classes.avatar} alt='product'/>
                            <DescriptionProduct country={elem.country}
                                                freshness={elem.freshness}
                                                quantity={elem.quantity}
                                                costOne={elem.costOne}
                                                name={elem.name}
                            />
                            {productInBasket.some((item) => elem.name === item.name)
                                ? <Button variant="outlined"
                                          color="secondary"
                                          className={classes.button}
                                          onClick={() => removeFromBasketFunc(elem.name)}>
                                    remove from basket
                                </Button>
                                : <Button variant="outlined"
                                          color="primary"
                                          className={classes.button}
                                          onClick={() => addInBasketClick(elem)}>
                                    Add in basket
                                </Button>
                            }

                        </div>
                    </Paper>
                )
            })}
        </div>
    )
}