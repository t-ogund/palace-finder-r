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
            properties: []
            // property: "",
            // saleAddress: "",
            // saleBeds: "",
            // saleBaths: "",
            // saleSqft: "",
            // salePhoto: "",
            // inputValue: "",
            // saleQuery: ""
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
        fetch(`https://realtor.p.rapidapi.com/properties/list-for-sale?state_code=${this.props.state}&limit=11&city=${this.props.city}&offset=0&sort=relevance`, {
	        "method": "GET",
	        "headers": {
		    "x-rapidapi-key": "f01a0fcc14msh7778b402f6433d7p1eaeb7jsnd38c6ea1da3d",
		    "x-rapidapi-host": "realtor.p.rapidapi.com"
	    }
    })
    .then(response => response.json())
    .then(data => { 
        // const newArray = data.listings.map(arrayItem => {
        //    return <PropertyCard key={arrayItem.property_Id} cost={arrayItem.price} beds={arrayItem.beds} baths={arrayItem.baths} sqft={arrayItem.sqft} />
        
        // })
        // console.log(newArray)
       
            this.setState({
                properties: data.listings
                // properties: data.listings
                // properties
                // salePrice: data.listings.price,
                // saleAddress: 
                // saleBeds: data.listings.beds,
                // saleBaths: data.listings.baths,
                // saleSqft: data.listings.sqft,
                // salePhoto: data.listings.photo

            })
console.log(this.state.properties);
console.log("AutoComplete: ", <AutoComplete cost={AutoComplete.prototype.handleSuggestion}
city={this.props.city} state={this.props.state_code} />)
console.log("City: ", this.props)
console.log("State: ", this.props)
console.log("State Code: ", this.props)
    })
    .catch(err => {
        console.error(err);
    });
        }
        
    render() { 

        const array = this.state.properties;
        const rows = array.reduce(function(rows, key, index) {
            return (index % 2 == 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows
        }, []);

        console.log(rows)
        // console.log(this.state.properties[4].photo_count)
        return (
            <React.Fragment>
                {/* <Navigation /> */}
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
                                {rows.map(row => (
                                    
                                    <Row>
                                        { row.map(col => (
                                        <Col xl={6} lg={12} md={6}>
                                            {<PropertyCard 
                                            key={col.property_id}
                                            cost={col.price} 
                                            beds={col.beds}
                                            baths={col.baths}
                                            sqft={col.sqft}
                                            address={col.address}
                                            photo={col.photo_count === 0 ? comingSoon : col.photo}
                                            />}
                                        </Col>
                                        ))}
                                    </Row>
                                    
                                ))}
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
                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }
}

export default Buy