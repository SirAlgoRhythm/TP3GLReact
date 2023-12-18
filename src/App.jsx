import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Inscription } from "./component/inscription";
import { Identification } from "./component/identification";
import { Navigation } from "./component/navigation";
import { PageDAcceuil } from "./component/pageAcceuil";
import { IndentiteEtudiant } from "./component/identiteEtudiant";
import { RenseignementScolaire } from "./component/renseignementScolaire";
import { SituationEtudiant } from "./component/situationEtudiant";
import { RessourceFinanciere } from "./component/ressourceFinanciere";
import { Confirmation } from "./component/confirmation";
import { RenseignementPersonnels } from "./component/renseignementPersonnels";
import { Calcul } from "./component/calcul";
import { Montant } from "./component/montant";
// test git

export default () => (
  <>
    <PageDAcceuil />
    {/* <Identification /> */}
    {/* <Inscription /> */}

    {/* <IndentiteEtudiant /> */}
    {/* <RenseignementScolaire /> */}
    {/* <SituationEtudiant /> */}
    {/* <RessourceFinanciere /> */}
    {/* <Confirmation /> */}
    
    <Navigation />
    {/* <RenseignementPersonnels /> */}
    {/* <Calcul /> */}
    {/* <Montant /> */}
  </>
);
