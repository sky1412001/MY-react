import React,{useState} from 'react'

function Example() {

  const [ data, setData, ] = useState([]);
  const [ form, setForm ] = useState({ id: '', name: '' });

  
  function handleChange(e) {
    const { nodeName, name, value } = e.target;
    if (nodeName === 'INPUT') {
      setForm({...form, [name]: value })
    }
  }

  
  function addEntry() {
    setData([ ...data, form ]);
    setForm({ id: '', name: '' });
  }

 
  function isButtonDisabled() {
    return !form.id || !form.name;
  }

  return (
    <div>
      <form onChange={handleChange}>
        <fieldset>
          <legend>ID</legend>
          <input name="id" type="text" value={form.id} />
        </fieldset>
        <fieldset>
          <legend>Name</legend>
          <input name="name" type="text" value={form.name} />
        </fieldset>
        <button
          type="button"
          onClick={addEntry}
          disabled={isButtonDisabled()}
        >Add entry
        </button>
      </form>
      <Table data={data} />
    </div>
  );
};

function Table({ data }) {
  
 
  function buildRows(data) {
    return data.map(obj => {
      return (
        <tr key={obj.id}>
          <td>{obj.id}</td>
          <td>{obj.name}</td>
        </tr>
      );
    });
  }
  
  if (!data.length) return <div />;
  
  return (
    <table>
      <tbody>
        <tr className="heading">
          <td>ID</td>
          <td>Name</td>
        </tr>
        {buildRows(data)}
      </tbody>
    </table>
  );
}
