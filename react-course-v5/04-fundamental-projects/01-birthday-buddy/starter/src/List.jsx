import Person from './Person'
const List = ({ people }) => {
    console.log(people)
    return (
        <div>
            <ul>
                {
                    people.map((rec) =>
                        <Person person={rec}></Person>
                    )
                }
            </ul>
        </div>


    );

}
export default List;