import React from 'react'
import GoogleMapReact from "google-map-react";

const Map = ({ center, zoom }) => {
    return (
        <div className="map d-none d-lg-block">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBN-nF2nXpN4aWxFKS1uVKMGcTKPU5IS-U" }}
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
