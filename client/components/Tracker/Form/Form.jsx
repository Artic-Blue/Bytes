import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useUser } from '../../../context/UserContext';

const Form = ({ getList }) => {
  const [feeling, updateFeeling] = useState('');
  const [thoughts, updateThoughts] = useState('');
  const user = useUser();
  console.log('useContext -> ', user);

//// Last changes of Saturday the 11th of December
// working UseContext yay! Remember destructure

  // console.log(props);
  const handleSubmit = (event) => {
    event.preventDefault();
    const trackDate = new Date(Date.now()).toLocaleString().split(',')[0].split('/').join('-');

    axios.post('/tracker/postListItem', {
      feeling, thoughts, trackDate,
    })
      .then(() => {
        getList();
      })
      .catch((err) => console.log('Error here in the post : ', err));
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
