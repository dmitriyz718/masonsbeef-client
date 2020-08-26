import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Products from '../components/products/Products';
import Landing from '../components/Landing'
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/products' component={Products} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
        </Switch>
    )
}
