import React ,{Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Facility from '../Facility/Facility'
import Kiosk from '../Kiosk/Kiosk'

class Menu extends Component {
  render() {
    return (<Router>
    <div>
      <ul>
        <li>
          <Link to="/">Faculty</Link>
        </li>
        <li>
          <Link to="/Kiosk">Kiosk</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Facility} />
      <Route exact path="/Kiosk" component={Kiosk} />
    </div>
  </Router>);
  }
}

export default Menu;
