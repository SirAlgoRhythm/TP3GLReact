import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Identification from "./component/identification";
import Navigation from "./component/navigation";
import PageDAcceuil from "./component/pageAcceuil";
import IdentiteEtudiant from "./component/identiteEtudiant";
import RenseignementPersonnels from "./component/renseignementPersonnels";
import Calcul from "./component/calcul";
import Montant from "./component/montant";
import RenseignementScolaire from "./component/renseignementScolaire";
import SituationEtudiant from "./component/situationEtudiant";
import RessourceFinanciere from "./component/ressourceFinanciere";
import Confirmation from "./component/confirmation";
// usetoken.js
import useToken from './useToken';





export default () => 
{
  const { token, setToken } = useToken();
  if(!token) {
    return < Identification setToken={setToken} />
  }

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<PageDAcceuil />} />
        <Route path="/renseignementPersonnels" element={<RenseignementPersonnels />} />
        <Route path="/calcul" element={<Calcul />} />
        <Route path="/montant" element={<Montant />} />
        <Route path="/identiteEtudiant" element={<IdentiteEtudiant />} />
        <Route path="/renseignementScolaire" element={<RenseignementScolaire/>} />
        <Route path="/situationEtudiant" element={<SituationEtudiant/>} />
        <Route path="/ressourceFinanciere" element={<RessourceFinanciere/>} />
        <Route path="/confirmation" element={<Confirmation/>} />
      </Routes>
    </Router>
  )
};
