import TrainerDisplay from '../TrainerDisplay';
import './MainPage.css';
function Main() {
  return (
    
    <div className='mainPageContainer'>
      <TrainerDisplay category={'Strength Training'}/>
      <TrainerDisplay category={'Fat Loss'}/>
      <TrainerDisplay category={'Athletic Development'}/>
    </div>
  );
}

export default Main;