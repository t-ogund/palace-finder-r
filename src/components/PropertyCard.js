import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function PropertyCard() {
    return (
        <React.Fragment>
            <Card>
                <CardImg width="18rem" src="assets/tester-house.jpg" alt="Test Image" />
                <CardBody>
                    <div className="card-cost-and-details">
                        <div className="card-cost-container">
                            <CardTitle tag="h3" className="card-cost">$3,200/mo</CardTitle>
                        </div>
                        <div className="card-details-container">
                            <div class="card-beds-container">
                                <CardText class="card-beds">4 bds</CardText>
                            </div>
                            <div class="card-bath-container">
                                <CardText class="card-baths">4 ba</CardText>
                            </div>
                            <div class="sqft-container">
                                <CardText class="sqft">2,521 sqft</CardText>
                            </div>
                        </div>
                        <div className="card-subtitle-container">
                            <CardSubtitle tag="h4">Rental Property Address</CardSubtitle>
                        </div>
                        <div className="card-description-container">
                            <CardSubtitle tag="h4">House for rent</CardSubtitle>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default PropertyCard;