import { people } from '../../../data';
import Person from './Person'
const List = () =>{
    return (<>
        {
            people.map((data) => {
               return  <Person key={data.id} {...data}></Person>
            })
        }
    
    </>)
}
export default List