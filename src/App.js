import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import store from './store'
import Products from './components/Products'
import { Container } from 'reactstrap';
import ItemModal from './components/itemModal';
import Landing from './components/Landing';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadUser } from './actions/authActions';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App" >
          <Navbar />
          <Container className="themed-container" fluid={true}>
            <Landing />
            {/* <Products /> */}
          </Container>
        </div>
      </Provider >
    );
  }
}

export default App;
