import Person from './Person';

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <Person key={person.id} {...person} removePerson={removePerson} />
        );
      })}
    </div>
  );
};
export default List;
