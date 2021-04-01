import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import Buy from "./Buy";
import Testing from "./Testing";
import { Link } from "react-router-dom";

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isClicked: false,
            selectedLocation: ""
        }

        this.handleSuggestion = this.handleSuggestion.bind(this);

    }

    handleSuggestion(event) {
        const suggestedLocation = event.target.innerHTML
        let state = suggestedLocation.slice(suggestedLocation.length - 2);
        let city = suggestedLocation.slice(0, suggestedLocation.length - 4);
        console.log("Event: ", event);
        console.log("Event.Target: ", event.target);
        console.log(suggestedLocation.slice(suggestedLocation.length - 2))
        console.log("State: ", state);
        console.log("City: ", city);
        console.log("List Item: ", <ListGroupItem />)
        fetch(`https://realtor.p.rapidapi.com/properties/list-for-sale?city=${city}&offset=0&limit=10&state_code=${state}&sort=relevance`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f01a0fcc14msh7778b402f6433d7p1eaeb7jsnd38c6ea1da3d",
                "x-rapidapi-host": "realtor.p.rapidapi.com"
            }
                })
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        suggestedLocationResults: data.listings,
                        isClicked: true,
                        selectedCity: `${this.props.city}`,
                        selectedState: `${this.props.state_code}`,
                    })
                    // <Buy />
                    console.log(data)
                })
                .catch(err => {
                    console.error(err);
                });
                    }

                    // componentWillUnmount() {
                    //     <Buy />
                    // }
    render() {
        console.log("Selected City: ", this.state.selectedCity)
        console.log("Selected State: ", this.state.selectedState)
        console.log("Is Clicked? ", this.state.isClicked)

        // console.log(this.state.suggestedLocationResults) 
        // console.log(<Buy />)       
        // console.log(this.props.city, this.props.state_code)
        return(
            // <ListGroup>
                <Link to="/buy">
                    <ListGroupItem city={this.props.city} state={this.props.state_code} onClick={this.handleSuggestion} tag="a" 
                    // href="/buy" 
                    action>{this.props.city}, {this.props.state_code}
                    
                    </ListGroupItem>
                </Link>
            // </ListGroup>
        )
    }
}

export default AutoComplete;