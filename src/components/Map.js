import React from 'react'
import GoogleMapReact from "google-map-react";

const Map = ({ center, zoom }) => {
    const API_KEY = process.env.REACT_APP_MAP_API_KEY
    return (
        <div className="map d-none d-lg-block">
            <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >


            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 44.9778,
        lng: -93.2650
    },
    zoom: 6
}

export default Map
