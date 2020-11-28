import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import tester from "../assets/tester-house.jpg";

function PropertyCard(props) {
    return (
        <React.Fragment>
            <Card className="display-card">
                <CardImg top width="18rem" src={tester} alt="Test Image" />
                <CardBody className="p-2">
                    <div className="card-cost-and-details d-flex justify-content-between">
                        <div className="card-cost-container">
                            <CardTitle tag="h4" className="card-cost">{props.cost}</CardTitle>
                        </div>
                        <div className="card-details-container d-flex">
                            <div className="card-beds-container">
                                <CardText className="card-beds">{props.beds}</CardText>
                            </div>
                            <div class="card-bath-container">
                                <CardText className="card-baths">{props.baths}</CardText>
                            </div>
                            <div class="sqft-container">
                                <CardText className="sqft">{props.sqft}</CardText>
                            </div>
                        </div>
                    </div>
                    <div className="card-subtitle-container">
                            <CardSubtitle tag="h6">Rental Property Address</CardSubtitle>
                        </div>
                        <div className="card-description-container">
                            <CardText><span><div className="circle-color"></div></span>House for rent</CardText>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default PropertyCard;