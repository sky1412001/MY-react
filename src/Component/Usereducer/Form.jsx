import React, { useState, useReducer } from 'react';

const initialState = {
  data: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
}

function App() {
  const [formData, setFormData] = useState({ name: '', age: '' });
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_DATA', payload: formData });
    setFormData({ name: '', age: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <button type="submit">Add</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
