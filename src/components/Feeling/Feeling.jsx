import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Feeling() {

  const [feeling, setFeeling] = useState('');

  const history = useHistory();


  const submitFeeling = (event) => {
    event.preventDefault();
    history.push('/understanding');
  }

  return (
    <>
      <form onSubmit={submitFeeling}>
        <input
          onChange={(event) => setFeeling(event.target.value)}
          type="number"
          min="0" 
          max="5"
          placeholder='How you feeling?'
          value={feeling}
        />

        <button type='submit'>Next</button>
      </form>
    </>
  );
}

export default Feeling;