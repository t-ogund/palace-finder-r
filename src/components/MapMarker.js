import React from "react";

class MapMarker extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={this.props.path === "/rent" ? "rent-circle-color-map" : "sale-circle-color-map"}></div>
        )
    }
}

export default MapMarker