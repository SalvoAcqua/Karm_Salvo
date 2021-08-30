import {React} from "react";
import {Container,Row,Col, Button} from "react-bootstrap";
import Table from 'react-bootstrap/Table'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getListaDipendenti} from '../../Actions/admin'
import DeleteIcon from '@material-ui/icons/Delete';

function SchermataVisualizzaDipendenti () {
    const listaDipendenti = useSelector((state)=>state.AccountAdmin.listaDipendenti);
    const dispatch = useDispatch();

    useEffect( ()=>{
        dispatch(getListaDipendenti());
    },[])
    
    return(
        <div>
            <Container style={{marginTop:"20px"}}>
                <Row  style={{marginTop:"20px"}}>
                    <Col style={{display:"flex", justifyContent:"end"}}>
                        <Button href="/InserisciDipendente">
                            Inserisci dipendente
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col> 
                        <Table striped bordered hover size="sm" responsive>
                        <thead>
                                <tr>
                                <th>Ruolo</th>
                                <th>Nome</th>
                                <th>Cognome</th>
                                <th>Sesso</th>
                                <th>Data di Nascita</th>
                                <th>Provincia di Nascita</th>
                                <th>Luogo di Nascita</th>
                                <th>Codice Fiscale</th>
                                <th>Numero Patente</th>
                                <th>Parcheggio Associato</th>
                                <th>E-mail </th>
                                <th></th>
                                </tr>
                        </thead>
                        <tbody>
                            {listaDipendenti.length==0 ? 
                                <tr> 
                                    <td> Non ci sono Dipendenti registrati</td>
                                </tr> : listaDipendenti.map((dipendente) => (
                                <tr>
                                    <td>{dipendente.ruolo}</td>
                                    <td>{dipendente.nome}</td>
                                    <td>{dipendente.cognome}</td>
                                    <td>{dipendente.sesso}</td>
                                    <td>{dipendente.dataNascita.slice(0,10)}</td>
                                    <td>{dipendente.provinciaNascita}</td>
                                    <td>{dipendente.luogoNascita}</td>
                                    <td>{dipendente.CF.toUpperCase()}</td>
                                    <td>{dipendente.numeroPatente==undefined ? "//" : dipendente.numeroPatente}</td>
                                    <td>{dipendente.idParcheggio==undefined ? "//" : dipendente.idParcheggio}</td>
                                    <td>{dipendente.email}</td>
                                    <td>
                                        <Button onClick={()=>{}}>
                                            <DeleteIcon/>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SchermataVisualizzaDipendenti