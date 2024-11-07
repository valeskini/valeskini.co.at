import "./Kontakt.css";
import emailjs from "emailjs-com";

function Kontakt() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6i941rg",
        "template_kontakt",
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
    <div className="formular">
      <h1>KONTAKT</h1>
      <div className="form">
{/*         <form onSubmit={sendEmail}>
          <label>
            Vor- und Zuname<a className="required">*</a>
          </label>
          <br />
          <input id="name" required></input>
          <br />
          <br />
          <label>
            Email-Adresse<a className="required">*</a>
          </label>
          <br />
          <input id="email" required></input>
          <br />
          <br />
          <label>
            Betreff<a className="required">*</a>
          </label>
          <br />
          <input id="betreff" required></input>
          <br />
          <br />
          <label>
            Nachricht<a className="required">*</a>
          </label>
          <br />
          <input type="text" id="nachrichtareaa" required></input>
          <br />
          <br />
          <a href="#" type="submit">
            Senden
          </a>
          <br />
        </form> */}
        <h3>Das Kontakt-Formular befindet sich zurzeit in geplanten Wartungsarbeiten!<br />Bitte senden sie uns stattdessen eine Mail an <a href="mailto:reitschule@valeskini.co.at">reitschule@valeskini.co.at</a></h3>
      </div>
      <p className="requiredtext">
        Felder mit <a className="required">*</a> sind Pflichtfelder!
      </p>
      <div className="address">
        <p>
          <strong>Reitschule Valeskini</strong>
          <br />
          Sabrina Valeskini
          <br />
          Unterer Kreuzberg 602
          <br />
          8583 Edelschrott
          <br />
          Email:{" "}
          <a href="mailto:reitschule@valeskini.co.at">
            reitschule@valeskini.co.at
          </a>
          <br />
          Telefon: <a href="tel:+436645256697">+43 664 525 66 97</a>
          <br />
          <h3>Wir freuen uns über Ihre Anfrage!</h3>
        </p>
      </div>
      <br />
      <h4>Wegbeschreibung</h4>
      <p>
        Da das Manche Navis die Route Falsch berechnen, Empfehlen wir für einen
        Reibungslosen Ablauf auf Google Maps nach{" "}
        <strong>Reitstall Valeskini</strong> zu suchen, oder die Adresse{" "}
        <strong>Unterer Kreuzberg 602, 8583 Kreuzberg</strong> Eingeben. Bei
        Apple Karten ebenfalls einfach nach{" "}
        <strong>Unterer Kreuzberg 602, 8583 Kreuzberg</strong> suchen!{" "}
      </p>
    </div>
  );
}

export default Kontakt;
