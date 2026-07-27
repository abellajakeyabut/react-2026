import { useEffect } from "react";
import FirstRequest from "../examples/1-first-request";
import Headers from "../examples/2-headers.js";


const Title = () => {
  FirstRequest()
 
  return (
    <div className='title'>
      <h1>
        <span>axios</span> tutorial
      
      </h1>
        <Headers></Headers>
    </div>
  );
};
export default Title;
