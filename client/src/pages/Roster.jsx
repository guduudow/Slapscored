import React, { useState, useEffect } from "react";
import "../components/Roster.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Roster() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [roster, setRoster] = useState({
    forwards: [],
    defensemen: [],
    goalies: [],
  });

  const teams = [
    { id: 1, name: "leafs", logo: "/src/assets/leafs.svg" },
    { id: 2, name: "habs", logo: "/src/assets/habs.svg" },
    { id: 3, name: "redwings", logo: "/src/assets/redwings.svg" },
    { id: 4, name: "bruins", logo: "/src/assets/bruins.svg" },
    { id: 5, name: "rangers", logo: "/src/assets/rangers.svg" },
    { id: 6, name: "blackhawks", logo: "/src/assets/blackhawks.svg" },
  ];

  useEffect(() => {
    if (!selectedTeam) return;

    const getRoster = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3500/api/${selectedTeam.name}`
        );
        console.log("API Response for", selectedTeam.name, ":", response.data);
        const { forwards, defensemen, goalies } = response.data.roster;

        // Convert objects to arrays
        setRoster({
          forwards: Object.values(forwards),
          defensemen: Object.values(defensemen),
          goalies: Object.values(goalies),
        });
      } catch (error) {
        console.error("Problem getting roster..", error);
      } finally {
        setIsLoading(false);
      }
    };

    getRoster();
  }, [selectedTeam]);

  const playerCard = (player) => {
    return (
      <Col md="6" key={player.id}>
        <Card
          style={{
            marginBottom: "10px",
            border: "2px solid #52d3d8",
            width: "250px",
          }}
        >
          <Card.Img
            variant="top"
            src={player.headshot}
            style={{ backgroundColor: "#fff" }}
          />
          <Card.Body>
            <Card.Title className="name-styling">
              {player.firstName.default} {player.lastName.default}
            </Card.Title>
            <Card.Text>
              # {player.sweaterNumber} | {player.positionCode}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container>
      <Link classname="roster-link" to="/dashboard">
        <p className="to-link pt-5">Back to Dashboard.</p>
      </Link>
      <Row className="pt-5">
        <Col md="4">
          {teams.map((team) => (
            <Button
              key={team.id}
              className="logos"
              onClick={() => setSelectedTeam(team)}
              style={{
                display: "block",
                width: "auto",
                marginBottom: "10px",
                textAlign: "left",
              }}
            >
              <img
                src={team.logo}
                alt="team logo"
                className="brand"
                style={{ width: "100px", marginRight: "10px" }}
              />
            </Button>
          ))}
        </Col>
        <Col md="8">
          {selectedTeam && (
            <>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <h4 className="subtitle">Forwards</h4>
                  <Row>
                    {roster.forwards.length > 0 ? (
                      roster.forwards.map((player) => playerCard(player))
                    ) : (
                      <Col>
                        <p>No forwards available.</p>
                      </Col>
                    )}
                  </Row>
                  <h4 className="subtitle">Defensemen</h4>
                  <Row>
                    {roster.defensemen.length > 0 ? (
                      roster.defensemen.map((player) => playerCard(player))
                    ) : (
                      <Col>
                        <p>No defensemen available.</p>
                      </Col>
                    )}
                  </Row>
                  <h4 className="subtitle">Goalies</h4>
                  <Row>
                    {roster.goalies.length > 0 ? (
                      roster.goalies.map((player) => playerCard(player))
                    ) : (
                      <Col>
                        <p>No goalies available.</p>
                      </Col>
                    )}
                  </Row>
                </>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Roster;
