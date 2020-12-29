import TrainerDisplay from '../TrainerDisplay';

function Home() {
    //grab all the trainers in the database given a criteria, training style.  
    //display those trainers
    //the trainer display needs to show the title 
  return (
    <div>
      <div>
        <h1>Make a reservation </h1>
      </div>
      <TrainerDisplay />
    </div>
  );
}

export default Home;
