import "./App.css";
import Footer from "./components/Footer/Footer";
import Switch from "./components/Switch/Switch";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch as RouterSwitch,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <div className="header">
          <img src="https://i.imgur.com/UJ2qJ0f.png" width="123" height="45" />
          <div className="header-right">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/ÜberMich">Über Mich</NavLink>
            <NavLink to="/Reitweise">Reitweise</NavLink>
            <NavLink to="/Haltung">Haltung</NavLink>
            <NavLink to="/Reitunterricht">Reitunterricht</NavLink>
            {/* <NavLink to="/Ferienlager">Ferienlager</NavLink> */}
            <NavLink to="/Kontakt">Kontakt</NavLink>
            {/* <NavLink to="/AbHofVerkauf">Abhofverkauf</NavLink> */}
          </div>
        </div>
        <RouterSwitch>
          <Route path="*">
            <Switch />
          </Route>
        </RouterSwitch>

        <Footer />
      </div>
      
    </Router>
  );
};

export default App;
