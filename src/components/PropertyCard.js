import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col, Button
  } from 'reactstrap';
import tester from "../assets/tester-house.jpg";
import comingSoon from "../assets/coming-soon.jpg";
// import Buy from "./Buy";

class PropertyCard extends React.Component {
    constructor() {
        super();

        // this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                {/* <Row> */}
                    {/* <Col lg={6}> */}
                        <Card className="display-card">
                            <CardImg className="img-fluid" top max-width="12rem" src={this.props.photo} alt="Test Image" />
                            <CardBody className="p-2 card-body">
                                <div className="card-cost-and-details d-flex justify-content-between">
                                    <div className="card-cost-container">
                                        <CardTitle tag="h4" className="card-cost">{this.props.cost}</CardTitle>
                                    </div>
                                    <div className="card-details-container d-flex">
                                        <div className="card-beds-container">
                                            <CardText className="card-beds">{this.props.beds}bds</CardText>
                                        </div>
                                        <div class="card-bath-container">
                                            <CardText className="card-baths">{this.props.baths}ba</CardText>
                                        </div>
                                        <div class="sqft-container">
                                            <CardText className="sqft">{this.props.sqft}sqft</CardText>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-subtitle-container">
                                        <CardSubtitle tag="h6">{this.props.address}</CardSubtitle>
                                    </div>
                                    <div className="card-description-container">
                                        <CardText><span><div className="circle-color"></div></span>House for rent</CardText>
                                </div>
                            </CardBody>
                        </Card>
                    {/* </Col> */}
                {/* // </Row> */}
            </React.Fragment>
        )
    }
}
    
export default PropertyCard;