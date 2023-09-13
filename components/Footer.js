import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
    return (
        <div style={{ marginTop: "5px" }}>
            <Container>
                <Row>
                    <Col>
                        <p>Ako imate bilo kojiu pdf fajl posaljite ga na studentobican@gmail.com</p>
                    </Col>
                    <Col>
                        <p>Copyright &copy; 2023 Obican Student</p>
                    </Col>
                    <Col>
                        <p>Sva prava zadržana.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterComponent;