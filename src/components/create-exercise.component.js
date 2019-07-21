import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from 'material-ui/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
export default class CreateExercise extends Component {

    constructor(props) {
        super(props);
        
        // use state to create variable
        this.state = {
            username : '',
            description : '',
            duration: null,
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
            users: ['test user1','test user2','test user3'],
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
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <FormControl required fullWidth={true}>
                        <InputLabel htmlFor="select-user">Username</InputLabel>
                        <Select ref="userInput"           
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            inputProps={{
                                name: 'user',
                                id: 'select-user'
                            }}
                            >
                            {
                                this.state.users.map(function(user){
                                    return <option 
                                        key={user}
                                        value={user}>{user}
                                        </option>;
                                })
                            }

                        </Select>
                        </FormControl>
                    </div>
                    <div className="form-group">
                        <TextField
                            type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            label="Description"
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.duration}
                            label="Duration (in minutes)"
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            type="date"
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                    <div className="form-group">
                        <Button
                            type="submit"
                            value="Create Exercise Log"
                            className="btn btn-primary"
                            label="Create Exercise"
                            />
                    </div>                    
                </form>
                
            </div>
            
        );
    }
}
