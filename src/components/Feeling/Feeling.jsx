import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Feeling() {

  // hold feeling input data in state
  const [feeling, setFeeling] = useState('');

  // make dispatch available for use in function
  const dispatch = useDispatch();

  // make history available in function for url routing
  const history = useHistory();

  // capture feeling input value and dispatch to reducer, and route to next page
  const submitFeeling = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_FEELING',
      payload: feeling
    });
    history.push('/understanding');
  } // end submitFeeling function

  // render feeling input
  return (
    <>
      <form onSubmit={submitFeeling}>
        <label htmlFor="feeling">From 1 to 5, how are you feeling?</label>
        <input
          onChange={(event) => setFeeling(event.target.value)}
          type="number"
          min="0"
          max="5"
          required
          placeholder="Feels?"
          value={feeling}
        />

        <button type="submit">Next</button>
      </form>
    </>
  );
} // end Feeling function

export default Feeling;