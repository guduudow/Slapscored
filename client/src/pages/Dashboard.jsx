import "../components/Dashboard.css";
import { Container, Col, Row, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="scoreboard my-5">
        <div className="boxscore"></div>
        <div className="boxscore"></div>
        <div className="boxscore"></div>
        <div className="boxscore"></div>
        <div className="boxscore"></div>
        <div className="boxscore"></div>
        <div className="boxscore"></div>
      </div>
      <div className="font-color">Home</div>
      <Container>
        <Row className="dashboard-content">
          <Col md={4} className="user-col">
            <div className="user">
              <div className="profile">
                <img
                  alt="generic man with glasses"
                  src="/src/assets/man.jpg"
                  width="100"
                  height="100"
                  className="man"
                />
              </div>
              <div className="usernames">
                <p className="profile-name">John Doe</p>
                <p className="nickname">jdoe</p>
              </div>
              <div className="acheivements">
                <h4 className="acheive-title">Badges</h4>
                <div className="badge-container">
                  <div className="badge one">
                    <div className="hundo">100!</div>
                  </div>
                  <div className="badge two">
                    <img
                      alt="a hockey mask"
                      src="/src/assets/hockey_mask.svg"
                      width="35"
                      height="35"
                      className="mask"
                    />
                  </div>
                  <div className="badge three">
                    <img
                      alt="a trophy"
                      src="/src/assets/trophy.svg"
                      width="35"
                      height="35"
                      className="trophy"
                    />
                  </div>
                  <div className="badge four">
                    <img
                      alt="a handshake"
                      src="/src/assets/handshake.svg"
                      width="35"
                      height="35"
                      className="handshake"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <Row>
              <Col xs={12} className="team-section my-0 py-5">
                <h3 className="subtitles">Team</h3>
                <div className="team-view">
                  <div>
                    <div className="plus-box">
                      <img
                        alt="a plus sign"
                        src="/src/assets/plus.svg"
                        width="50"
                        height="50"
                        className="plus-sign"
                      />
                    </div>
                    <div className="text-below">
                      <h5 className="text-generic">Add a roster</h5>
                      <p>There is no roster to display.</p>
                      <Link className="roster-link" to="/roster">
                        <a className="tolink">Go to Rosters.</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <h3 className="subtitles">League</h3>
                <div className="league-view">
                  <div className="standings">
                    <table className="standings">
                      <thead>
                        <tr>
                          <th>Position</th>
                          <th>Team Name</th>
                          <th>Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>franky</td>
                          <td>30</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>n00bslay3r</td>
                          <td>25</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>leafguy</td>
                          <td>20</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>xXxDESTROYAHXxx</td>
                          <td>18</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>valkilmerstan</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>lowtiergod</td>
                          <td>12</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>EFFBOSTON</td>
                          <td>10</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>george_2312</td>
                          <td>5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="trends">
                    <div className="trends-standings"></div>
                    <div className="trends-ranks"></div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row>
          <div className="info-box box">
            <div className="spheres">
              <img
                alt="settings icon"
                src="/src/assets/help.svg"
                width="90"
                height="90"
                className="settings"
              />
            </div>
            <div className="sayings">Help</div>
          </div>
          <div className="info-box box">
            <div className="spheres">
              <img
                alt="settings icon"
                src="/src/assets/info.svg"
                width="90"
                height="90"
                className="settings"
              />
            </div>
            <div className="sayings">User Info</div>
          </div>
          <div className="info-box box-c">
            <div className="spheres">
              <img
                alt="settings icon"
                src="/src/assets/gear.svg"
                width="90"
                height="90"
                className="settings"
              />
            </div>
            <div className="sayings">Settings</div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
