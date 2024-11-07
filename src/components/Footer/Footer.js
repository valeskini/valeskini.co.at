import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Footer = (props) => {
  const copyrightYear = new Date().getFullYear();

  return (
    <footer>
      <p>Folge uns auf Facebook:</p>
      <a href="https://www.facebook.com/Reitschule-und-Percheronzucht-Valeskini-1886907348189931/">
        <svg
          height="30pt"
          viewBox="0 0 512 512"
          width="30pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m483.738281 0h-455.5c-15.597656.0078125-28.24218725 12.660156-28.238281 28.261719v455.5c.0078125 15.597656 12.660156 28.242187 28.261719 28.238281h455.476562c15.605469.003906 28.257813-12.644531 28.261719-28.25 0-.003906 0-.007812 0-.011719v-455.5c-.007812-15.597656-12.660156-28.24218725-28.261719-28.238281zm0 0"
            fill="#fff"
          />
          <path
            d="m353.5 512v-198h66.75l10-77.5h-76.75v-49.359375c0-22.386719 6.214844-37.640625 38.316406-37.640625h40.683594v-69.128906c-7.078125-.941406-31.363281-3.046875-59.621094-3.046875-59 0-99.378906 36-99.378906 102.140625v57.035156h-66.5v77.5h66.5v198zm0 0"
            fill="#000"
          />
        </svg>
      </a>
      <br />
      <br />
      <p>© {copyrightYear} Reitschule Valeskini</p>
      <p>
        Sabrina Valeskini • Kreuzberg 602 / 8583 Edelschrott • Email:
        <a className="href" href="mailto:reitschule@valeskini.co.at">
          {" "}
          reitschule@valeskini.co.at
        </a>{" "}
        • Telefon:{" "}
        <a className="href" href="tel:+436645256697">
          +43 664 525 66 97
        </a>
      </p>
      <p>
        <Link id="Impressum" to="/Impressum">
          Impressum
        </Link>{" "}
        •{" "}
        <Link id="Datenschutz" to="/Datenschutz">
          Datenschutz
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
