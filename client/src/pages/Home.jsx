import "../components/Home.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <>
      <Container className="mx-5 py-5">
        <Row>
          <Col>
            <h1 className="tagline">The Ultimate Hockey Experience</h1>
          </Col>
          <Col>
            <img
              alt="silhouette of an ice hockey player"
              src="/src/assets/silhouette-hockey.svg"
              width="453"
              height="651"
              className="hockeyguy"
            />
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row className="justify-content-center">
          <div className="infoBox box-A">
            <div className="sphere">
              <img
                alt="standings in 1 2 and 3"
                src="/src/assets/compete.svg"
                width="100"
                height="100"
                className="compete"
              />
            </div>
            <div className="saying">Compete.</div>
          </div>
          <div className="infoBox box-B">
            <div className="sphere">
              <img
                alt="strategy board"
                src="/src/assets/strategy.svg"
                width="90"
                height="90"
                className="compete"
              />
            </div>
            <div className="saying">Strategize.</div>
          </div>
          <div className="infoBox box-C">
            <div className="sphere">
              <img
                alt="man celebrating"
                src="/src/assets/celebrate.svg"
                width="100"
                height="100"
                className="compete"
              />
            </div>
            <div className="saying">Celebrate.</div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Home;
