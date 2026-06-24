import { useState, useCallback } from 'react';
import { data } from '../../../../data';
import PersonForm from './PersonForm';

import List from './List';
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);
  const [person, setPerson] = useState('');
  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  const removePerson = useCallback(
    (id) => {
      alert('called');
      console.log(people);
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [person],
  );
  return (
    <section>
      <PersonForm addPerson={addPerson}></PersonForm>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerStateChallenge;
