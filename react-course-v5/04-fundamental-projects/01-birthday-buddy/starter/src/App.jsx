import data from './data';
import { useState} from 'react';
import List from './List';
const App = () => {
  const [people, setPeople] = useState(data);
  const clearList = () => {
    setPeople([])
  }
 return (
  <main>
    <section className={'container'}> 
      <List people={people}></List>
      <button type='button'className='btn btn-block' onClick={clearList}>Clear List</button>
    </section>
  </main>
  )
}


export default App;
