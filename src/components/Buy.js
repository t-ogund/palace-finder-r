import React from "react";
import Navigation from "./Navigation";
import { Row, Col, Container, Button,
     Input, InputGroup, InputGroupAddon } from "reactstrap";
import PropertyCard from "./PropertyCard";
import Map from "./Map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class Buy extends React.Component {
    constructor(props) {
        super();

    this.state = {
        property: "",
        // saleAddress: "",
        saleBeds: "",
        saleBaths: "",
        saleSqft: "",
        salePhoto: "",
        inputValue: "",
        saleQuery: ""
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    }

    handleClick(event) {
        // console.log("Submitted: ", this.state.inputValue)
        let saleSearchVal = this.state.inputValue;
        console.log(saleSearchVal)
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            inputValue: event.target.value
        })

    }

    componentDidMount() {
        fetch("https://realtor.p.rapidapi.com/properties/list-for-sale?state_code=NY&limit=10&city=New%20York%20City&offset=0&sort=relevance", {
	        "method": "GET",
	        "headers": {
		    "x-rapidapi-key": "06b0ccfc3dmshd632c1509f6ef19p137354jsn01f64c6e8911",
		    "x-rapidapi-host": "realtor.p.rapidapi.com"
	    }
    })
    .then(response => response.json())
    .then(data => {
        this.setState({
            salePrice: data.listings[0].price,
            // saleAddress: 
            saleBeds: data.listings[0].beds,
            saleBaths: data.listings[0].baths,
            saleSqft: data.listings[0].sqft,
            salePhoto: data.listings[0].photo

        })
    })
    .catch(err => {
        console.error(err);
    });
        }
        
    render() {
        
        // const newListings = listings.map(listing => {
        //     console.log(listing.price)
        // })
        // console.log(typeof propertyListings)
        console.log(this.state.salePrice)
        return (
            <React.Fragment>
                <Navigation />
                <Container fluid>
                    <Row className="buy-input-buttons pt-4 fixed-top bg-white">
                        <Col xl={2} lg={4} md={6}>
                            <InputGroup className="px-3">
                            {/* name={} value={} */}
                                <Input  onChange={this.handleChange} className="buy-input" />
                                <InputGroupAddon onClick={this.handleClick} className="buy-add-on" addonType="append"><Button className="bg-white text-primary"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Button></InputGroupAddon>
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
                                    {this.state.property}
                                </Col>
                            </Row>
                            {/* HOUSE DISPLAY AREA */}
                            <Row>
                                <Col className="result-subsection d-flex justify-content-between">
                                    <div className="number-results">
                                        <p>Number results </p>
                                    </div>
                                    <div className="result-filter">
                                        <p>Sort By: Dropdown goes here</p>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="" lg={12}>
                                    <Row className="bg-danger">
                                        <Col className="bg-success" xl={6} lg={12} sm={6}>
                                            <PropertyCard cost={this.state.salePrice}
                                             beds={this.state.saleBeds}
                                             baths={this.state.saleBaths}
                                             sqft={this.state.sqft} />
                                        </Col>
                                        <Col className="bg-info" xl={6} lg={12} sm={6}>
                                            <PropertyCard cost={this.state.salePrice}
                                             beds={this.state.saleBeds}
                                             baths={this.state.saleBaths}
                                             sqft={this.state.sqft} />

                                        </Col>
                                    </Row>
                                    <Row className="bg-warning">
                                        <Col className="bg-success" xl={6} lg={12} sm={6}>
                                            <PropertyCard cost={this.state.salePrice}
                                             beds={this.state.saleBeds}
                                             baths={this.state.saleBaths}
                                             sqft={this.state.sqft} />
                                        </Col>
                                        <Col className="bg-info" xl={6} lg={12} sm={6}>
                                            <PropertyCard cost={this.state.salePrice}
                                             beds={this.state.saleBeds}
                                             baths={this.state.saleBaths}
                                             sqft={this.state.sqft} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            {/* <h3>Hello</h3> */}
                            {/* <PropertyCard />
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