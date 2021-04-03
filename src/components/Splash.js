import React from "react";
import {Container, Col, Row, Input,
InputGroup, InputGroupAddon, Button,
ListGroup, ListGroupItem} from "reactstrap";
import house from "../assets/house.jpg";
import AutoComplete from "./AutoComplete";
import Buy from "./Buy";
import Rent from "./Rent";
import HomeBottom from "./HomeBottom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Splash extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           query: "",
           suggestionResults: [],
           buyData: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        console.log("PROOOOOOOOPS: ", props)
    }

    

//     componentDidMount() {
//         fetch("https://realtor-com-real-estate.p.rapidapi.com/location/suggest?input=New", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "b83c4c021amsh3983c7298d63292p1155a9jsnaa9b026a3b17",
// 		"x-rapidapi-host": "realtor-com-real-estate.p.rapidapi.com"
// 	}
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => {
// 	console.error(err);
// });
//     }

handleChange(e) {
    console.log("E.TARGET.VALUE: ", e.target.value);
    this.setState({
        query: e.target.value
    })
    // console.log("THIS.STATE.QUERY: ", this.state.query)
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
    console.log("SUGGESTION RESULTS: ", this.state.suggestionResults)
})
.catch(err => {
	console.error(err);
})
    }

}


handleClick(e) {
    // console.log(e.target.textContent);
    console.log(e.target.textContent)
    const parsedCityState = e.target.textContent.split(" ")
    console.log(parsedCityState)
    const city = parsedCityState[0].slice(0, -1);
    const state = parsedCityState[1]
    console.log("CITY: ", city, "STATE: ", state)
    

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
        buyData: body
    })
    console.log("THIS.STATE.BUYDATA: ", this.state.buyData)
})
.catch(err => {
	console.error(err);
});

}

autoSuggest(query) {
    
}

    render() {
        const results = this.state.suggestionResults.slice(0, 5)
    return (
        <React.Fragment>
            <Switch>
            <Route path="/buy" render={({ match }) => (
          <Buy query={this.state.query} match={match} />
        )} ></Route>
            <Route path="/rent" render={({ match }) => (
          <Rent query={this.state.query} match={match} />
        )} ></Route>
            {this.state.buyData.length === 0? <Container fluid className="splash">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col className="col-md-4">
                        <h2>{this.state.query}</h2>
                        <InputGroup className="">
                            <Input onChange={this.handleChange} type="text" className="splash-input" />
                            <InputGroupAddon addonType="append">
                                <Button onClick={this.handleClick}>Search</Button>
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

            </Container> : <Buy buyData={this.state.buyData} />}
            </Switch>
        </React.Fragment>
    )
}
}


export default Splash;