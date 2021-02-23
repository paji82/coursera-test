import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import DishDetail from './components/DishDetailComponent';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props){
    super(props);
    console.log("App-Constructor");
    this.state = {
      dishes: DISHES
    };
  }

  render() {
  return (
    <React.Fragment>
    <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
    </div>
    </React.Fragment>
  );
  }
}

export default App;
