import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import data from "./data.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col sm={12}>
            <Accordion>
              {data.map((movie) => {
                return (
                  <Accordion.Item eventKey={movie.id}>
                    <Accordion.Header>{movie.name}</Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Col sm={8}>
                          <h3>{movie.name}</h3>
                          <p>{movie.synopsis}</p>
                        </Col>
                        <Col sm={4}>
                          <h6>{movie.cast}</h6>
                          <p>Genre: {movie.genre}</p>
                          <p>Rating: {movie.rating}</p>
                          <p>Release {movie.releaseDate}</p>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
