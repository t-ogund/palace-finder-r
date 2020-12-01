import React from "react";
import Navigation from "./Navigation";
import { Row, Col, Container, Button,
     Input, InputGroup, InputGroupAddon } from "reactstrap";
import PropertyCard from "./PropertyCard";
import Map from "./Map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


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
                    <Row className="buy-input-buttons pt-4 fixed-top bg-white">
                        <Col xl={2} lg={4} md={6}>
                            <InputGroup className="px-3">
                                <Input className="buy-input" />
                                <InputGroupAddon className="buy-add-on" addonType="append"><Button className="bg-white text-primary"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Button></InputGroupAddon>
                            </InputGroup>
                        </Col>
                        <Col xl={10} lg={8} md={6} className="px-3">
                            <Button outline color="primary" className="buy-filter-button">For Rent</Button>
                            <Button outline color="primary" className="buy-filter-button">Price</Button>
                            <Button outline color="primary" className="buy-filter-button" id="bed-bath">Bed & Bath</Button>
                            <Button outline color="primary" className="buy-filter-button" id="home-type">Home Type</Button>
                            <Button outline color="primary" className="buy-filter-button">More</Button>
                            <Button color="primary">Save Search</Button>
                        </Col>
                    </Row>
                </Container>

                {/* MAP SECTION */}

                <Container fluid className="buy-subsection">
                    {/* MAP ROW */}
                    <Row className="map-row">
                        <Col className="h-100 py-2 d-flex align-items-center justify-content-center fixed-top" id="left" sm={12} md={6} lg={8} xl={6}>
                            <Map />
                        </Col>
                        <Col className="house-hidden-spacer d-none" sm={0} md={8} lg={2}></Col>
                        <Col className="buy-display py-2" id="house-area" sm={{ size: 12, offset: 0}} md={{ size: 12, offset: 0}} lg={{ size: 4, offset: 8}} xl={{ size: 6, offset: 6}}>
                            <Row>
                                <Col>
                                    <h5>Query Real Estate & Homes for Sale</h5>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="result-subsection d-flex">
                                    <div className="number-results">
                                        <p>Number results </p>
                                    </div>
                                    <div className="result-filter">
                                        
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="" lg={12}>
                                    <PropertyCard />
                                    <PropertyCard />
                                </Col>
                            </Row>
                            {/* <h3>Hello</h3> */}
                            {/* <PropertyCard />
                            <PropertyCard />
                            <PropertyCard />

                            <PropertyCard /> */}

                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }
}

export default Buy