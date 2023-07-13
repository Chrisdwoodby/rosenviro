import { Col, Container, Row } from "react-bootstrap";
import logoLight from '../media/logo-light.webp';

export default function Footer(props) {

    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                    <img className="company-logo" src={logoLight}/>
                    </Col>
                    <Col className="footer-menu">
                      <strong><span>Footer Menu</span></strong>
                      <a>Menu item</a>
                      <a>Menu item</a>
                      <a>Menu item</a>
                    </Col>
                    <Col className="footer-menu">
                      <strong><span>Resources</span></strong>
                      <a>Accounts Payable</a>
                      <a>item</a>
                      <a>item</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}