import React from 'react'
import {Container,Row,Col,Button} from "react-bootstrap";
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'

function SchermataMioProfilo () {
    const user = useSelector((state)=>state.utenti.utente)
    
    switch(user.ruolo){
        case "Autista":
            return (
                <div className="dist-div-footer corpo">
                    <Container>
                        <Row>
                            <Col>
                                <br/>
                                <h3> GESTISCI IL TUO PROFILO</h3>
                            </Col>
                        </Row>
                        <Row>
                            <br/>
                            <div style={{backgroundColor:"deepskyblue", border:"dotted 1px"}}>
                                {user.ruolo} : {user.nome} {user.cognome} <br/>
                                Email : {user.email} <br/>
                                Numero Patente : {user.numeroPatente} <br/>
                            </div>
                        </Row>
                        <Row>
                            <Col>
                                <Button className="button" variant="secondary" href="/ModificaPassword"> Cambia Password </Button> 
                            </Col>
                            <Col>
                                <Button className="button" variant="secondary" href="/AggiornaPatenteAutista"> Inserisci o Aggiorna patente </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
            break;
        case "Admin":
            return (
                <div className="dist-div-footer corpo">
                    <Container>
                        <Row>
                            <Col>
                                <br/>
                                <h3> GESTISCI IL TUO PROFILO</h3>
                            </Col>
                        </Row>
                        <Row>
                            <br/>
                            <div style={{backgroundColor:"deepskyblue", border:"dotted 1px"}}>
                                {user.ruolo} : {user.nome} {user.cognome} <br/>
                            </div>
                        </Row>
                        <Row>
                            <Button className="button" variant="secondary" href="/ModificaPassword">Cambia Password  </Button>
                        </Row>
                    </Container>
                </div>
            )
            break;
        case "Addetto":
            return (
                <div className="corpo">
                    <Container>
                        <Row>
                            <Col>
                                <br/>
                                <h3> GESTISCI IL TUO PROFILO</h3>
                            </Col>
                        </Row>
                        <Row>
                            <br/>
                            <div style={{backgroundColor:"deepskyblue", border:"dotted 1px"}}>
                                {user.ruolo} : {user.nome} {user.cognome} <br/>
                                Email : {user.email} <br/>
                                Parcheggio : {user.idParcheggio==-1 ? "Nessun Parcheggio" : user.nomeParcheggio + ", " + user.indirizzoParcheggio + " " + user.nCivicoParcheggio} <br/>
                            </div>
                        </Row>
                        <Row>
                            <Col>
                                <Button className="button" variant="secondary" href="/ModificaPassword"> Cambia Password </Button> 
                            </Col>
                            <Col>
                                <Button className="button" variant="secondary" href="/ModificaParcheggioAddetto"> Modifica Parcheggio Associato </Button> 
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
            break;
        default:
            return (
                <div className="corpo">
                    <Container>
                        <Row>
                            <Col>
                                <br/>
                                <h3> GESTISCI IL TUO PROFILO</h3>
                            </Col>
                        </Row>
                            <div style={{backgroundColor:"deepskyblue", border:"dotted 1px"}}>
                                {user.ruolo} : {user.nome} {user.cognome} <br/>
                                Email : {user.email} <br/>
                                Numero Patente : {user.numeroPatente!=undefined ? user.numeroPatente : "Nessuna patente inserita"} <br/>
                            </div>
                        <Row>
                            <Col>
                                <Button className="button" variant="secondary" href="/ModificaPassword"> Cambia Password </Button> 
                            </Col>
                            <Col>
                                <Button className="button" variant="secondary" href="/MetodiDiPagamento"> I Miei Metodi di Pagamento  </Button>
                            </Col>
                            <Col>
                                <Button className="button" variant="secondary" href="/AggiornaPatenteCliente"> Inserisci o Aggiorna Patente </Button>
                            </Col>
                            <Col>
                                <Button className="button" variant="secondary" href="/AggiornaEmail"> Cambia Email </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
            break;
    }
}
export default SchermataMioProfilo;
