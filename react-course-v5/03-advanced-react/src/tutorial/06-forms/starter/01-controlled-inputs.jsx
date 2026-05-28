import {useState} from 'react'

const ControlledInputs = () => {
  const [inputObj, setInput] = useState({})
  const handleChanges = (e) =>{
    e.preventDefault();
    let inputObjProxy = {...inputObj,[e.target.id]:e.target.value}
    setInput(inputObjProxy)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(`submitted name:${inputObj.name}, value:${inputObj.email}`)
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input type='text' id='name' className='form-input' onChange={(e)=>{handleChanges(e)}}/>
  
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input type='text' id='email' className='form-input' onChange={(e)=>{handleChanges(e)}}/>
        
      </div>
      <div className='form-row'>
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </div>
      
    </form>
  )
};
export default ControlledInputs;
