import React from "react";

class MapMarker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        console.log("MAP MARKER: ", props)
    }

    render() {

        return(
            <div className={this.props.propertyMarkerColor === null ? "rent-circle-color-map" : "sale-circle-color-map"}></div>
        )
    }
}

export default MapMarker