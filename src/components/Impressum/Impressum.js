import "./Rights.css";
import React, { useState } from "react";

function Impressum() {
  return (
    <div className="rights">
      <h1>IMPRESSUM</h1>
      <p>&nbsp;</p>
      <p>
        Reitschule Valeskini
        <br />
        Sabrina Valeskini
        <br />
        Kreuzberg 602
        <br />
        8583 Edelschrott / Österreich
      </p>
      <p>
        Email:{" "}
        <a href="mailto:reitschule@valeskini.co.at">
          reitschule@valeskini.co.at
        </a>
        <br />
        <a href="tel:+4306645256697">Telefon: +43 664 525 66 97</a>
      </p>
      <p>Für den Inhalt verantwortlich: Sabrina Valeskini</p>
      <p>&nbsp;</p>
      <h3>Haftungsausschluss (Disclaimer)</h3>
      <h4>Haftung für Links</h4>
      <p className="justify">
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>
      <p>&nbsp;</p>
      <h4>Urheberrecht</h4>
      <p className="justify">
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung,
        Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
        Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
        Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für
        den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte
        auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
        Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als
        solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
        <br />
        Wir bedanken uns bei <a href="https://www.flaticon.com/free-icons/horse" title="horse icons">Freepik - Flaticon</a> für die Kostenlose bereitstellung der (<a href="https://www.flaticon.com/free-icons/horse" title="horse icons">Pferde-</a>)Icons für unsere Logos!
      </p>
      <p>&nbsp;</p>
    </div>
  );
}

export default Impressum;