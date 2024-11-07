import "./Reitunterricht.css";
import LazyLoad from 'react-lazyload';

const Reitunterricht = () => {
  return (
    <div className="reitunterricht">
      <h1>REITUNTERRICHT</h1>
      <h2>Reitunterricht für Kinder und Anfänger</h2>
      <p>
        Der Reitunterricht wird bei uns durch{/*  Sabrina Valeskini und */} Michaela
        Schnidar erteilt. Diese Teilen sich die Unterrichtstage auf so das An
        Fast allen Wochenttagen ein Reibungsloser Ablauf des Reitunterrichts
        Staatfinden kann.
      </p>
      <p>
        Hier unterscheidet sich unser Verein stark von den üblichen
        "Schulbetrieben". Unser oberstes Gebot ist es, Pferde fair zu behandeln.
        Deswegen heißt Schulbetrieb bei uns auch, daß wir Reitunterricht drei
        mal wöchentlich anbieten mit jeweils maximal vier Stunden. So haben
        unsere Pferde die Gelegenheit sich zu erholen. Bei uns werden die
        Schulpferde nicht jährlich ausgewechselt, ein weiteres Indiz, dass wir
        mit unseren Prinzipien auf dem richtigen Weg sind. Außerdem sind unsere
        Pferde Kinder, Traktoren und andere Tiere gewohnt. Sie sind vom
        Charakter sehr ausgeglichen und ruhig.
      </p>
      <p>
        Zu Beginn lernt der Reitschüler das Pferd an der Longe zu spüren,
        richtig zu sitzen und sein Gleichgewicht zu finden. Später fügen wir das
        freie Reiten in der Halle oder am Dressurviereck mit Hufschlagfiguren
        hinzu. Bei uns ist Aussitzen eines der beliebtesten Dinge! Sobald der
        Reiter gelernt hat im Gleichgewicht zu sitzen, besteht die Möglichkeit,
        auf besser ausgebildeten Pferden weiter zu lernen. Sicherheit steht bei
        uns an erster Stelle! Es können gratis Helme, Stiefel und Schutzwesten
        in verschiedenen Größen ausgeborgt werden. Die Pflege des Pferdes gehört
        auch zum Reiten. Deswegen beinhaltet bei uns eine Reitstunde auch
        Putzen, Pflegen, Satteln und Zäumen des Pferdes.
      </p>
      <LazyLoad height={375}>
      <img src="https://i.imgur.com/CpB9tfx.jpg"></img>
      </LazyLoad>
      <p>
        <strong>Unterrichtszeiten Michaela Schnidar</strong>
        <br />- Mittwoch<br /> - Freitag<br /> - Jeden Zweiten Samstag<br /><br />
        Terminvergabe unter <a href="tel:+4306767102277">+43 676 710 22 77</a></p>
      {/* <p>
        <strong>Unterrichtszeiten Sabrina Valeskini</strong>
        <br />- Dienstag<br /> - Donnerstag<br /> - Jeden Zweiten Samstag<br /><br />
        Terminvergabe unter <a href="tel:+43066452566697">+43 664 525 66 97</a>
      </p> */}
    </div>
  );
};

export default Reitunterricht;
