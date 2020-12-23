import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() =>
    createStyles({
            descriptionProduct: {
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                '& span': {
                    fontSize: 16
                }
            }
        }
    ));
export const DescriptionProduct = (props: DescriptionProductType) => {

    const classes = useStyles();

    return <div className={classes.descriptionProduct}>
        <div>
            <span style={{fontSize: '30px'}}>{props.name}</span>
        </div>
        <div>
            Country: <span>{props.country}</span>
        </div>
        <div>
            Weigh(kg): <span>{props.quantity}</span>
        </div>
        <div>
            Fresh: <span>{props.freshness}</span>
        </div>
        <div>
            Worth(1 kg): <span>{props.costOne} $</span>
        </div>
    </div>
}

type DescriptionProductType = {
    name: string
    costOne: number
    country: string
    freshness: number
    quantity: number
}