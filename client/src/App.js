import React, {useEffect, Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute, ProtectedRouteAdmin, ProtectedRouteCliente, ProtectedRouteAutista, ProtectedRouteAddetto} from './ProtectedRoute';
import {useSelector, useDispatch} from 'react-redux';
import {registra} from './Api/utenti'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from '@material-ui/core';

import SchermataIniziale from './Components/PagineIniziali/SchermataIniziale.js';
import RegistratiForm from './Components/PagineIniziali/RegistratiForm.js';
import SchermataAccesso from './Components/PagineIniziali/SchermataAccesso.js';
import Layout from "./Components/Layout/layout.js";
import HomePage from './Components/PagineComuni/HomePage';
import SchermataMioProfilo from './Components/PagineComuni/SchermataMioProfilo';
import AggiornaPatForm from './Components/PagineComuni/AggiornaPatForm';
import CambiaPassForm from './Components/PagineComuni/CambiaPassForm';
import CambiaEmailForm from './Components/PagineCliente/CambiaEmailForm';
import SchermataMetodiPag from './Components/PagineCliente/SchermataMetodiPag';
import NuovaPrenotazioneForm from './Components/PagineCliente/NuovaPrenotazioneForm';


//PagineAdmin
import GestioneAmministrazione from './Components/PagineAdmin/GestioneAmministrazione'
import SchermataVisualizzaClienti from './Components/PagineAdmin/SchermataVisualizzaClienti'
import SchermataVisualizzaDipendenti from './Components/PagineAdmin/SchermataVisualizzaDipendenti'
import SchermataVisualizzaVeicoli from './Components/PagineAdmin/SchermataVisualizzaVeicoli'
import SchermataVisualizzaParcheggi from './Components/PagineAdmin/SchermataVisualizzaParcheggi'
import InserisciVeicoloForm from './Components/PagineAdmin/InserisciVeicoloForm'
import ModificaTariffeForm from './Components/PagineAdmin/ModificaTariffeForm';
import InserisciDipendenteForm from './Components/PagineAdmin/InserisciDipendenteForm'

//PagineAddetto
import SchermataParcheggioAssociato from './Components/PagineAddetto/SchermataParcheggioAssociato'

const App = () => {

    return(
        <BrowserRouter>
             <Layout>
                <Switch>
                    <Route exact path="/" component={SchermataIniziale} />
                    <Route exact path="/Registrazione" component={RegistratiForm} />
                    <Route exact path="/SchermataAccesso" component={SchermataAccesso} />
                    <ProtectedRoute exact path="/HomePage" component={HomePage} />
                    <ProtectedRoute exact path="/SchermataMioProfilo" component={SchermataMioProfilo} />
                    <ProtectedRoute exact path="/ModificaPassword" component={CambiaPassForm} />
                    <ProtectedRouteCliente exact path="/AggiornaPatenteCliente" component={AggiornaPatForm}/>
                    <ProtectedRouteCliente exact path="/MetodiDiPagamento" component={SchermataMetodiPag} />
                    <ProtectedRouteCliente exact path="/NuovaPrenotazione" component={NuovaPrenotazioneForm} />
                    <ProtectedRouteCliente exact path="/AggiornaEmail" component={CambiaEmailForm} />
                    <ProtectedRouteAdmin exact path="/GestioneAmministrazione" component={GestioneAmministrazione}/>
                    <ProtectedRouteAdmin exact path="/VisualizzaClienti" component={SchermataVisualizzaClienti}/>
                    <ProtectedRouteAdmin exact path="/VisualizzaDipendenti" component={SchermataVisualizzaDipendenti}/>
                    <ProtectedRouteAdmin exact path="/VisualizzaVeicoli" component={SchermataVisualizzaVeicoli}/>
                    <ProtectedRouteAdmin exact path="/VisualizzaParcheggi" component={SchermataVisualizzaParcheggi}/>
                    <ProtectedRouteAdmin exact path="/InserisciVeicolo" component={InserisciVeicoloForm}/>
                    <ProtectedRouteAdmin exact path="/ModificaTariffe" component={ModificaTariffeForm}/>
                    <ProtectedRouteAdmin exact path="/InserisciDipendente" component={InserisciDipendenteForm}/>
                    <ProtectedRouteAddetto exact path="/ModificaParcheggioAddetto" component={SchermataParcheggioAssociato}/>
                    <ProtectedRouteAutista exact path="/AggiornaPatenteAutista" component={AggiornaPatForm}/>

                    <Route path="*" component={()=> "404 NOT FOUND"}/>
                </Switch>
            </Layout>  
        </BrowserRouter>   
    );
}

export default App;