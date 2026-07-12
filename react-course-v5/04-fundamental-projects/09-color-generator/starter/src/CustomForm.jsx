import { useState } from 'react';
const CustomForm = ({ addColor }) => {
  const [color, setColor] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container" onSubmit={handleSubmit}>
      <h4>Color Generator</h4>
      <form className="color-form">
        <div>
          <input
            type="color"
            onChange={(e) => setColor(e.target.value)}
          ></input>
          <input type="text" value={color} />
          <button type="submit" className="btn" style={{ background: color }}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
export default CustomForm;
