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
import { BrowserRouter, Route, Switch, Link, withRouter, Redirect } from "react-router-dom";
import Rent from "./Rent";
import Buy from "./Buy";
import PropertyMarker from "./SearchResults";



class SearchResults extends React.Component {
    constructor(props) {
        super();

        this.state = {
            selectedBuyData: props,
            selectedRentData: []
        }
        console.log("BUY PROPS: ", props)
        console.log("THIS.STATE.SELECTEDBUYDATA: ", this.state.selectedBuyData)
        let searchValue
        searchValue = `${this.state.selectedBuyData.city}, ${this.state.selectedBuyData.state}`
        // // let searchValue = props.match.params.searchValue
        // console.log(searchValue)
        // let searchValue = props.match
        console.log(searchValue)
        // console.log("Set up CITY: ", props.location.state.city)
        // console.log("Set up STATE: ", props.location.state.state)

        // const rentCity = props.location.state.city
        // const rentState = props.location.state.state

    }
    
    // if (this.state.selectedBuyData) {
    //     console.log("hello")
    // }
    componentDidMount() {
        if (this.props.location.state) {
            // console.log("hello")
            fetch(`https://realtor-com-real-estate.p.rapidapi.com/for-rent?city=${this.props.location.state.city}&state_code=${this.props.location.state.state}&limit=10&offset=0`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b83c4c021amsh3983c7298d63292p1155a9jsnaa9b026a3b17",
		"x-rapidapi-host": "realtor-com-real-estate.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => {
    this.setState({
        selectedRentData: data.data.results
    })
    console.log("THIS.STATE.SELECTEDRENTDATA: ", this.state.selectedRentData)
})
.catch(err => {
	console.error(err);
});
        } else {
            <SearchResults />
        }
        
    }
    
    render() {
        console.log("QUERY: ", this.state.selectedBuyData.query)
        if (this.state.selectedBuyData.query !== "") {
            const array = this.state.selectedBuyData.location.state.body.data.results
            
        const rows = array.reduce(function(rows, key, index) {
            return (index % 2 == 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows
        }, []);
      
        var propertiesForSale = rows.map(row => (
                                    
            <Row>
                { row.map(col => (
                <Col xl={6} lg={12} md={6}>
                    {<PropertyCard 
                    key={col.property_id}
                    type={col.description.type}
                    saleOrRent={col.flags.is_for_rent}
                    cost={col.list_price} 
                    beds={col.description.beds}
                    baths={col.description.baths}
                    sqft={col.description.sqft}
                    address={col.permalink}
                    lat={col.location.address.coordinate.lat}
                    lon={col.location.address.coordinate.lon}
                    photo={col.photo_count === 0 ? comingSoon : col.photos[0].href}
                    />}
                </Col>
                ))}
            </Row>
            
        ))
console.log(propertiesForSale)

        const rentalArray = this.state.selectedRentData

        const rentalRows = rentalArray.reduce(function(rentalRows, key, index) {
            return (index % 2 == 0 ? rentalRows.push([key]) : rentalRows[rentalRows.length-1].push(key)) && rentalRows
        }, []);

        var propertiesForRent = rentalRows.map(rentalRow => (
                                    
            <Row>
                { rentalRow.map(rentCol => (
                <Col xl={6} lg={12} md={6}>
                    {<PropertyCard 
                    key={rentCol.property_id}
                    type={rentCol.description.type}
                    saleOrRent={rentCol.flags.is_for_rent}
                    cost={rentCol.list_price} 
                    beds={rentCol.description.beds}
                    baths={rentCol.description.baths}
                    sqft={rentCol.description.sqft}
                    address={rentCol.permalink}
                    lat={rentCol.location.address.coordinate.lat}
                    lon={rentCol.location.address.coordinate.lon}
                    photo={rentCol.photo_count === 0 ? comingSoon : rentCol.photos[0].href}
                    />}
                </Col>
                ))}
            </Row>
            
        ))
        console.log("PROPERTIES FOR RENT: ", propertiesForRent)
        }

        if (this.props.location.pathname === "/buy") {
            console.log("YOU ARE ON THE BUY PAGE")
        } else if (this.props.location.pathname === "/rent") {
                console.log("YOU ARE ON THE RENT PAGE")
            }
        
        return (
            <React.Fragment>
            {this.state.selectedBuyData.query === "" ? console.log("empty") : console.log("not empty")}

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

                {/* {Object.keys(this.state.selectedBuyData).length === 0 ? console.log("ZEEEEEED!") : console.log("GOTCHA BITCH!")}
                {console.log("TYPE: ", typeof this.state.selectedBuyData)} */}
                

                <Container fluid className="buy-subsection">
                  
                    <Row className="map-row">
                        <Col className="h-100 py-2 d-flex align-items-center justify-content-center fixed-top" id="left" sm={12} md={6} lg={8} xl={6}>
                            <Map infoToDisplay={this.state.selectedBuyData} path={this.props.location.pathname} />
                        </Col>
                        <Col className="house-hidden-spacer d-none" sm={0} md={8} lg={2}></Col>
                        <Col className="buy-display py-2" id="house-area" sm={{ size: 12, offset: 0}} md={{ size: 12, offset: 0}} lg={{ size: 4, offset: 8}} xl={{ size: 6, offset: 6}}>
                            <Row>
                                <Col>
                                    {/* <h5>{`${this.state.selectedBuyData.location.state.city}, ${this.state.selectedBuyData.location.state.state}`} Real Estate & Homes for {this.props.match.path === "/buy" ? "Sale" : "Rent" }</h5> */}
                                    
                                </Col>
                            </Row>
                        
                            <Row>
                                <Col className="result-subsection d-flex justify-content-between">
                                    <div className="number-results">
                                        {/* <p>{this.state.selectedBuyData.location.state.body.data.count} Results</p> */}
                                    </div>
                                    <div className="result-filter">
                                        <p>Sort By: Dropdown goes here</p>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="" lg={12}>

                               {this.props.location.pathname === "/buy" ? propertiesForSale : propertiesForRent}
                                
                                    
                                </Col>
                            </Row>

            

                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
        
        
    }
}

export default withRouter(SearchResults);