import Main from "../mainPage";
import {Switch, Route} from 'react-router-dom';
import TrainerProfile from '../TrainerProfile';
import Profile from '../Profile';
import ReviewForm from "../ReviewForm";

function Home() {
  //grab all the trainers in the database given a criteria, training style.
  //display those trainers
  //the trainer display needs to show the title
  return (
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
      <Route exact path='/trainer/:id'>
        <TrainerProfile />
      </Route>
      <Route path='/profile/:userId'>
        <Profile />
      </Route>
      <Route  path='/trainer/:trainerId/review' >
        <ReviewForm />
      </Route>
    </Switch>
  );
}

export default Home;
