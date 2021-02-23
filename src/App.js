import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import DishDetail from './components/DishDetailComponent';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

class App extends Component {

  render() {
    const store = ConfigureStore();

    return (
      <BrowserRouter>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
     </BrowserRouter>
    );
  }
}

export default App;
