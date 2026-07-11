import './index.css'
import data from './data.js'
import { useRef } from 'react';
import Question from './question'
const App = () => {
  const refContainer = useRef(null);

  console.log(data);
  const collapse = () => {
    if (refContainer.current.style.display == "block")
      refContainer.current.style.display = "none"
    else {
      refContainer.current.style.display = "block"
    }
  }
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {
          data.map((rec) => (
            <Question key={rec.id} rec={rec}></Question>
          ))
        }

      </section>
    </main>
  )
};
export default App;
