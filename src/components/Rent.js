import React from "react";

class Rent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
        console.log("RENT PROPS: ", props)
    }
    render() {
        const style = {
            color: "red",
            fontSize: "200px"
        }
        return(
            <h1 style={style}>Rent Page Under Construction</h1>
        )
    }
}

export default Rent