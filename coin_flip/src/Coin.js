import React from "react";
import "./Coin.css";



 function Coin({caption, src}) {

  return (
    <div className="Coin">
      <img className="Coin-image" src={src} alt={caption} />
    </div>
  );
}

export default Coin;
