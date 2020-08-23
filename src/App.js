import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import store from './store'
import { Container } from 'reactstrap';
import ItemModal from './components/itemModal';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Container className="themed-container" fluid={true}>
        <div className="App" >
          <Navbar />
        </div>
      </Container>
    );
  }
}

export default App;
