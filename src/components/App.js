
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  function handleChange(event) {
    const option = event.target.value;
    // console.log(option);
    setSelectedOption(option === selectedOption ? null : option);
    // console.log(selectedOption)
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <h2>Select your gender:</h2>
      <form>
        <label><input type="radio" name="option" value='Male' onChange={handleChange} />Male</label>
        <label><input type="radio" name="option" value='Female' onChange={handleChange} />Female</label>

        {
          selectedOption === "Male" ? <div>
            <h2>Select your shirt size:</h2>
            <select>
              <option>Select size</option>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
            </select>
          </div>
            : selectedOption === 'Female' ?
            <div>
              <h2>Select your dress size:</h2>
              <select>
                <option>Select size</option>
                <option value='2'>2</option>
                <option value='4'>4</option>
                <option value='6'>6</option>
              </select>
            </div>
            :
            ""
        }
      </form>
    </div>
  )
}

export default App
