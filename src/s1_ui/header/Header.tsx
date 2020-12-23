import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        titleAndButtons: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        link: {
            textDecoration: 'none',
            color: 'white',
            fontSize: '16px'
        }
    }),
);

export function Header(props: {total: number} ) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <div className={classes.titleAndButtons}>
                        <Typography variant="h6">
                            Fruit shop
                        </Typography>
                        <Button color="inherit"><Link to="/" className={classes.link}>Products</Link></Button>
                        <div>
                            {!!props.total && <span>{props.total}$</span>}
                            <Button color="inherit"><Link to="/basket" ><ShoppingBasketIcon/></Link></Button>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}