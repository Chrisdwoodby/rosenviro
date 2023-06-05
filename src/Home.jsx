import { Container, Row, Col } from "react-bootstrap";


export default function Home() {
    return (
        <div>
          <div className="home-banner-container">
            <Col className="home-banner-left">
          
            </Col>
            <Col className="home-banner-right">
              <div className="cta-box box-1">
                <h2>upper/long row</h2>
                <span>lorem ipsum lorem ipsum lorem ipsum</span>
                <a className="banner-cta-btn">Get A Quote</a>
              </div>
              <div className="cta-box-cols">
                <Col className="cta-box box-2">
                  <h3>lower col 1</h3>
                  <span>lorem ipsum lorem ipsum lorem ipsum</span>
                  <a className="banner-cta-btn">Learn More</a>
                </Col>
                <Col className="cta-box box-3">
                  <h3>lower col 1</h3>
                  <span>lorem ipsum lorem ipsum lorem ipsum</span>
                  <a className="banner-cta-btn">Learn More</a>
                </Col>
              </div>
            </Col>
          </div>
          <Container>
              <Row className="heagon-row">
                  <Col className="hexagon-1">
                    <div className="hexagon slide-in-hexagon1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                        <span>Box Title 4</span>
                    </div>
                  </Col>
                  <Col className="hexagon-2">
                    <div className="hexagon slide-in-hexagon1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                        <span>Box Title 4</span>
                    </div>
                  </Col>
                  <Col className="hexagon-3">
                    <div className="hexagon slide-in-hexagon1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                        <span>Box Title 4</span>
                    </div>
                  </Col>
                  <Col className="hexagon-4">
                    <div className="hexagon slide-in-hexagon1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                      <span>Box Title 4</span>
                    </div>
                  </Col>
              </Row>
          </Container>
        </div>
    )
}