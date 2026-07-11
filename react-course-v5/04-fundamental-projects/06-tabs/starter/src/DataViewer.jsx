import Duties from './Duties'

const DataViewer = ({ data }) => {
    return (
        <>
            <div className="title">
                <h3>{data.title}</h3>
                <div className="job-icon">
                    <button className="job-company">{data.company}</button>
                </div>
                 <div className='job-date'>
                 <Duties duties={data.duties}></Duties>
            </div>
            </div>
          

        </>

    )
}
export default DataViewer