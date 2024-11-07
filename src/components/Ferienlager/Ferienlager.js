import "./Ferienlager.css";
import emailjs from "emailjs-com";

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function Ferienlager() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6i941rg",
        "template_ferienlager",
        e.target,
        "user_wiTT24SzZzNjn15pYdXyH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="formularo">
      <h1>ANMELDUNG FÜR DAS FERIENLAGER</h1>
      <div className="vollbeendetlager">
        <p>Für das Ferienlager 2023 gibt es noch keine Informationen!<br />Bitte schaue zu einem späterem Zeitpunkt wieder vorbei!</p>
      </div> 
      {/* <div className="formo">
        <center>
          <div id="termine">
            <h3>1. Ferienlager</h3>
            <p>11. bis 16. Juli</p>
            <h3>2. Ferienlager</h3>
            <p>25. bis 30. Juli</p>
            <h3>3. Ferienlager</h3>
            <p>1. bis 6. August</p>
            <h3>Ferienlager für Fortgeschrittene</h3>
            <p>
              Ein Ferienlager für Kinder und Teenies die bereits die
              Grundkenntnisse vom Reiten haben und unter anderem auch alleine
              Galloppieren oder Putzen und aufsatteln können.
            </p>{" "}
            <Link to="/FerienlagerFürFortgeschrittene">
              <span>Mehr Erfahren...</span>
            </Link>
          </div>
        </center>
        <h2>Anmeldung</h2>
        <form onSubmit={sendEmail}>
          <label for="name">
            Name des Kindes<a className="required">*</a>
          </label>
          <input type="text" id="name" required></input>
          <label for="email">
            Email-Adresse
            <a className="required">*</a>
          </label>
          <input type="email" id="email" required></input>
          <br />
          <br />
          <label for="geborenam">
            Geboren am<a className="required">*</a>
          </label>
          <input
            type="date"
            className="dateinput"
            id="geborenam"
            required
          ></input>
          {}
          <label for="adresse">
            Adresse
            <a className="required">*</a>
          </label>
          <input type="text" id="adresse" required></input>
          <br />
          <br />
          <label for="erziehungsberechtigter">
            Name des Erziehungsberechtigten
            <a className="required">*</a>
          </label>
          <input type="text" id="erziehungsberechtigter" required></input>
          <br />
          <br />
          <label for="erziehungsberechtigternummer">
            Telefonnummer des Erziehungsberechtigten
            <a className="required">*</a>
          </label>
          <input
            type="number"
            id="erziehungsberechtigternummer"
            required
          ></input>
          <br />
          <br />
          <label>
            Bitte auswählen (Mehrfachauswahl möglich)
            <a className="required">*</a>
          </label>
          <br />
          <label for="ferienlagere1">1. Ferienlager</label>
          <input type="checkbox" id="ferienlagere1"></input>
          <br />
          <label for="ferienlagere2">2. Ferienlager</label>
          <input type="checkbox" id="ferienlagere2"></input>
          <br />
          <label for="ferienlagere3">3. Ferienlager</label>
          <input type="checkbox" id="ferienlagere3"></input>
          <br />
          <br />
          <label for="rabatt">
            Name von zusätzlichen Geschwister oder Freund/in (Rabatt)
          </label>
          <input type="text" id="rabatt"></input>
          <br />
          <br />
          <label for="allergisch">
            Mein/e Tochter/Sohn ist allergisch gegen{" "}
          </label>
          <input id="allergisch"></input>
          <br />
          <br />
          <label for="magnicht">Das mag/isst sie/er überhaupt nicht </label>
          <input type="text" id="magnicht"></input>
          <br />
          <br />
          <label for="nachrichtarea">Nachricht (Optional)</label>
          <br />
          <br />
          <input type="text" id="nachrichtarea"></input>
          <br />
          <br />
          <p className="requiredtexte">
            Felder mit <a className="required">*</a> sind Pflichtfelder!
          </p>
          <br />
          <br />
          <a href="#" type="submit">
            Senden
          </a>
        </form>
      </div> */}
    </div>
  );
}

export default Ferienlager;
