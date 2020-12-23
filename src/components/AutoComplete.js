import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return(
            // <ListGroup>
                <ListGroupItem tag="a" href="#" action>{this.props.city}, {this.props.state_code}</ListGroupItem>
            // </ListGroup>
        )
    }
}

export default AutoComplete;