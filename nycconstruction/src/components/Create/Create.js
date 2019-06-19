import React, { Component } from 'react';
import Axios from 'axios';

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


/* 
router.get("/name/:conLastName", (req, res) => {
    let theName = req.params.conLastName
    Contractor.find({ conLastName: theName }).then(showName => res.json(showName))
})

router.post("/new", (req, res) => {
    Contractor.create(req.body).then(contractor => res.json(contractor))
})

router.put("/update/:id", (req, res) => {
    Contractor.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(update => res.json(update))
})

router.delete("/delete/:id", (req, res) => {
    Contractor.findOneAndDelete({ _id: req.params.id }).then(deleted => res.json(deleted))
})

 */


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
    // const url = `http://localhost:8080/api/contractor/new`;
    evt.preventDefault()
    console.log(this.state.conLicense)
    // const input = {tweet: {body:  this.state.value}};
    Axios.post('http://localhost:8080/api/contractor/new',
    {
        conLicense: this.state.conLicense,
        conFirstName: this.state.conFirstName,
        conLastName: this.state.conLastName,
    })}

    


    render() {
        return (
            <div>
                CREATION PAGE
                <form onSubmit={(evt) => this.handleSubmit(evt)}>
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

export default Create;