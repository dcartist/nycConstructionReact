import React, { Component } from 'react';
import Axios from 'axios';

class Update extends Component {
    constructor(props){
        super(props)
        this.state={
            contractor: {
                conLicense: null,
                conFirstName: null,
                conLastName: null,
              },
        }
    }
    

handleConFirstName(evt){
    evt.preventDefault();
this.setState({
    conFirstName: evt.target.value
})
}
handleConLastName(evt){
    evt.preventDefault();
this.setState({
    conLastName: evt.target.value
})
}
handleconLicense(evt){
    evt.preventDefault();
this.setState({
    conLicense: evt.target.value
})
}

handleID(evt){
    evt.preventDefault();
this.setState({
    _id: evt.target.value
})
}

handleSubmit(evt){
    // const url = `http://localhost:8080/api/contractor/new`;
    evt.preventDefault()
    console.log(this.state.conLicense)
    let updateID = `http://localhost:8080/api/contractor/update/`+this.state._id
    // const input = {tweet: {body:  this.state.value}};
    Axios.put(updateID,
    {
        conLicense: this.state.conLicense,
        conFirstName: this.state.conFirstName,
        conLastName: this.state.conLastName,
    })}

    render() {
        return (
            <div>

                Update Page

                <form onSubmit={(evt) => this.handleSubmit(evt)}>
                    
                <input type="text" name = "ID" onChange={(evt) => this.handleID(evt)}></input>
                <label>Contractor First Name</label>
<input name="conFirstName" type="text"onChange={(evt) => this.handleConFirstName(evt)}/>
<label>Contractor Last Name</label>
<input name="conLastName" type="text" onChange={(evt) => this.handleConLastName(evt)} />
<label>Contractor License</label>
<input name="conLicense" type="text" onChange={(evt) => this.handleconLicense(evt)} />
<input name="" type="submit" />
                </form>
                
            </div>
        );
    }
}

export default Update;