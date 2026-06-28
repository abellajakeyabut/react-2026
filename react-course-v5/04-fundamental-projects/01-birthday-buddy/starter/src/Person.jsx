const Person = ({ person }) => {
    return (
        <li key={person.id}>
            <div className={'person'}>
                <img key={person.id} src={person.image}></img>
                <h4>{person.name}</h4>
            </div>
        </li>

    )
}
export default Person;