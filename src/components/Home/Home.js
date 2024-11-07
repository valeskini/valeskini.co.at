import "./Home.css";
import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import LazyLoad from "react-lazyload";

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function Home(props) {
  return (
    <div>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <LazyLoad height={200}>
                <img src="https://i.imgur.com/DN9BH6a.jpg" />
              </LazyLoad>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <LazyLoad height={200}>
                <img src="https://i.imgur.com/dzgx6BZ.jpg" />
              </LazyLoad>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <LazyLoad height={200}>
                <img src="https://i.imgur.com/MiHExqi.jpg" />
              </LazyLoad>
            </div>
          </div>
        </Fade>
      </div>
      <div className="ubermich">
        <div>
          <div>
            <div>
              <div>
                <h2>Über mich</h2>
                <h3>Sabrina Valeskini</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <p>
                Meinen ersten Pferdekontakt hatte ich im zarten Alter von 7
                Jahren. Damals pflegte ich die Pferde des Nachbarn. Es sollte
                nicht lange dauern, bis ich erste Reitstunden nahm und dann
                endlich war es soweit, mit 14 Jahren bekam ich mein eigenes
                Pferd. Es folgten einige Prüfungen und Turnierstarts, jedoch
                hatte ich immer Probleme mit den Ausbildungsmethoden vieler
                Trainer und Dressurreiter. Mir war es unverständlich, warum
                Reiten eine Quälerei sein musste. Sollte man beim Training nicht
                Spaß und Freude haben?
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <br />
            <Link
              href="#"
              to="/ÜberMich"
              class="ow-icon-placement-left ow-button-hover"
            >
              <span>Weiterlesen </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="wiepferdeleben">
        <h1>WIE UNSERE PFERDE LEBEN</h1>
        <h2>Die Grundprinzipien unserer Pferdehaltung</h2>
        <p>
          <i class="fa fa-check" aria-hidden="true" /> 24h Koppelgang im
          Offenstall
        </p>
        <p>
          <i class="fa fa-check" aria-hidden="true" /> ausgewogene Ernährung
        </p>
        <p>
          <i class="fa fa-check" aria-hidden="true" /> gebissloses Zaumzeug
        </p>
      </div>
      <div className="unserangebot">
        <h1>UNSER ANGEBOT</h1>
        <h2>Das bietet unser Verein</h2>
        <br />
        <br />
        <div className="angebot-img">
          <div className="angebot-reitunterricht">
            <h3>Reitunterricht</h3>
            <LazyLoad height={210}>
              <img src="https://i.imgur.com/ZFyJFEL.jpg"></img>
            </LazyLoad>
            <p>
              Unser oberstes Gebot ist es, Pferde fair zu behandeln. Deswegen
              heißt Schulbetrieb bei uns auch, daß wir Reitunterricht maximal Fünf mal
              wöchentlich anbieten mit jeweils maximal zwei Stunden. So haben
              unsere Pferde die Gelegenheit sich zu erholen. Außerdem sind
              unsere Pferde Kinder, Traktoren und andere Tiere gewohnt. Sie sind
              vom Charakter sehr ausgeglichen und ruhig.
            </p>
            <Link to="/ÜberMich">
              <span>Weiterlesen </span>
            </Link>
          </div>
          <div className="angebot-einstellplatz">
            <h3>Einstellplätze</h3>
            <LazyLoad height={210}>
              <img src="https://i.imgur.com/4n5zAzL.jpeg"></img>
            </LazyLoad>
            <p>
            Bringen Sie Ihr eigenes Pferd mit! Bei uns können Sie Ihr Pferd 
            in einer freundlichen und entspannten Umgebung unterbringen. Wir 
            bieten großzügige Boxen für maximale Bewegungsfreiheit. Unsere Reithalle
            bietet einen großzügigen Offenstall von 800m², und zusätzlich steht
            eine 3000m² große befestigte Fläche zur Verfügung.{" "}
            </p>
            <Link to="/Kontakt">
              <span>Kontaktieren Sie uns</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="kontakt">
        <Link to="/Kontakt">
          <span>Kontaktieren Sie uns </span>
        </Link>
      </div>
      <div className="maps" style={{ textAlign: "center" }}>
        <div>
          <div>
            <div>
              <div>
                <h1>Routenplaner</h1>
              </div>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8150.137875374001!2d15.061511509104648!3d47.02489228460986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a78bc9495f2220a!2sReitstall%20Valeskini!5e0!3m2!1sde!2sat!4v1665333476296!5m2!1sde!2sat"
          className="embed"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {/*         <div
          class="fb-page fb_iframe_widget"
          data-href="https://www.facebook.com/valeskinireitschulepercheron"
          data-tabs="timeline"
          data-width="330"
          data-height=""
          data-small-header="true"
          data-adapt-container-width="false"
          data-hide-cover="false"
          data-show-facepile="true"
          fb-xfbml-state="rendered"
          style={{marginLeft: '50px', paddingBottom: '50px'}}
          fb-iframe-plugin-query="adapt_container_width=false&amp;app_id=&amp;container_width=1870&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fvaleskinireitschulepercheron&amp;locale=de_DE&amp;sdk=joey&amp;show_facepile=true&amp;small_header=true&amp;tabs=timeline&amp;width=330"
        >
          <span style={{verticalAlign: "bottom", width: "330px", height: "500px"}}>
            <iframe
              name="f388319ed9010f8"
              width="330px"
              height="1000px"
              data-testid="fb:page Facebook Social Plugin"
              title="fb:page Facebook Social Plugin"
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
              scrolling="no"
              allow="encrypted-media"
              src="https://www.facebook.com/v11.0/plugins/page.php?adapt_container_width=false&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dffc55a12deb9e8%26domain%3Dwww.valeskini.co.at%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.valeskini.co.at%252Ff140b8796b700d8%26relation%3Dparent.parent&amp;container_width=1870&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fvaleskinireitschulepercheron&amp;locale=de_DE&amp;sdk=joey&amp;show_facepile=true&amp;small_header=true&amp;tabs=timeline&amp;width=330"
              style={{border: "none", visibility: "visible", width: "330px", height: "500px"}}
              class=""
              data-dashlane-frameid="1443"
            ></iframe>
          </span>
        </div> */}
      </div>
      {/* <div className="abhofverkaufhome">
        <div>
          <div>
            <div>
              <div>
                <h4>Aus Liebe zum Tier</h4>
                <h3>Unser Abhofverkauf</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <p>
                Unser Abhofverkauf ist nicht wie ein anderer. Wir achten nicht
                auf Profit, oder die Verkäufe. Sondern darauf das es den Tieren
                Gut Geht. Seit 2019 Arbeiten wir immer mehr an unseren Ställen
                so dass jedes Tier, Egal ob Schwein, Kuh, Huhn, Wachtel oder
                Hase. Genug Platz zum Leben haben. Wir haben alleine für unsere
                Schweine über 5 Boxen die alle Jeweils über 10qm Haben. Ebenfalls
                haben diese Boxen einen Großen auslauf der über 30qm - 40qm hat.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <br />
            <Link
              href="#"
              to="/AbHofVerkauf"
              class="ow-icon-placement-left ow-button-hover"
            >
              <span>Weiterlesen </span>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
