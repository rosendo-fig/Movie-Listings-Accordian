import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import data from "./data.json";
import Thor from "./assets/thor.jpg";
import Moonfall from "./assets/moonfall.jpg";
import TopGun from "./assets/topgun.jpg";
import SpiderHead from "./assets/spiderhead.jpg";
import DayShift from "./assets/dayshift.jpg";
import "./App.css";

function App() {
  function MoviePoster(props) {
    switch (props) {
      case "Thor: Love and Thunder":
        return <img src={Thor} alt={props} width="100%" />;
      case "Moonfall":
        return <img src={Moonfall} alt={props} width="100%" />;
      case "Top Gun: Maverick":
        return <img src={TopGun} alt={props} width="100%" />;
      case "Spiderhead":
        return <img src={SpiderHead} alt={props} width="100%" />;
      case "Day Shift":
        return <img src={DayShift} alt={props} width="100%" />;
      default:
        return <p>Poster Note Found</p>;
    }
  }

  function ConvertDate(props) {
    const movieDate = new Date(JSON.parse(JSON.stringify(new Date(props))));
    return props ? movieDate.toLocaleDateString() : <p>Date Not Provided</p>;
  }

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
                    <Accordion.Body className="p-4">
                      <Row>
                        <Col md={9}>
                          <h3>{movie.name}</h3>
                          <p>{movie.synopsis}</p>
                        </Col>
                        <Col md={3}>
                          {MoviePoster(movie.name)}
                          <hgroup className="my-3">
                            <h4>Starring</h4>
                            <hr className="my-2"></hr>
                            {movie.cast.map((actor) => {
                              return <h6 className="mb-2">{actor}</h6>;
                            })}
                          </hgroup>
                          <p className="mb-1">
                            <strong>Genre:</strong> {movie.genre}
                          </p>
                          <p className="mb-1">
                            <strong>Rating:</strong> {movie.rating}
                          </p>
                          <p className="mb-1">
                            <strong>Release Date:</strong>{" "}
                            {ConvertDate(movie.releaseDate)}
                          </p>
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
