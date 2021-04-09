import React from 'react'
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

const Map = ({ center, zoom }) => {
    const API_KEY = process.env.REACT_APP_MAP_API_KEY
    return (
        <div className="map d-none d-lg-block">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDRJk0P6hhX0-X_oLwzaLgFs3LdA_3zYCY' }}
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

// class Map extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {

//         }
//         console.log("MAP PROPS, MY BOY: ", props)
//     }

//     static defaultProps = {
//         center: {
//             lat: 44.9778,
//             lng: -93.2650
//         },
//         zoom: 6
//     }

    

//     render() {
//         const exactLocationArray = this.props.infoToDisplay.location.state.body.data.results
//         const API_KEY = process.env.REACT_APP_MAP_API_KEY
//         return(
//             <div className="map d-none d-lg-block">
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyDRJk0P6hhX0-X_oLwzaLgFs3LdA_3zYCY' }}
//                 defaultCenter={ this.props.center }
//                 defaultZoom={ this.props.zoom }
//             >
//             {/* <MapMarker /> */}
//             {exactLocationArray.map(marker => <MapMarker lat={marker.location.address.coordinate.lat} lon={marker.location.address.coordinate.lon} />)}

//             </GoogleMapReact>
//         </div>
//         )
//     }
// }

export default Map
