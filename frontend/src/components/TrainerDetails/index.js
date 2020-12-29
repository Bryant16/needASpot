import './TrainerDetails.css';
import trainer from '../../images/trainer.png';
function TrainerDetails() {
    return(
        <>
        <h2>Strength Training</h2>
        <div className='trainerCards'>
        <ul>
            <img className='trainerimage' src={trainer} alt='' />
            <li>name</li>
            <li>rating</li>
            <li>details</li>
        </ul>
        <ul>
            <li>image</li>
            <li>name</li>
            <li>rating</li>
            <li>details</li>
        </ul>
        <ul>
            <li>image</li>
            <li>name</li>
            <li>rating</li>
            <li>details</li>
        </ul>
        <ul>
            <li>image</li>
            <li>name</li>
            <li>rating</li>
            <li>details</li>
        </ul>
        <ul>
            <li>image</li>
            <li>name</li>
            <li>rating</li>
            <li>details</li>
        </ul>
        </div>
        </>
    )
}

export default TrainerDetails;