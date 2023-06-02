import { Container, Row, Col } from "react-bootstrap";
import logoDark from '../media/logo-dark.webp';

export default function Navigation() {
    return (
        <div className="header-bar">
            <Container>
                <Row>
                    <Col md="4">
                      <img className="company-logo" src={logoDark}/>
                    </Col>
                    <Col md="6" className="nav-links-col">
                      <a className="nav-link">Book</a>
                      <a className="nav-link">Employment</a>
                      <a className="nav-link">About Us</a>
                      <a className="nav-link">Contact Us</a>
                    </Col>
                    <Col md="2">
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}