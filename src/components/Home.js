import React from "react";
import Navigation from "./Navigation";
import Splash from "./Splash";
import HomeBottom from "./HomeBottom";

class Home extends React.Component {
    constructor(props) {
        super();

        // this.state = {};
        console.log(props)
    }

    render() {
        return (
            <React.Fragment>
                {/* <Navigation /> */}
                <Splash />
                <HomeBottom />
            </React.Fragment>
        )
    }
}

export default Home