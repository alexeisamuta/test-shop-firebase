import React from 'react'
import {Button, Card, FormControl, FormGroup, TextField} from '@material-ui/core'
import {useFormik} from 'formik'
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            height: 400,
            marginLeft: '10px'
        }
    }),
);

export const Order = () => {

    const classes = useStyles()

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            address: '',
            phone: ''
        },
        onSubmit: values => {
            alert()
        },
    })

    return <Card className={classes.root}>
        <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormGroup>
                    <TextField
                        label="name"
                        margin="normal"
                        variant="outlined"
                        {...formik.getFieldProps("name")}
                    />
                    <TextField
                        label="surname"
                        margin="normal"
                        variant="outlined"
                        {...formik.getFieldProps("surname")}
                    />
                    <TextField
                        label="address"
                        margin="normal"
                        variant="outlined"
                        {...formik.getFieldProps("address")}
                    />
                    <TextField
                        label="phone"
                        margin="normal"
                        variant="outlined"
                        {...formik.getFieldProps("phone")}
                    />
                    <Button type={'submit'} variant={'contained'} color={'primary'}>ORDER</Button>
                </FormGroup>
            </FormControl>
        </form>
    </Card>
}