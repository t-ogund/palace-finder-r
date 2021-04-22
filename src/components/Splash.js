import React from "react";
import {Container, Col, Row, Input,
InputGroup, InputGroupAddon, Button,
ListGroup, ListGroupItem} from "reactstrap";
import house from "../assets/house.jpg";
import HomeBottom from "./HomeBottom";
import SearchResults from "./SearchResults";
import { Route, Switch, Link, withRouter, Redirect } from "react-router-dom";

class Splash extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           query: "",
           suggestionResults: [],
           buyData: [],
           selectedCity: null,
           selectedState: null,
           selectedObject: null,
           isLoading: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


handleChange(e) {
    this.setState({
        query: e.target.value
    })
  
    if (this.state.query.length >= 3) {
        fetch(`https://realtor-com-real-estate.p.rapidapi.com/location/suggest?input=${this.state.query}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b83c4c021amsh3983c7298d63292p1155a9jsnaa9b026a3b17",
		"x-rapidapi-host": "realtor-com-real-estate.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(body => {
    this.setState({
        suggestionResults: body.data
    })
})
.catch(err => {
	console.error(err);
})
    }

}


handleClick(e) {
    const parsedCityState = e.target.textContent.split(" ")
    
    const origCity = parsedCityState[0].slice(0, -1);
    const origState = parsedCityState[1]
    // let refCityState = `${city}, ${state}`;
    let city;
    let state
    if (parsedCityState.length > 2) {
        const compoundCity = `${parsedCityState[0]}%20${parsedCityState[1]}`.slice(0, -1)
        const compoundState = parsedCityState.pop()
        city = compoundCity
        state = compoundState
        console.log("COMPOUND CITY: ", city)
        console.log("COMPOUND STATE: ", state)
    } else {
        city = origCity
        state = origState
        console.log("ORIG CITY: ", city)
        console.log("ORIG STATE: ", state)
    }
    console.log(parsedCityState)
    
  



    
    

    fetch(`https://realtor-com-real-estate.p.rapidapi.com/for-sale?city=${city}&state_code=${state}&offset=0&limit=10`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b83c4c021amsh3983c7298d63292p1155a9jsnaa9b026a3b17",
		"x-rapidapi-host": "realtor-com-real-estate.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(body => {
    this.setState({
        buyData: body,
        selectedCity: city,
        selectedState: state,
        selectedObject: e.target.textContent
    })
})
.catch(err => {
	console.error(err);
});


}

    render() {
        const results = this.state.suggestionResults.slice(0, 5)
    return (
        <React.Fragment>
            <Switch>
            <Route path="/buy" render={({ match }) => (
                <SearchResults query={this.state.query} match={match} /> )} >
            </Route>
            <Route path="/rent" render={({ match }) => (
                <SearchResults query={this.state.query} match={match} /> )} >
            </Route>


            {this.state.buyData.length === 0 ? <Container fluid className="splash">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col className="col-md-4">
                        <InputGroup className="">
                            <Input placeholder='Enter city, i.e. "Minneapolis"' ref={ (input) => this.refCityState = input } onChange={this.handleChange} type="text" className="splash-input" />
                            <InputGroupAddon addonType="append">
                                {/* <Button onClick={this.handleClick}>Search</Button> */}
                            </InputGroupAddon>
                        </InputGroup>
                        <ListGroup>
                            {
                                results.map((result) => {
                                    return <ListGroupItem key={result.geo_id} className="suggestion-result" onClick={this.handleClick}>{result.city}, {result.state_code}</ListGroupItem>
                                })
                            }
                        </ListGroup>
                    </Col>
                </Row>
            <HomeBottom />

            </Container> : <Redirect to={{ 
                pathname: "/buy", 
                state: {
                    city: this.state.selectedCity, 
                        state: this.state.selectedState,
                        body: this.state.buyData
                }
                    }} />}


            </Switch>
        </React.Fragment>
    )
}
}


export default withRouter(Splash);