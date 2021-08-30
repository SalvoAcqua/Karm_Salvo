import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo.png"

import { Navbar,Container, Row, Col } from "react-bootstrap";

import CopyrightIcon from "@material-ui/icons/Copyright";

function Footer () {

    return (
      <div className="Footer">
        <Container fluid >
          <Row>
            <Col sm={4}>
              <img
                src={Logo}
                alt="KARM-Logo"
                width="160em"
                style={{ marginBottom: "2rem" }}
              />
            </Col>
            <Col sm={4}>
              <h6 style={{ color: "#010101", fontWeight: "bold" }}>Azienda</h6>
              <Link to="/ChiSiamo">
                <h6 style={{ color: "#010101" }}>Chi Siamo</h6>
              </Link>
              <Link to="/Mappa">
                <h6 style={{ color: "#010101" }}>I nostri parcheggi</h6>
              </Link>
              <a href="https://www.instagram.com">
                <h6 style={{ color: "#010101" }}>Instagram</h6>
              </a>
            </Col>
            <Col sm={4}>
              <h6 style={{ color: "#010101", fontWeight: "bold" }}>
                Contattaci
              </h6>
              <h6 style={{ color: "#010101" }}>Salvatore +39 3803719481</h6>
              <h6 style={{ color: "#010101" }}>Maria +39 3803719481</h6>
              <h6 style={{ color: "#010101" }}>Giuseppe +39 3803719481</h6>
            </Col>
          </Row>
          <Row>
            <Col className="Copyright" sm={12} style={{ textAlign: "center" }}>
              <CopyrightIcon style={{ fontSize: 20 }} />{" "}
              <h6 style={{ color: "#010101", fontWeight: "bold" }}>
                KARM 2021
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      
    );
}

export default Footer;