const BtnContainer = ({ jobs, callBack }) => {
    return (
        <div className="btn-container">
            {jobs.map((job) => <button key={job.id} className="job-btn" onClick={() => { callBack(job.id) }}>{job.company}</button>)}
        </div>
    )
}
export default BtnContainer