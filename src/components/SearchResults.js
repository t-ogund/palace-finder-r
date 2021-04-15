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
            selectedRentData: [],
            buyLinkData: [],
            rentLinkData: []
        }
        console.log("BUY PROPS: ", props)
        console.log("THIS.STATE.SELECTEDBUYDATA: ", this.state.selectedBuyData)
        let searchValue
        searchValue = `${this.state.selectedBuyData.city}, ${this.state.selectedBuyData.state}`
        
        console.log(searchValue)
  

    }

    handleChange(e) {
        let rentInputQuery = e.target.value
    }

    handleClick(e) {
        // console.log(e.target.parentElement.parentElement.children[0].value)
    }
    
 
    componentDidMount() {
        if (this.props.location.state) {
         
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
            // <SearchResults />
            fetch("https://realtor-com-real-estate.p.rapidapi.com/for-sale?city=Minneapolis&state_code=MN&offset=0&limit=10", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b83c4c021amsh3983c7298d63292p1155a9jsnaa9b026a3b17",
		"x-rapidapi-host": "realtor-com-real-estate.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => {
    this.setState({
        buyLinkData: data.data.results
    })
    console.log(data.data.results)
})
.catch(err => {
	console.error(err);
});
        }

        fetch("https://realtor-com-real-estate.p.rapidapi.com/for-rent?city=Minneapolis&state_code=MN&limit=10&offset=0", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "b83c4c021amsh3983c7298d63292p1155a9jsnaa9b026a3b17",
                "x-rapidapi-host": "realtor-com-real-estate.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                rentLinkData: data.data.results
            })
            console.log("RENT DATA, MY BOY: ", this.state.rentLinkData)
        })
        .catch(err => {
            console.error(err);
        }); 
        
    }
    
    render() {
        console.log(this.props)
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
                        beds={col.description.beds + " bds"}
                        baths={col.description.baths + " ba"}
                        sqft={col.description.sqft + " sqft"}
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
        } else if (this.props.location.pathname === "/buy") {
            console.log("THIS.STATE.BUYLINKDATA: ", this.state.buyLinkData);

            const buyLinkArray = this.state.buyLinkData;

            const buyLinkArrayRows = buyLinkArray.reduce(function(buyLinkArrayRows, key, index) {
                return (index % 2 == 0 ? buyLinkArrayRows.push([key]) : buyLinkArrayRows[buyLinkArrayRows.length-1].push(key)) && buyLinkArrayRows
            }, []);

            var buyLinkPropertiesForSale = buyLinkArrayRows.map(buyLinkArrayRow => (
                                    
                <Row>
                    { buyLinkArrayRow.map(buyLinkCol => (
                    <Col xl={6} lg={12} md={6}>
                        {<PropertyCard 
                        key={buyLinkCol.property_id}
                        type={buyLinkCol.description.type}
                        saleOrRent={buyLinkCol.flags.is_for_rent}
                        cost={buyLinkCol.list_price} 
                        beds={buyLinkCol.description.beds + " bds"}
                        baths={buyLinkCol.description.baths + " ba"}
                        sqft={buyLinkCol.description.sqft + " sqft"}
                        address={buyLinkCol.permalink}
                        lat={buyLinkCol.location.address.coordinate.lat}
                        lon={buyLinkCol.location.address.coordinate.lon}
                        photo={buyLinkCol.photo_count === 0 ? comingSoon : buyLinkCol.photos[0].href}
                        />}
                    </Col>
                    ))}
                </Row>
                
            ))
            console.log("BUY LINK PROPERTIES FOR SALE: ", buyLinkPropertiesForSale)
        } else if (this.props.location.pathname === "/rent") {

            const rentLinkArray = this.state.rentLinkData;

            const rentLinkArrayRows = rentLinkArray.reduce(function(rentLinkArrayRows, key, index) {
                return (index % 2 == 0 ? rentLinkArrayRows.push([key]) : rentLinkArrayRows[rentLinkArrayRows.length-1].push(key)) && rentLinkArrayRows
            }, []);

            var rentLinkPropertiesForRent = rentLinkArrayRows.map(rentLinkArrayRow => (
                                    
                <Row>
                    { rentLinkArrayRow.map(rentLinkCol => (
                    <Col xl={6} lg={12} md={6}>
                        {<PropertyCard 
                        key={rentLinkCol.property_id}
                        type={rentLinkCol.description.type}
                        saleOrRent={rentLinkCol.flags.is_for_rent}
                        cost={rentLinkCol.list_price} 
                        beds={rentLinkCol.description.beds}
                        baths={rentLinkCol.description.baths}
                        sqft={rentLinkCol.description.sqft}
                        address={rentLinkCol.permalink}
                        lat={rentLinkCol.location.address.coordinate.lat}
                        lon={rentLinkCol.location.address.coordinate.lon}
                        photo={rentLinkCol.photo_count === 0 ? comingSoon : rentLinkCol.photos[0].href}
                        />}
                    </Col>
                    ))}
                </Row>
                
            ))
            console.log("RENT LINK PROPERTIES FOR RENT: ", rentLinkPropertiesForRent)
                        }
        if (this.props.location.pathname === "/buy") {
            console.log("YOU ARE ON THE BUY PAGE")
        } else if (this.props.location.pathname === "/rent") {
                console.log("YOU ARE ON THE RENT PAGE");
            }
        
            let buyRender;
            let rentRender;

            if (this.state.selectedBuyData.query === "" && (this.props.location.pathname === "/buy" || this.props.location.pathname === "/rent")) {
                buyRender = buyLinkPropertiesForSale
                rentRender = rentLinkPropertiesForRent
            } else if (this.state.selectedBuyData.query !== "") {
                buyRender = propertiesForSale
                rentRender = propertiesForRent
            }

            console.log(buyRender)

        return (
            <React.Fragment>
            {this.state.selectedBuyData.query === "" ? console.log("empty") : console.log("not empty")}

                <Container fluid>
                    <Row className="buy-input-buttons pt-4 fixed-top bg-white">
                        <Col xl={2} lg={4} md={6}>
                            <InputGroup className="px-3">
                            
                                <Input onChange={this.handleChange} className="buy-input" />
                                <InputGroupAddon className="buy-add-on" addonType="append"><Button onClick={this.handleClick} className="bg-white text-primary">Search</Button></InputGroupAddon>
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

    
                

                <Container fluid className="buy-subsection">
                  
                    <Row className="map-row">
                        <Col className="h-100 py-2 d-flex align-items-center justify-content-center fixed-top" id="left" sm={12} md={6} lg={8} xl={6}>
                            <Map infoToDisplay={this.state.selectedBuyData} selectedRentData={this.state.selectedRentData} buyLinkData={this.state.buyLinkData} rentLinkData={this.state.rentLinkData} path={this.props.location.pathname} />
                        </Col>
                        <Col className="house-hidden-spacer d-none" sm={0} md={8} lg={2}></Col>
                        <Col className="buy-display py-2" id="house-area" sm={{ size: 12, offset: 0}} md={{ size: 12, offset: 0}} lg={{ size: 4, offset: 8}} xl={{ size: 6, offset: 6}}>
                            <Row>
                                <Col>
                                    <h5> Real Estate & Homes for {this.props.match.path === "/buy" ? "Sale" : "Rent" }</h5>
                                    
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

                               {/* {this.props.location.pathname === "/buy" ? propertiesForSale : propertiesForRent} */}
                                { this.props.location.pathname === "/buy" ? buyRender : rentRender }
                                    
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