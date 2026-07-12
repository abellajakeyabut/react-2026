import './index.css';
import { useState, useRef } from 'react';
import Lorem from './Lorem';
const App = () => {
  const inputRef = useRef(null);
  const [paragraphCount, setParagraphCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraphCount(inputRef.current.value);
  };
  return (
    <main>
      <section className="section-center">
        <h4>TIRED OF BORING LOREM IPSUM</h4>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Paragraphs: </label>
            <input type="number" ref={inputRef}></input>
            &nbsp;
            <button type="submit" className="btn">
              Generate
            </button>
          </div>
        </form>
      </section>
      <Lorem count={paragraphCount}></Lorem>
    </main>
  );
};
export default App;
