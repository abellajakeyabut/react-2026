import { useState } from 'react';

const ErrorExample = () => {
  const [clickCount,setClickCount] = useState(0)
  const clickAction = () => {
    
    setClickCount(clickCount + 1)
  }
  return <>
    <h2>{clickCount}</h2>
    <button className="btn" onClick={clickAction}>Click Me</button>
  </>

};

export default ErrorExample;
