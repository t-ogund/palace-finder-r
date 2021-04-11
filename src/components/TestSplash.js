import React from "react";

class TestSplash extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: "",
            suggestionResults: [],
            buyData: [],
            selectedCity: null,
            selectedState: null,
            selectedObject: null
        }
    }

    render() {
        return(
            <h1>Testing</h1>
        )
    }
}

export default TestSplash