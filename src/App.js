import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import store from './store'
import { Container } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadUser } from './actions/authActions';
import Routes from './config/Routes';
import { BrowserRouter as Router, } from "react-router-dom";
import Footer from './components/footer/Footer';
import ProductModal from './components/products/ProductModal';
require('dotenv').config()

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" >
            <Navbar />
            <Container className="themed-container" fluid={true}>
            </Container>
            <Routes />
          </div>
          <Footer />

        </Router>
      </Provider >
    );
  }
}

export default App;
