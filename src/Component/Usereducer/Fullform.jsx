import React, { useState,useEffect, useReducer } from "react";

const initialState = {
  data: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
}

const Fullform = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    phoneno: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    useEffect(()=>{
      const savedData= localStorage.getItem("user");
      if(savedData){
          dispatchEvent({type:'ADD_DATA',payload:JSON.parse(savedData)});
      }
    },[]);

    useEffect(()=> {
      localStorage.setItem("user",JSON.stringify(state.data));

    },[state.data]);

    useEffect(()=>{
      const fetchData = async() =>{
          try{
              const response = await fetch('');
              const data = await response.JSON();
              dispatch({type: ' ADD_DATA' , payload:data});

          }
          catch(error){
              console.error('Error fectching data:',error);
          }
      }
      fetchData();
    },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_DATA", payload: formData });
    setFormData({
      firstname: "",
      lastname: "",
      age: "",
      email: "",
      phoneno: "",
    });
  };

  return (
    <div className="container">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            key="user"
            value={formData.fname}
            onChange={handleChange}
            placeholder="Firstname"
          />
          <br />
          <input
            type="text"
            name="lastname"
            key="user"
            value={formData.lname}
            onChange={handleChange}
            placeholder="lastname"
          />{" "}
          <br />
          <input
            type="number"
            name="age"
            value={formData.age}
            key="user"
            onChange={handleChange}
            placeholder="Age"
          />{" "}
          <br />
          <input
            type="text"
            name="email"
            value={formData.email}
            key="user"
            onChange={handleChange}
            placeholder="Email"
          />{" "}
          <br />
          <input
            type="tel"
            name="phoneno"
            value={formData.phoneno}
            key="user"
            onChange={handleChange}
            placeholder="Phone.no"
          />{" "}
          <br />
          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="output">
        <table>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>

              <th>Email</th>
              <th>Phone.No</th>
            </tr>
          </thead>
          <tbody>
            {state.data.map((item, index) => (
              <tr key={index}>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.phoneno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fullform;
