import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider, } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

import { ExpenseTrackerContext } from "../../context/context";

const Main = () => {
    const classes = useStyles();

    const { balance } = useContext(ExpenseTrackerContext);


    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly..." />
            <CardContent>
                <Typography align="center" variant="h5" >Total Balance {balance} Ruppees</Typography>
                <Typography variant="subtitle2" style={{ lineHeight: '1.5rem', marginTop: '20px'}}>
                    {/* info card */}
                    Try Saying: Add income for $100 in Category Salary for monday...
                </Typography>
                <Divider className={classes.divider} />
                {/* Form */}
                <Form />
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
