import React, { Component } from "react";
import { MDBContainer,MDBInput } from "mdbreact"

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);
        
        // use state to create variable
        this.state = {
            username : '',
            description : '',
            duration: 0,
            date: new Date(),
            users: []
        };

        // make sure the method will bind to 'this' object 
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    
    // connect with datebase to retrieve user information for selection
    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        });
    }

    // accept the form
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e){
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);

        // go back to the root path
        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <MDBContainer>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">

                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user){
                                    return <option 
                                        key={user}
                                        value={user}>{user}
                                        </option>;
                                })
                            }
                        </select>

                    </div>

                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                    </div>

                    <MDBInput label="Material input" />
                </form>
                </MDBContainer>
            </div>
        );
    }
}
