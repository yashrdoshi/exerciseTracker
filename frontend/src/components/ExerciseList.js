import { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import moment from "moment";

const Exercise = (props) => {

    return (
        <tr>
            <td>{props.ex.username}</td>
            <td>{props.ex.description}</td>
            <td>{props.ex.duration}</td>
            <td>{moment(props.ex.date.substring(0, 10)).format("Do MMMM YY")}</td>
            <td>
                <button className="stylebutton">
                    <Link to={'/edit/'+props.ex._id} className="styleLinkInbutton">Edit</Link>   
                </button>
                <span>  </span>
                <button onClick={() => props.deleteExercise(props.ex._id)} className="stylebutton">Delete</button>
            </td>
        </tr>
    )


}

class ExerciseList extends Component {
    state = {
        exercises: []
    }

    deleteExercise = (id) => {
        // const link = '/exercises/' + id
        const link = 'http://localhost:5000/exercises/' + id
        axios.delete(link)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))

        this.setState({
            exercises: this.state.exercises.filter(ex => ex._id !== id)
        })
    }

    componentDidMount() {
        // const link = '/exercises/'
        const link = 'http://localhost:5000/exercises/'

        axios.get(link)
            .then(res => {
                this.setState({
                    exercises: res.data
                })
                console.log('componentDidMount',res.data);
            })
            .catch(err => {
                console.log('Error ererciseList cDM:', err);
                console.log(err)
            })
    }

    exerciseList = () => {
        console.log('Reached exerciseList');
        return this.state.exercises.map(ex => {
            return <Exercise ex={ex} deleteExercise={this.deleteExercise} key={ex._id} />
        })
    }

    render() {
        return (
            <div className="container">
                <table className="table highlight centered responsive-table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration (Minutes)</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExerciseList;