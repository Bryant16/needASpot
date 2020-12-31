import TrainerDisplay from '../TrainerDisplay';

function Main() {
  return (
    <div>
      <div>
        <h1>Make a reservation </h1>
      </div>
      <TrainerDisplay category={'Strength Training'}/>
      <TrainerDisplay category={'Fat Loss'}/>
      <TrainerDisplay category={'Athletic Development'}/>
    </div>
  );
}

export default Main;