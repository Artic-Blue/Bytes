import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Form = () => {
  const [feeling, updateFeeling] = useState('');
  const [thoughts, updateThoughts] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('feeling: ', feeling, ' thoughts: ', thoughts);
  };

  return (

    <form>
      <h2>Food For Thought</h2>
      <input type="text" onChange={(event) => updateThoughts(event.target.value)} />
      <h2>Feeling of the Day</h2>
      <input type="radio" className="circle" name="feeling" value={1} id="bad" style={{ border: '10px solid #ff0000' }} onChange={(event) => updateFeeling(event.target.value)} />
      <label className="radio" htmlFor="red">bad</label>
      <input type="radio" className="lightred" name="feeling" value={2} id="kindabad" style={{ border: '10px solid #EF959D' }} onChange={(event) => updateFeeling(event.target.value)} />
      <label className="radio" htmlFor="pink">medium bad</label>
      <input type="radio" className="circle" name="feeling" value={3} id="medium" style={{ border: '10px solid #ffffff' }} onChange={(event) => updateFeeling(event.target.value)} />
      <label className="radio" htmlFor="white">medium</label>
      <input type="radio" className="circle" name="feeling" value={4} id="kindagreat" style={{ border: '10px solid #a5f89b' }} onChange={(event) => updateFeeling(event.target.value)} />
      <label className="radio" htmlFor="lightgreen">medium great</label>
      <input type="radio" className="circle" name="feeling" value={5} id="great" style={{ border: '10px solid #00ff4c' }} onChange={(event) => updateFeeling(event.target.value)} />
      <label className="radio" htmlFor="green">great</label>
      <button onClick={(event) => handleSubmit(event)}>Submit</button>
    </form>

  );
};

export default Form;
