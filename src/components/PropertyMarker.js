import React from "react";

class PropertyMarker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        console.log("PROPERTY MARKER PROPS: ", props)
    }

    render() {

        return(
            <div className={this.props.propertyMarkerColor === null ? "sale-circle-color" : "rent-circle-color"}></div>
        )
    }
}

export default PropertyMarker