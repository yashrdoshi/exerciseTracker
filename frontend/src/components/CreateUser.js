import { Component } from "react";
import axios from "./axiosurl";


class CreateUser extends Component{

    state = {
        username: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user);

        const link = 'users/add';
        // const link = '/users/add';

        axios.post(link,user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        this.setState({
            username:''
        })

        window.location = '/';

    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New User</h5>

                    <div className="input-field">
                        <label htmlFor="username">Username :</label>
                        <input type="text" id="username" onChange={this.handleChange} value={this.state.username} required />
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser;