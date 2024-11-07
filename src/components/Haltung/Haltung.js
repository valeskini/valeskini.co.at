import "./Haltung.css";
import LazyLoad from 'react-lazyload';

const Haltung = () => {
  return (
    <div className="haltung">
      <h1>WIE UNSERE PFERDE LEBEN</h1>
      <h2>Die Grundprinzipien unserer Pferdehaltung</h2>
      <p>
        Unsere Pferde leben in der Offenstallherde mit ganztägigem Koppelgang.
        Die Herde setzt sich aus unterschiedlichen Geschlechtern und
        verschiedensten Altersstufen zusammen. Soziales Verhalten wird somit
        automatisch von den Alteingesessenen auf die Jungen oder Neuankömmlinge
        übertragen.
      </p>
      <div className="zweierlisteeins">
        <div className="zweierlisteeins-eins">
          <img src="https://i.imgur.com/vlANNJL.jpg"></img>
          <p>
            <strong>Offenstall</strong>
            <br />
            Bei uns stehen die Pferde in unserer Reithalle, somit dürfen sie
            einen riesigen Offenstall von 800m² bewohnen. Gleichzeitig können
            sie jederzeit auf einer 3000m² befestigten Fläche ihrem Laufbedarf
            nachkommen. Die Herde setzt sich aus bis zu 30 Pferden zusammen.
          </p>
        </div>
        <div className="zweierlisteeins-zwei">
          <img src="https://i.imgur.com/Rp9VzF4.jpg"></img>
          <p>
            <strong>Boxen</strong>
            <br />
            Wir haben im Erdgeschoß drei 12 bis 20m² große Boxen, die wir zur
            Pferdepflege oder im Notfall als Krankenboxen nutzen. Es besteht die
            Möglichkeit der Fohlenaufzucht im Lauf- und Offenstall mit
            gleichaltrigen Gesellen.
          </p>
        </div>
      </div>
      <div className="zweierlistezwei">
        <div className="zweierlistezwei-eins">
        <LazyLoad height={275}>
          <img src="https://i.imgur.com/KPN8aoG.jpg"></img>
          </LazyLoad>
          <p>
            <strong>Gebisslos</strong>
            <br />
            Ich entwarf mein eigenes, gebissloses Zaumzeug, welches nicht zu
            scharf ist, aber doch direkt und nicht verschwommen wirkt. Das
            Zaumzeug hat nicht die übliche Hebelwirkung wie ein Hackemore, es
            engt den Kopf des Pferdes nicht ein und funktioniert nur mit beiden
            Zügeln. Ein links-rechts Riegeln (wie bei üblichem Zaumzeug) ist
            hier völlig sinnlos, wodurch der Reiter veranlasst ist, umzudenken
            und umzulernen. Bis jetzt haben wir dieses gebisslose Zaumzeug bei
            30 Pferden in Verwendung, und es funktioniert bei allen
            ausgezeichnet. Fünf Pferde wurden damit schon von 0 bis S-Dressur
            innerhalb von zwei Jahren ausgebildet!
          </p>
        </div>
        <div className="zweierlistezwei-zwei">
          <LazyLoad height={275}>
            <img src="https://i.imgur.com/CpB9tfx.jpg"></img>
          </LazyLoad>
          <p>
            <strong>Barhuf</strong>
            <br />
            Der natürliche Abrieb bei wild lebenden Pferden bewirkt eine
            besondere Hufform. Unser Ziel ist es diesen Abrieb, der Pferden in
            menschlicher Obhut meist fehlt, durch entsprechende Hufbearbeitung
            nachzuempfinden. Des öfteren muss man aber Kompromisse eingehen und
            die Bearbeitung des Hufes auf Verhältnisse und Nutzung des Pferdes
            anpassen, oder auch bei der Stellungskorrektur Prioritäten setzen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Haltung;
