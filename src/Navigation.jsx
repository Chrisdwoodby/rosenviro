import { Container, Row, Col } from "react-bootstrap";
import logoDark from '../media/logo-dark.webp';
import phone from '../media/phone.webp';

export default function Navigation() {
    return (
        <div className="header-bar">
            <Container>
                <Row>
                    <Col className="logo-container" md="4">
                      <img className="company-logo" src={logoDark}/>
                    </Col>
                    <Col md="6" className="nav-links-col">
                      <a className="nav-link">Book</a>
                      <a className="nav-link">Employment</a>
                      <a className="nav-link">About</a>
                      <a className="nav-link">Contact</a>
                    </Col>
                    <Col className="phone-number" md="2">
                      <img className="phone-icon" src={phone}/>
                      <strong><a>(555) 555-555</a></strong>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}