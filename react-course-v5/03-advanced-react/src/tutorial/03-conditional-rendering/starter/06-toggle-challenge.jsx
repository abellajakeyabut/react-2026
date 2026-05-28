import { useState } from 'react'

const ToggleChallenge = () => {
  const [clicked,setClicked] = useState(false)
  const buttonClicked = () =>{
    if(clicked) setClicked(false)
    if(!clicked) setClicked(true)
  }
  return (
    <>
      <h2>Toggle Challenge</h2>
      <button onClick={buttonClicked}>Toggle me</button>
      {clicked && <div><button className="btn" > DUMMY BUTTON SHOWN</button></div>}
    </>
  )
};

export default ToggleChallenge;
