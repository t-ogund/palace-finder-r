import React from "react";

class MapMarker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        console.log("MAP MARKER: ", props)
    }

    render() {
        console.log("MAP MARKER RENDER: ", this.props)
        return(
            <div className={this.props.path === "/rent" ? "rent-circle-color-map" : "sale-circle-color-map"}></div>
        )
    }
}

export default MapMarker