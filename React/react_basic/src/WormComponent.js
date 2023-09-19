import './Worm.css';
import worm from './worm.png';

function WormComponent() {
  return (
    <>
      <div className="circle circle1"></div>
      <div className="eye"></div>
      <div className="eye1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>
      <div className="circle circle5"></div>
      <img className="weed" src={worm} width="600px" />
    </>
  );
}

export default WormComponent;
