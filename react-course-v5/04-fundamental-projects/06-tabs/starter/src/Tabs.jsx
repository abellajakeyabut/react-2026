
const Tabs = ({data})=>{
  
    return (
        <div className="btn-container">
       {data.map((item)=>{

            return <button key={item.id} className="job-company">{item.company}</button>
        })} 
        </div>
        
       
    )
}
export default Tabs