import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Impressum from "../Impressum/Impressum";
import Datenschutz from "../Impressum/Datenschutz";
import Home from "../Home/Home";
import UberMich from "../UberMich/UberMich";
import NotFound from "../NotFound/NotFound";
import Haltung from "../Haltung/Haltung";
import Reitunterricht from "../Reitunterricht/Reitunterricht";
import Kontakt from "../Kontakt/Kontakt";
import Ferienlager from "../Ferienlager/Ferienlager";
import FerienlagerFürFortgeschrittene from "../FerienlagerFürFortgeschrittene/Ferienlager";
import Reitweise from "../Reitweise/Reitweise";
import AbHofVerkauf from "../AbHofVerkauf/AbHofVerkauf";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  NavLink,
  useLocation,
  Switch as RouterSwitch,
} from "react-router-dom";

const Switch = () => {
  const location = useLocation();

  return (
    <div className="content">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <RouterSwitch location={location}>
            <Route path="/" exact>
              <Home />
              {window.scrollTo(0, 0)}
            </Route>
            <Route path="/ÜberMich">
              <UberMich />
              {window.scrollTo(0, 0)}
            </Route>
            <Route path="/Reitweise">
              <Reitweise />
              {window.scrollTo(0, 0)}
            </Route>
            <Route path="/Haltung">
              <Haltung />
              {window.scrollTo(0, 0)}
            </Route>
            <Route path="/Reitunterricht">
              <Reitunterricht />
              {window.scrollTo(0, 0)}
            </Route>
            {/* <Route path="/Ferienlager">
              <Ferienlager />
              {window.scrollTo(0, 0)}
            </Route> */}
            {/* <Route path="/FerienlagerFürFortgeschrittene">
              <FerienlagerFürFortgeschrittene />
              {window.scrollTo(0, 0)}
            </Route> */}
            <Route path="/Kontakt">
              <Kontakt />
              {window.scrollTo(0, 0)}
            </Route>
            {/* <Route path="/AbHofVerkauf">
              <AbHofVerkauf />
              {window.scrollTo(0, 0)}
            </Route> */}
            <Route path="/Impressum">
              <Impressum />
              {window.scrollTo(0, 0)}
            </Route>
            <Route path="/Datenschutz">
              <Datenschutz />
              {window.scrollTo(0, 0)}
            </Route>
            <Route path="*">
              <NotFound />
              {window.scrollTo(0, 0)}
            </Route>
          </RouterSwitch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Switch;
