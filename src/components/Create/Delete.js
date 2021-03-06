import React, { Component } from 'react';
import Axios from 'axios';
import './Mod.css';

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
              idInfo:""
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
    // const url = `https://whispering-bayou-30290.herokuapp.com/api/contractor/new`;
    evt.preventDefault()
    console.log(this.state.conLicense)
    
    // let delId = `https://whispering-bayou-30290.herokuapp.com/api/contractor/delete/`+this.state._id
    let delId = `https://whispering-bayou-30290.herokuapp.com/api/contractor/delete/`+this.props.idInfo
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
            <div className="mod">
               <h3> Delete Page</h3>
                <form onSubmit={(evt) => this.handleSubmit(evt)}>
                   <p>
 {/* <label>Contractor License: </label>
<input name="conLicense" type="text" onChange={(evt) => this.handleconLicense(evt)} /> */}
                    <label>Contractor ID: </label>
                    <input type="text" name = "ID" value={this.props.idInfo} placeholder={this.props.idInfo} onChange={(evt) => this.handleID(evt)}></input>
                   </p>
               <p>

                    <input type="submit"></input>
               </p>
                </form>
            </div>
        );
    }
}

export default Delete;