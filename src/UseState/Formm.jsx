import React,{useState} from 'react'

function App (){
  const[ form , setForm ]=useState({
    firstname: '',
    lastname: ''
  })
   
   const[ table , setTable]=useState([])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit= (event) => {
    event.preventDefault();
    setTable([...table,form]);
    setForm({
      firstname:'',
      lastname:''
    }); 
  };
 


  return(
    <div className="App">
     <form onSubmit={handleSubmit}>
     <input name='firstname' type="text" placeholder='first-Name' onChange={handleChange} value={form.firstname} /><br /><br />
     <input name='lastname' type="text" placeholder='last-Name' onChange={handleChange} value={form.lastname}/>
     <button  type="submit">Print</button>
     </form>


   <table>
   <thead>
   <tr>
   <th>firstname</th>
   <th>lastname</th>
   </tr>
   </thead>
   <tbody>
   {table.map((data, index) => (
    <tr key={index}>
   <td>{data.firstname}</td>
   <td>{data.lastname}</td>
   </tr>
   ))}
   </tbody>
   
   </table>
    </div>
  )
}
 
 export default App;
      