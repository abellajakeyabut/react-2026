
import useToggle from './useToggle';

const Toggle = () => {
  const [show, toggleShow] = useToggle(false);
  const  [showButton,toggleButton] = useToggle(false);

  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={toggleShow}>
        toggle
      </button>
      <button className='btn' onClick={toggleButton}>button</button>
      {show && <h4>some stuff</h4>}
      {showButton && <h4> Second ohter stuff </h4>}

  
    </div>
  );
};
export default Toggle;
