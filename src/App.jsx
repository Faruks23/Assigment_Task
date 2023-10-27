import React, { useState } from "react";

const App = () => {
  const [bottomPosition, setBottomPosition] = useState(140);
  const [bottomDisable, setBottomDisable] = useState(false);
  const [topDisable, setTopDisable] = useState(false);
  const [leftDisable, setLeftDisable] = useState(false);
  
  const [leftPosition, setLeftPosition] = useState(140)


  // top position
  const handleMoveTop = (value) => {
    setBottomDisable(false);
    setLeftDisable(false);
    if (bottomPosition == 310) {
      setTopDisable(true);
      setBottomDisable(false);
     
    } else {
      setBottomPosition(bottomPosition + value);
    }
  };


  // bottom button position
  const handleMoveBottom = (value) => {
    setLeftDisable(false)
    setTopDisable(false);
    if (bottomPosition == 0) {
      setBottomDisable(true);
      setTopDisable(false);
      if (bottomPosition > 20) {
        setTopDisable(false);
      }
    } else {
      setBottomPosition(bottomPosition - value);
    }
  };

  
  // move to left position
  const handleToLeft = (value) => {
    setBottomDisable(false);
    setTopDisable(false)
 if (leftPosition == 310) {
   setLeftDisable(true);
  ;
 } else {
   setBottomPosition(leftDisable + value);
 }
    
  }

  return (
    <div>
      <button
        disabled={topDisable}
        onClick={() => handleMoveTop(10)}
        className="btn"
      >
        top
      </button>
      <button
        disabled={topDisable}
        onClick={() => handleToLeft(10)}
        className="btn"
      >
        left
      </button>
      <div className="button-container w-[400px] bg-black h-[400px] my-0 mx-auto flex justify-center items-center relative">
        <div
          id="mid"
          className="mid w-20 absolute h-20 bg-red-400"
          style={{ bottom: `${bottomPosition}px`,left:`${leftPosition}px`}}
        ></div>

      </div>
      <button
        disabled={bottomDisable}
        onClick={() => handleMoveBottom(10)}
        className="btn"
      >
        bottom
      </button>
    </div>
  );
};

export default App;
