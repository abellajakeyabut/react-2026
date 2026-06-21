import { useState } from "react";
import './02-user-challenge.css'
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const handleChange = (e) => {

    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    let form = document.querySelector("form");
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const contact = formData.get('contact');

    const fakeId = Date.now();
    const newUser = { id: fakeId, name: name, email: email, contact: contact };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

  };
  const removeItem = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  }
  return (
    <div>
      <form className='form'>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input type='text' className='form-input' id='name' name='name' onChange={handleChange} />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='text' className='form-input' id='email' name='email' onChange={handleChange} />
        </div>
         <div className='form-row'>
          <label htmlFor='contact' className='form-label'>
            Contact
          </label>
          <input type='text' className='form-input' id='contact' name='contact' onChange={handleChange} />
        </div>
        <button type='submit' className='btn btn-block' onClick={handleSubmit}>
          submit
        </button>
      </form>
      {/* render users below */}
      <table>
            <th>ID</th><th>Name</th><th>Email</th><th>Contact</th><th>Actions</th>
      x  <tbody>
      {users.map((user) => {
          return (<tr><td>{user.id}</td><td>{user.name}</td><td>{user.email}</td><td>{user.contact}</td><td><button className="btn"
          onClick={()=>{
             const updatedUsers = users.filter((data) => data.id !== user.id);
             setUsers(updatedUsers);
          }}>Delete</button></td></tr>)})}
     
        </tbody>
      </table>

    </div>  
  );
};
export default UserChallenge;
