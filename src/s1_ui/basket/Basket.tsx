import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {DescriptionProduct} from "../../common/DescriptionProduct";
import {ButtonsForBasket} from './helpers/ButtonsForBasket';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../s2_bll/store";
import {Order} from "./order/Order";
import {Card, CardMedia} from "@material-ui/core";
import {initialStateBasketType} from "../../s2_bll/basket-reducer";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            width: '100%',
        },
        rootCard: {
            width: "70%",
            marginTop: '10px'
        },
        rootOrder: {
            width: "30%",
            marginTop: '10px'
        },
        img: {
            width: '50%',
            height: 200
        },
        cardActionArea: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: "100%",
        },
        flexWrap: {
            width: '25%',
        }
    }),
);

export function Basket() {

    const {productsInBasket, total} = useSelector<AppRootStateType, initialStateBasketType>(state => state.basket)
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.rootCard}>
                {productsInBasket.map((elem) => {
                    return <Card>
                        <div className={classes.cardActionArea}>
                            <CardMedia component="img"
                                       className={classes.img}
                                       image={elem.imageUrl}
                                       title="Contemplative Reptile"
                            />
                            <div className={classes.flexWrap}>
                                <DescriptionProduct country={elem.country}
                                                    freshness={elem.freshness}
                                                    quantity={elem.quantity}
                                                    costOne={elem.costOne}
                                                    name={elem.name}
                                />
                            </div>
                            <div className={classes.flexWrap}>
                                <ButtonsForBasket numberInBasket={elem.inBasket} name={elem.name}/>
                            </div>
                        </div>
                    </Card>
                })}
                <div>TOTAL: {total} $</div>
            </div>
            <div className={classes.rootOrder}>
                <Order/>
            </div>
        </div>
    );
}




