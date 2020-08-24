import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Products from '../components/products/Products';
import Landing from '../components/Landing'

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/products' component={Products} />
        </Switch>
    )
}
