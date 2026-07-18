import './index.css'
import NavBar from './NavBar';
import {links} from './data'
import {social} from './data'
const App = () => {
  return (
    <NavBar links={links} socials={social}/>
  )
};
export default App;
