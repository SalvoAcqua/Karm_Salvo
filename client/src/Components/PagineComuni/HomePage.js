import React from "react";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'
import {Container,Row,Col,Button} from "react-bootstrap";

import moto from '../../Images/moto.png';
import monopattino from '../../Images/monopattino.jpeg';
import auto from '../../Images/auto.jpeg';
import bici from '../../Images/biciclette.jpeg';
import citta from '../../Images/palermo.jpeg';

function HomePage () {
    const user = useSelector((state)=>state.utenti.utente)
    const Ruolo = useSelector((state)=>state.utenti.utente.ruolo)
    switch(Ruolo){
        case "Autista":
            return (
                <div className="dist-div-footer corpo">
                    <Container>
                        <Row className="justifyCenter">
                            <Col>
                                <Button  className="button" variant="secondary" size="lg">
                                    GESTIONE CORSA
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
            break;
        case "Admin":
            return (
                <div className="corpo">
                    <Container>
                        <Row className="justifyCenter">
                            <Col>
                                <Button  className="button" variant="secondary" size="lg">
                                    GESTIONE CORSA
                                </Button>
                            </Col>
                            <Col>
                                <Button  className="button" variant="secondary" size="lg" href="/GestioneAmministrazione">
                                    GESTIONE AMMINISTRAZIONE
                                </Button>
                            </Col>
                        </Row>
                    </Container>   
                </div>
            )
            break;
        case "Addetto":
            return (
                <div className="dist-div-footer corpo">
                    <Container>
                        <Row className="justifyCenter">
                            <Col>
                                <Button  className="button" variant="secondary" size="lg">
                                    GESTIONE CORSA
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
            break;
        default:
            return (
                <div className="corpo">
                    <Carousel variant="dark" class="carosello">
                        <Carousel.Item data-interval="1000">
                            <img
                                className="d-block w-100"
                                src={citta}
                                alt="Mezzo"
                            />
                            <Carousel.Caption>
                                <h2>Noleggia il mezzo che fa per te per muoverti in città!</h2>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item data-interval="1000">
                            <img
                                className="d-block w-100"
                                src={auto}
                                alt="Auto"
                            />
                            <Carousel.Caption>
                                <h2>Noleggio Auto</h2>
                                <p>Qui trovi l'auto adatta alle tue esigenze!</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={bici}
                                alt="Bici"
                            />
                            <Carousel.Caption>
                                <h2>Noleggio Bici</h2>
                                <p>Scegli la bici adatta a te!</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={moto}
                                alt="Moto"
                            />
                            <Carousel.Caption>
                                <h2>Noleggio Moto</h2>
                                <p>La moto adatta ai tuoi confort la trovi qui!</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={monopattino}
                                alt="Monopattino"
                            />
                            <Carousel.Caption>
                                <h2>Noleggio Monopattino</h2>
                                <p>Attraversa velocemente la città, scegli il monopattino che preferisci</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <br/>
                    <Row className="justifyCenter">
                        <Col md="3">
                            <Button className="button" variant="secondary" size="lg" href="/GestioneCorsa"> 
                                Gestione Corsa
                            </Button> 
                        </Col>
                        <Col md="3">
                            <Button className="button" variant="secondary" size="lg" href="/NuovaPrenotazione"> 
                                Nuova Prenotazione
                            </Button>
                        </Col>
                    </Row>
                </div>
            )
    }
}

export default HomePage;