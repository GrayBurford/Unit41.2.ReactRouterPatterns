import React, { useState } from 'react';
import './ColorForm.css';
import { useHistory } from 'react-router-dom/';


function ColorForm ({ addColor }) {
    const [colorName, setColorName] = useState('')
    const history = useHistory();


    function handleSubmit (evt) {
        evt.preventDefault();
        addColor(colorName);
        setColorName('');
        history.push('/colors');
    }

    function handleChange (evt) {
        setColorName(evt.target.value)
    }


    return (
        <div className="ColorForm">
            <h3>Add new colors to your Color Homepage</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color Name</label>
                <input
                    id="color"
                    name="color" 
                    type="text" 
                    onChange={handleChange} 
                    value={colorName}
                    required
                    placeholder="must be valid CSS color"
                />
                <div className="ColorForm-div">
                    <button className='ColorForm-button'>Add</button>
                </div>
            </form>
        </div>
    )
}
    
export default ColorForm;