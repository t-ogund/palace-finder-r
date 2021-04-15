import React from "react";
import Splash from "./Splash";
import HomeBottom from "./HomeBottom";

class Home extends React.Component {
    constructor(props) {
        super();


        console.log(props)
    }

    render() {
        return (
            <React.Fragment>
                <Splash />
                <HomeBottom />
            </React.Fragment>
        )
    }
}

export default Home