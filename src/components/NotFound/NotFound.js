import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = (props) => {
  return (
    <div>
      <div className="error">
        <h1>404</h1>
        <h2>Seite Nicht Gefunden</h2>
        <div className="errorbutton">
          <Link to="/">Zurück zur Startseite</Link>
        </div>
      </div>
      <div class="sadcontainer">
        <div class="tear"></div>
        <div class="tear2"></div>
        <div class="face">
          <div class="eyebrow">︶</div>
          <div class="eyebrow">︶</div>
          <div class="eye"></div>
          <div class="eye"></div>
          <div class="mouth"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
