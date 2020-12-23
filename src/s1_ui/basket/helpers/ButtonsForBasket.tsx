import {Box, Button} from "@material-ui/core";
import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {addOneProduct, deleteOneProduct} from "../../../s2_bll/basket-reducer";

const useStyles = makeStyles(() =>
    createStyles({
        button: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
    }),
);
export const ButtonsForBasket = (props: ButtonsForBasketType) => {

    const dispatch = useDispatch()
    const classes = useStyles();

    const plusOneProduct = () => {
        dispatch(addOneProduct({name: props.name}))
    }
    const minusOneProduct = () => {
        dispatch(deleteOneProduct({name: props.name}))
    }

    return <div className={classes.button}>
        <Button variant="outlined" color="primary" size='small' onClick={minusOneProduct}>
            -
        </Button>
        <Box fontWeight="fontWeightBold" m={2}>
            {props.numberInBasket}
        </Box>
        <Button variant="outlined" color="primary" size='small' onClick={plusOneProduct}>
            +
        </Button>
    </div>
}

type ButtonsForBasketType = {
    numberInBasket: number
    name: string
}