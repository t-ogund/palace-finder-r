import React from "react";
import {Container, Col, Row, Input,
InputGroup, InputGroupAddon, Button,
} from "reactstrap";
import house from "../assets/house.jpg";

function Splash() {
    return (
        <React.Fragment>
            <Container fluid className="splash">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col className="col-md-4">
                        <InputGroup className="">
                            <Input className="sticky-top splash-input" />
                            <InputGroupAddon addonType="append">
                                <Button>Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Splash;