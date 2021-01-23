import TrainerDisplay from '../TrainerDisplay';
import Banner from '../Banner'
import './MainPage.css';
function Main() {
  return (
    
    <div className='mainPageContainer'>
      <Banner />
      <TrainerDisplay category={'Strength Training'}/>
      <TrainerDisplay category={'Fat Loss'}/>
      <TrainerDisplay category={'Athletic Development'}/>
    </div>
  );
}

export default Main;