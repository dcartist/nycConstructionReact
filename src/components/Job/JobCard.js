import React, { Component } from 'react'
import { Link} from "react-router-dom";

class componentName extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="jobCard">
                <div>{this.props.address}</div>
                <div>{this.props.city}</div>
                <div>{this.props.borough}</div>
                <Link to={"/jobs/info/" + this.props.jobId}><button id="listingButton"> More Info</button></Link>
                <hr></hr>
            </div>
        )
    }
}


export default componentName