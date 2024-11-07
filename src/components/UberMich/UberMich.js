import "./UberMich.css";
import React, { useState } from "react";
import LazyLoad from "react-lazyload";

function UberMich(props) {
  return (
    <div>
      <h1>ÜBER MICH</h1>
      <h2>Sabrina Valeskini</h2>
      <div className="reitlaufbahn">
        <LazyLoad>
          <img src="https://i.imgur.com/BJgiyEK.png"></img>
        </LazyLoad>
        <p>
          <strong>Sabrina's reiterliche Laufbahn</strong>
          <br />• erster Pferdekontakt 1987
          <br />• Ablegung der Reiterpassprüfung am 24. Mai 1997 mit Little Can
          <br />• Ablegung der Lizenzprüfung 30. Dezember 1997
          <br />• Unterrichtet seit 1996
          <br />• Übungsleiterprüfung am 06. Jänner 2002
          <br />• Teilnahme an zahlreichen Turnieren und Fortbildungen 1997 -
          2005
          <br />• Umstieg auf Klassische Reitkunst, Kurse bei Bent Braderup 2006
          - 2008
          <br />• komplette Reitpause, Training nach Alexander Nevzorov -
          Akademia Liberti 2008
          <br />• Entwicklung der eigenen Reitweise, Ausbildung von 5 Pferden
          verschiedenen Alters bis zur Hohen Schule innerhalb von 2 Jahren 2010
        </p>
      </div>
      <div className="pferdekontakt">
      <LazyLoad>
        <img src="https://i.imgur.com/AvNnCC2.png"></img>
        </LazyLoad>
        <p className="p1">
          Meinen ersten Pferdekontakt hatte ich im zarten Alter von 7 Jahren.
          Damals pflegte ich die Pferde des Nachbarn. Es sollte nicht lange
          dauern, bis ich erste Reitstunden nahm und dann endlich war es soweit,
          mit 14 Jahren bekam ich mein eigenes Pferd. Es folgten einige
          Prüfungen und Turnierstarts, jedoch hatte ich immer Probleme mit den
          Ausbildungsmethoden vieler Trainer und Dressurreiter. Mir war es
          unverständlich, warum Reiten eine Quälerei sein musste. Sollte man
          beim Training nicht Spaß und Freude haben? Ich bekam immer zu hören,
          es läge daran, dass mein Pferd keine gute Abstammung habe. „Die 5
          Minuten beim Turnierstart wirst du schon locker aushalten“, sagte man
          mir.
        </p>
        <p className="p2">
          Ich habe viel gesehen, viel selbst miterlebt, wechselte die Trainer,
          aber es änderte sich nichts – zu oft ging ich frustriert vom
          Reitplatz. Einer der größten Fehler in der Reiterszene ist es zu
          FRAGEN und zu DENKEN! Immer wieder zeigten mir die Pferde, dass das,
          was ich mache, der falsche Weg ist.
        </p>
        <p className="p3">
          Immer mehr wuchs in mir der Wunsch, es anders als die anderen zu
          machen und ich begann umzudenken. Das war im Jahr 2006. Ich befasste
          mich viel mit dem Thema Gebiss, Druck, Kraft und Versammlung. Aber
          auch die natürliche Pferdehaltung wurde immer mehr zum Thema. Ich
          stellte unsere komplette Haltung von Nacht-Box/Tag-Koppel auf
          Offenstall bzw. Offenstallhalle mit 24h Heufütterung und Barhufgeher
          um. Seither leben unsere Pferde in unserer Reithalle mit angrenzender
          Koppel, was hervorragend funktioniert. Vor dem Reiten werden die
          Pferde aus der Halle in die Koppel getrieben. Mit diesem Kompromiss
          können bei uns alle sehr gut leben, vor allem, weil seit dieser
          artgerechten Haltung Probleme wie Koliken, geschwollene Beine oder
          überdrehte, unausgelastete Pferde der Vergangenheit angehören.
        </p>
        <p className="p4">
          Ich fing an zu experimentieren, andere Reitstile auszuprobieren wie
          Klassische Dressur nach Bent Branderup, Horsemanship oder auch gar
          kein Reiten. Doch irgendwie war ich mit all den Reitstilen noch immer
          nicht so richtig glücklich. So fing ich 2009 an, meine eigene
          Reitweise zu entwickeln und folgte hauptsächlich einem Vorbild – der
          NATUR!
        </p>
      </div>
    </div>
  );
}

export default UberMich;
