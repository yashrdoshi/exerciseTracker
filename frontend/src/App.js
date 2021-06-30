import {BrowserRouter as Router,Route} from 'react-router-dom' 
import Navbar from './components/Navbar';
import ExerciseList from './components/ExerciseList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';
import './index.css'


function App() {
  return (
    <Router>
      <div className="App"></div>
        <Navbar/>
        <div className="container content">
            <Route exact path='/' component={ExerciseList}/>
            <Route path='/edit/:id' component={EditExercise}/>
            <Route path='/create' component={CreateExercise}/>
            <Route path='/user' component={CreateUser}/>
        </div>
    </Router>
  );
}

export default App;
