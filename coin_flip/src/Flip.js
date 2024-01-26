import { useState } from "react";
import Coin from "./Coin";



 function Flip({ photos, title }) {
  
  const random = () => (Math.random()>=0.5)? 1 : 0;
  const [currPhotoIdx, setCurrPhotoIdx] = useState(random);

  let currPhoto = photos[currPhotoIdx];

  const[coin, setCurrCoin] = useState(null);
  const[headsCount, setHeadsCount] = useState(0);
  const[tailsCount, setTailsCount] = useState(0);
  const[flipsCount, setFlipsCount] = useState(0);

  function flipCoin(){
    setCurrPhotoIdx(random);
    setCurrCoin(<Coin caption={currPhoto.caption} src={currPhoto.src} />);
    setFlipsCount(flipsCount + 1);
    currPhoto.caption === "Heads" ? setHeadsCount(headsCount+1) : setTailsCount(tailsCount+1);
  }

  return (
    <div className="FlipCoin">
      <h1>{title}</h1>
      <div className="FlipCoin-main">
        {coin}
        <button className="FlipCoin-Button" onClick={flipCoin}>Flip Me!</button>
        <p>Out of {flipsCount}, there have been {headsCount} heads and {tailsCount} tails.</p>
      </div>
    </div>
  );
}

export default Flip;
