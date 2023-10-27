import React, { useState } from "react";

const App = () => {
  const [bottomPosition, setBottomPosition] = useState(140);
   const [leftPosition, setLeftPosition] = useState(140);
  const [bottomDisable, setBottomDisable] = useState(false);
  const [topDisable, setTopDisable] = useState(false);
  const [leftDisable, setLeftDisable] = useState(false);
  const [RightDisable, setRightDisable] = useState(false);
  



  // top position
  const handleMoveTop = (value) => {
    setBottomDisable(false);
    setLeftDisable(false);
    setRightDisable(false);
    if (bottomPosition == 310) {
      setTopDisable(true);
      setBottomDisable(false);
     
    } else {
      setBottomPosition(bottomPosition + value);
    }
  };


  // bottom button position
  const handleMoveBottom = (value) => {

    setRightDisable(false)
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
    setRightDisable(false);
    setBottomDisable(false);
    setTopDisable(false)
    if (leftPosition ==10) {
  
    setLeftDisable(true);
  ;
 } else {
     
       setLeftPosition(leftPosition - value);
 }
    
  }

  // move to right position

  const handleMoveRight = (value) => {
     setRightDisable(false);
     setBottomDisable(false);
     setTopDisable(false);
     if (leftPosition == 310) {
       setRightDisable(true);
     } else {
       setLeftPosition(leftPosition+value);
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
        disabled={leftDisable}
        onClick={() => handleToLeft(10)}
        className="btn"
      >
        left
      </button>
      <div className="button-container w-[400px] bg-black h-[400px] my-0 mx-auto flex justify-center items-center relative">
        <div
          id="mid"
          className="mid w-20 absolute h-20 bg-red-400"
          style={{ bottom:`${bottomPosition}px`, left:`${leftPosition}px`,}}
        ></div>

      </div>
      <button
        disabled={bottomDisable}
        onClick={() => handleMoveBottom(10)}
        className="btn"
      >
        bottom
      </button>
      <button
        disabled={RightDisable}
        onClick={() => handleMoveRight(10)}
        className="btn"
      >
        right
      </button>
    </div>
  );
};

export default App;
