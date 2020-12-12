import React from "react";
import {Container, Col, Row, Input,
InputGroup, InputGroupAddon, Button,
} from "reactstrap";
import house from "../assets/house.jpg";
import AutoComplete from "./AutoComplete";

class Splash extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    handleClick() {
        fetch(`https://realtor.p.rapidapi.com/locations/auto-complete?input=${this.state.input}`, {
	    "method": "GET",
	    "headers": {
		// "x-rapidapi-key": "2c3f21e2e1msh8c90eba7ec51cfep1c68bdjsnaa2da559da5f",
		"x-rapidapi-host": "realtor.p.rapidapi.com"
	    }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
        console.error(err);
    });
        }

    render() {

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
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
}


export default Splash;