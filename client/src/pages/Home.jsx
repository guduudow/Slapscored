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
          <div className="infoBox box-A">Item #1</div>
          <div className="infoBox box-B">Item #2</div>
          <div className="infoBox box-C">Item #3</div>
        </Row>
      </Container>
    </>
  );
}

export default Home;
