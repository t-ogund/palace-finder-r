import React from "react";
import Navigation from "./Navigation";
import { Row, Col, Container, Button,
     Input, InputGroup, InputGroupAddon } from "reactstrap";
import PropertyCard from "./PropertyCard";
import Map from "./Map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import comingSoon from "../assets/coming-soon.jpg";
import AutoComplete from "./AutoComplete";



class Buy extends React.Component {
    constructor(props) {
        super();

        this.state = {
            selectedBuyData: props
        }
        console.log("BUY PROPS: ", props)
        console.log("THIS.STATE.SELECTEDBUYDATA: ", this.state.selectedBuyData)
    }
        
    render() { 

        // const array = this.state.selectedBuyData.buyData.data.results;
        // console.log("ARRAYPROPS: ", array)

        let array;
        // if (this.state.selectedBuyData.query === "") {
        //     array = null
        // } else {
        //     array = this.state.selectedBuyData.buyData.data.results;
        // } 
        // const rows = array.reduce(function(rows, key, index) {
        //     return (index % 2 == 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows
        // }, []);
        console.log("TESTING RENDER: ", this.state.selectedBuyData)

        return (
            <React.Fragment>
                {/* <Navigation /> */}
                <Container fluid>
                    <Row className="buy-input-buttons pt-4 fixed-top bg-white">
                        <Col xl={2} lg={4} md={6}>
                            <InputGroup className="px-3">
                            {/* name={} value={} */}
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
                                {/* {rows.map(row => (
                                    
                                    <Row>
                                        { row.map(col => (
                                        <Col xl={6} lg={12} md={6}>
                                            {<PropertyCard 
                                            key={col.property_id}
                                            cost={col.list_price} 
                                            beds={col.description.beds}
                                            baths={col.description.baths}
                                            sqft={col.description.sqft}
                                            address={col.permalink}
                                            photo={col.photo_count === 0 ? comingSoon : col.photos[0].href}
                                            />}
                                        </Col>
                                        ))}
                                    </Row>
                                    
                                ))} */}
                                    
                                </Col>
                            </Row>

                            {/* <Row className="bg-danger">
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
                                    </Row> */}

                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }
}

export default Buy