import React, { Component } from 'react';
import Axios from 'axios';

class Delete extends Component {
constructor(props){
    super(props)
    this.state = {
        _id: null,
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
handleID(evt){
    evt.preventDefault();
this.setState({
    _id: evt.target.value
})
}
handleconLicense(evt){
    evt.preventDefault();
this.setState({
    conLicense: evt.target.value
})
}

handleSubmit(evt){
    // const url = `http://localhost:8080/api/contractor/new`;
    evt.preventDefault()
    console.log(this.state.conLicense)
    
    let delId = `http://localhost:8080/api/contractor/delete/`+this.state._id
    // const input = {tweet: {body:  this.state.value}};
    ///delete/:id
    // Axios.delete(delId,
    // {
    //     _id: this.state._id
    // })
    Axios({
        method: 'delete',
        url: `${delId}`,
        data: null,
        headers: {'Content-Type': 'application/json'}
        })

}

    
    render() {
        return (
            <div>
                Delete Page
                <form onSubmit={(evt) => this.handleSubmit(evt)}>
                   
                <label>Contractor License</label>
<input name="conLicense" type="text" onChange={(evt) => this.handleconLicense(evt)} />
                    by ID:
                    <input type="text" name = "ID" onChange={(evt) => this.handleID(evt)}></input>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default Delete;