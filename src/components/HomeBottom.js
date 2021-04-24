import React from "react";
import { Card, Button, CardText,
Container, Row, Col
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faSign } from '@fortawesome/free-solid-svg-icons'
import { faTruckMoving } from '@fortawesome/free-solid-svg-icons'



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
                        <Card body>

                            <FontAwesomeIcon icon={faDollarSign} className="home-card-icons text-primary"  />
                            <CardText className="home-card-text">With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button outline color="primary">Search Homes</Button>
                        </Card>
                    </Col>
                    <Col md="4" className="mt-2 mb-2">
                        <Card body>

                            <FontAwesomeIcon icon={faSign} className="home-card-icons text-primary" />
                            <CardText className="home-card-text">With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button outline color="primary">See Your Options</Button>
                        </Card>
                    </Col>
                    <Col md="4" className="mt-2 mb-2">
                        <Card body>

                            <FontAwesomeIcon icon={faTruckMoving} className="home-card-icons text-primary" />
                            <CardText className="home-card-text">With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button outline color="primary">Find Rentals</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default HomeBottom;