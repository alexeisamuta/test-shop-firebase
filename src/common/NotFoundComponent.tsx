import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';

const useStyles = makeStyles(() =>
    createStyles({
        emoji: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'

        }
    }),
);

export const NotFoundComponent = () => {

    const classes = useStyles();

    return (
        <div className={classes.emoji}>
            <div style={{fontSize: '24px'}}>No products in the basket</div>
            <SportsBasketballIcon style={{fontSize: 500}}/>
        </div>
    )
}