const Duties = ({ duties }) => {
    let x = -1;
    return (
        <>
            <ul>
                {duties.map((duty) => {
                    x++
                    return <li key={x} className="list-item" >{duty}</li>
                })}
            </ul>

        </>
    )
}
export default Duties