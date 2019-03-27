import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddWord from './AddWord'
import Search from './Search'
class Menu extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav pills>
            <NavItem>
              <NavLink> <Link to="/">Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink> <Link to="/addword">Add Word</Link></NavLink>
            </NavItem>
          </Nav>
          <hr />
          <Route exact path="/" component={Search} />
          <Route path="/addword" component={AddWord} />
        </div>
      </Router>
    );
  }
}

export default Menu;

