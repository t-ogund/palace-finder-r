import React from "react";

class MapMarker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        console.log(props)
    }

    render() {

        return(
            <div className={this.props.propertyMarkerColor === null ? "sale-circle-color-map" : "rent-circle-color-map"}></div>
        )
    }
}

export default MapMarker