import React from "react";
import { Card, Button, CardTitle, CardText,
Container, Row, Col } from "reactstrap";

function HomeBottom() {
    return(
        <React.Fragment>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col sm="12" className="home-bottom-header mt-5 mb-5">
                        <h3>With numerous listings and updates, <br/>
                        you're always in the know.
                        </h3>
                    </Col>
                </Row>
                <Row className="">
                    <Col md="4" className="mt-2 mb-2">
                        <Card body className="tile">
                            <CardTitle tag="h5">Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    <Col md="4" className="mt-2 mb-2">
                        <Card body className="tile">
                            <CardTitle tag="h5">Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    <Col md="4" className="mt-2 mb-2">
                        <Card body className="tile">
                            <CardTitle tag="h5">Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default HomeBottom;