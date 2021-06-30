import { Component } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';

class CreateExercise extends Component {

    state = {
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []
    }

    componentDidMount() {
        // const link = '/users'
        const link = 'http://localhost:5000/users'

        axios.get(link)
            .then(res => {
                if(res.data.length > 0){
                    this.setState({
                        users: res.data.map(user => user.username),
                        username : res.data[0].username
                    })
                }
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleChangeDate = (date) => {
        this.setState({
            date: date
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        }

        console.log(exercise);

        const link = 'http://localhost:5000/exercises/add';
        // const link = '/exercises/add'

        axios.post(link,exercise)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        window.location = '/';

    }

    render() {
        return (
            <div className="container createExercise card">
                <form onSubmit={this.handleSubmit} className="white createForm">
                    <h5 className="grey-text text-darken-3">Create New Exercise Log</h5>
                    <label htmlFor="username">Username :</label>
                    <select
                        className="browser-default"
                        id='username'
                        value= {this.state.username}
                        onChange={this.handleChange}
                        required
                    >
                        {
                            this.state.users.map(user => {
                                return (
                                    <option value={user} key={user}>{user}</option>
                                )
                            })
                        }
                    </select>


                    <div className="input-field">
                        <label  htmlFor="description">Description :</label>
                        <input type="text" id="description" onChange={this.handleChange} value={this.state.description} required />
                    </div>

                    <div className="input-field active">
                        <label className="active" htmlFor="duration">Duration (in Minutes):</label>
                        <input type="text" id="duration" onChange={this.handleChange} value={this.state.duration} required />

                    </div>

                    <div className="input-field">
                        <label htmlFor="date">Date :</label><br></br>
                        {/* <input type="text" id="duration" onChange={this.handleChange} value={this.state.duration} required /> */}
                        <div>
                            <DatePicker selected={this.state.date} onChange={this.handleChangeDate} id='date' required />
                        </div>
                    </div>


                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create Exercise Log</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateExercise;