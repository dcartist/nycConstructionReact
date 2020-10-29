import React, { Component } from 'react';
import Axios from 'axios';
import './Mod.css'
class Create extends Component {
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

handleSubmit(evt){
    // const url = `https://whispering-bayou-30290.herokuapp.com/api/contractor/new`;
    evt.preventDefault()
    console.log(this.state.conLicense)
    // const input = {tweet: {body:  this.state.value}};
    Axios.post('https://whispering-bayou-30290.herokuapp.com/api/contractor/new',
    {
        conLicense: this.state.conLicense,
        conFirstName: this.state.conFirstName,
        conLastName: this.state.conLastName,
    })}

    


    render() {
        return (
            <div className="mod">
                <h3>CREATION PAGE</h3>
                <form onSubmit={(evt) => this.handleSubmit(evt)}>
                    <p>
                <label>Contractor First Name: </label>
<input name="conFirstName" type="text"onChange={(evt) => this.handleConFirstName(evt)}/>
                        
                    </p>
                    <p>
                    <label>Contractor Last Name: </label>
<input name="conLastName" type="text" onChange={(evt) => this.handleConLastName(evt)} />
                    </p>
                    <p>
                    <label>Contractor License: </label>
<input name="conLicense" type="text" onChange={(evt) => this.handleconLicense(evt)} />
                    </p>
                    <p>

<input name="" type="submit" />
                    </p>


                </form>
            </div>
        );
    }
}

export default Create;