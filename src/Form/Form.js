import React, { useEffect, useState } from 'react'

const Form = () => {
const initialvalues ={
    username: "",
    email: "",
    password: ""
}
const [formvalues,setFormvalues]=useState(initialvalues);
const [formerrors,setFormErrors]=useState({})
const [isSubmit,setIsSubmit]= useState(false);


const handleChange= (e) => {
    const { name,values}=e.target;
    setFormvalues({...formvalues,[name]:values});
    console.log(formvalues);
}
const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formvalues))
    setIsSubmit(true);
}
useEffect(() => {
    console.log(formerrors)
    if(Object.keys(formerrors).length === 0 && isSubmit){
        console.log(formvalues)
    }

// eslint-disable-next-line react-hooks/exhaustive-deps
},[formerrors])
const validate = (values) => {
    const errors = {};
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if(!values.username) {
        errors.username = "Username is required";
    }
    if(!values.email) {
        errors.email = "email is required"
    }else if (!regex.text(values.email)){
        errors.email = "undefined"
    }
    if(!values.password) {
        errors.password = "password is required";   
    }
    else if(values.password < 4){
        errors.password = "Password must be more than 4 character";    
    }
    return errors;
}
  return (
    <div>
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <input type = "text" name='username' placeholder='Username' values={formvalues.username} onChange={handleChange}/>
    <p>{formerrors.username}</p>
    <br />
    <input type="email" name='email' placeholder='Email'  values={formvalues.email} onChange={handleChange}/>
    <p>{formerrors.email}</p>
    <br />
    <input type="password" name="password" placeholder='Password'  values={formvalues.password} onChange={handleChange}/>
    <br />
    <p>{formerrors.password}</p>
    <button>Submit</button>

    </form>
      
    </div>
    </div>
  )
}

export default Form
