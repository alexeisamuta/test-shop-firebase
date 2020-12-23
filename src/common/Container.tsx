import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export function SimpleContainer(props: {component: any}) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                {props.component}
            </Container>
        </React.Fragment>
    );
}