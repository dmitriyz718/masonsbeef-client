import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import { loadUser } from './actions/authActions';
import Routes from './config/Routes';
import { BrowserRouter as Router, } from "react-router-dom";
import { Container } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
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
