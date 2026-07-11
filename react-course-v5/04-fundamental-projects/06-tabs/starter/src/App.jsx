import useFetch from "./useFetch";
import Tabs from './Tabs'
import { useEffect,useState } from "react";
import BtnContainer from "./BtnContainer";
import DataViewer from "./DataViewer";
import './index.css'
const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [currentId,setCurrentId] = useState(null)
  const {isLoading,data,error} = useFetch(url)
  const [currentData,setCurrentData] = useState(null)
  useEffect(()=>{
    console.log(data.length)
    if(data.length>0){
      setCurrentId(data[0].id)
      selectMenu(data[0].id);
   }
  },[data])
  const selectMenu=(choice)=>{
    let selectedDataSet = data.filter((item)=>{return item.id==choice})
    setCurrentData(selectedDataSet?selectedDataSet[0]:null);
    setCurrentId(choice)
    console.log(currentData)
  }
  return (
   <>
    {isLoading ?<div className="loading"></div> : 
       <div className="jobs-center">
               <BtnContainer jobs={data} callBack={selectMenu}></BtnContainer> 
               {currentData !=null && <DataViewer data={currentData}/>}
        </div>
      }
      
   </>
  )
};
export default App;
