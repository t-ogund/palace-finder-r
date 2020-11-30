import React from "react";
import Navigation from "./Navigation";
import { Row, Col, Container, Button,
     Input, InputGroup, InputGroupAddon } from "reactstrap";


class Buy extends React.Component {
    constructor() {
        super();
    }

    // this.state = {}

    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Container fluid>
                    <Row className="buy-input-buttons">
                        <Col xl={2} lg={4} md={6}>
                            <InputGroup>
                                <Input className="buy-input" />
                                <InputGroupAddon className="buy-add-on" addonType="append"><Button>I'm a button</Button></InputGroupAddon>
                            </InputGroup>
                        </Col>
                        <Col xl={10} lg={8} md={6} className="">
                            <Button outline color="primary" className="buy-filter-button">For Rent</Button>
                            <Button outline color="primary" className="buy-filter-button">Price</Button>
                            <Button outline color="primary" className="buy-filter-button">Bed & Bath</Button>
                            <Button outline color="primary" className="buy-filter-button">Home Type</Button>
                            <Button outline color="primary" className="buy-filter-button">More</Button>
                            <Button color="primary">Save Search</Button>
                        </Col>
                    </Row>
                </Container>

                {/* MAP SECTION */}

                <Container fluid className="buy-subsection">
                    {/* MAP ROW */}
                    <Row className="map-row">
                        <Col className="h-100 bg-info" sm={12} md={6} lg={8} xl={6}>
                        
                        </Col>
                        <Col className="house-hidden-spacer" sm={0} md={8} lg={2}></Col>
                        <Col className="bg-warning ">
                        
                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }
}

export default Buy