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
           greeting: ""
        }
        this.handleKeyUp = this.handleKeyUp.bind(this);
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

handleKeyUp(e) {
    const value = e.target;
    this.setState({
        [greeting]: value
    })
    console.log(this.state.greeting)
}


handleClick(e) {
    console.log("Clicked")
}

autoSuggest(query) {
    
}

    render() {

    return (
        <React.Fragment>
            <Container fluid className="splash">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col className="col-md-4">
                        <h2>Placeholder</h2>
                        <InputGroup className="">
                            <Input onKeyUp={this.handleKeyUp} className="splash-input" name={greeting} value={this.state.greeting} />
                            <InputGroupAddon addonType="append">
                                <Button onClick={this.handleClick}>Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <ListGroup>
                            
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
}


export default Splash;