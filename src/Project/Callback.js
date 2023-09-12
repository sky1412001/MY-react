import React,{useState} from 'react'

function Callback({ getColor }) {
    const [activecolor, setActiveColor] = useState(null);

    const handleChange = (e) => {
        const {value} = e.target.value;
        setActiveColor(value);
        getColor(e.target.value)
    };

    return (
        <div>
            <input
                type='text'
                id='input'
                aria-label="input"
                onChange={handleChange}
                value={activecolor} />

        </div>
    );
}

export default Callback
