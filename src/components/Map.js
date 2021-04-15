import React from 'react'
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        center: {
            lat: 44.9778,
            lng: -93.2650
        },
        zoom: 3
    }

    

    render() {
        console.log(this.props)
        const API_KEY = process.env.REACT_APP_MAP_API_KEY        
        if (this.props.infoToDisplay.query !== "") {
        const exactLocationArray = this.props.infoToDisplay.location.state.body.data.results
        const exactSelectedRentLocationArray = this.props.selectedRentData
            return(
                <div className="map d-none d-lg-block">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDRJk0P6hhX0-X_oLwzaLgFs3LdA_3zYCY' }}
                    defaultCenter={ this.props.center }
                    defaultZoom={ this.props.zoom }
                >
                {this.props.path === "/buy" ? exactLocationArray.map(marker => <MapMarker lat={marker.location.address.coordinate.lat} lng={marker.location.address.coordinate.lon} path={this.props.path} />) : exactSelectedRentLocationArray.map(rentalMarker => <MapMarker lat={rentalMarker.location.address.coordinate.lat} lng={rentalMarker.location.address.coordinate.lon} path={this.props.path} />)}
    
                </GoogleMapReact>
            </div>
            )
        } else {
            const buyLinkExactLocationArray = this.props.buyLinkData
            const rentLinkExactLocationArray = this.props.rentLinkData
            return(
                <div className="map d-none d-lg-block">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDRJk0P6hhX0-X_oLwzaLgFs3LdA_3zYCY' }}
                    defaultCenter={ this.props.center }
                    defaultZoom={ this.props.zoom }
                >
                {this.props.path === "/buy" ? buyLinkExactLocationArray.map(marker => <MapMarker lat={marker.location.address.coordinate.lat} lng={marker.location.address.coordinate.lon} />) : rentLinkExactLocationArray.map(rentalMarker => <MapMarker lat={rentalMarker.location.address.coordinate.lat} lng={rentalMarker.location.address.coordinate.lon} path={this.props.path} />)}
    
                </GoogleMapReact>
            </div>
            );
        }
        
    }
}

export default Map
