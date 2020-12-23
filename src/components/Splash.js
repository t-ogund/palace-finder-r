import React from "react";
import {Container, Col, Row, Input,
InputGroup, InputGroupAddon, Button,
ListGroup} from "reactstrap";
import house from "../assets/house.jpg";
import AutoComplete from "./AutoComplete";

class Splash extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            results: [],
            isLoading: false
        }

        this.handleChange = this.handleChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    // componentDidMount() {
    //     fetch(`https://realtor.p.rapidapi.com/locations/auto-complete?input=${this.state.input}`, {
	//         "method": "GET",
	//         "headers": {
	// 	        "x-rapidapi-key": "36968511dcmshb21aa4c530352c5p19974ejsn4f0841f94c6e",
	// 	        "x-rapidapi-host": "realtor.p.rapidapi.com"
	//         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         this.setState({
    //             // input: event.target.value,
    //             results: data.autocomplete
    //         })
            
    //         // console.log("Event: ", event)
    //         console.log("input: ", this.state.input)
    //     console.log(data)

    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
    // }
    
    handleChange(event) {
        this.setState({ input: event.target.value })
        fetch(`https://realtor.p.rapidapi.com/locations/auto-complete?input=${this.state.input}`, {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-key": "36968511dcmshb21aa4c530352c5p19974ejsn4f0841f94c6e",
		        "x-rapidapi-host": "realtor.p.rapidapi.com"
	        }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                // input: event.target.value,
                results: data.autocomplete,
                isLoading: true
            })
            
            console.log("Event: ", event)
            console.log("input: ", this.state.input)
        console.log(data)

        })
        .catch(err => {
            console.error(err);
        });

    }

//     handleClick(event) {
//         fetch(`https://realtor.p.rapidapi.com/locations/auto-complete?input=New&20York`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "36968511dcmshb21aa4c530352c5p19974ejsn4f0841f94c6e",
// 		"x-rapidapi-host": "realtor.p.rapidapi.com"
// 	}
// })
// .then(response => response.json())
// .then(data => {
//     this.setState({
//         input: event.target.value,
//         results: data.autocomplete
//     })
//     console.log("Event: ", event);
//     console.log("Query: ", this.state.input);
//     console.log("Results: ", this.state.results);
// })
// .catch(err => {
// 	console.error(err);
// });
    //     fetch(`https://realtor.p.rapidapi.com/properties/list-for-sale?city=${this.state.input}&offset=0&limit=10&state_code=NY&sort=relevance`, {
	//     "method": "GET",
	//     "headers": {
	// 	"x-rapidapi-key": "2c3f21e2e1msh8c90eba7ec51cfep1c68bdjsnaa2da559da5f",
	// 	"x-rapidapi-host": "realtor.p.rapidapi.com"
	//     }
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(err => {
    //     console.error(err);
    // });
        // }

    render() {
        let suggestions = this.state.results.map(suggestion => <AutoComplete></AutoComplete>)
        // console.log("Autocomplete suggestions: ", suggestions)

    return (
        <React.Fragment>
            <Container fluid className="splash">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col className="col-md-4">
                        <h2>{this.state.input}</h2>
                        <InputGroup className="">
                            <Input onChange={this.handleChange} className="splash-input" />
                            <InputGroupAddon addonType="append">
                                <Button onClick={this.handleClick}>Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <ListGroup>
                            {suggestions}

                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
}


export default Splash;