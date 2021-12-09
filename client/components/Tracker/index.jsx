import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Tracker = () => {
  const [feeling, updateFeeling] = useState(3);
  const [thoughts, updateThoughts] = useState('');
  const [thoughtsList, updateThoughtsList] = useState([]);

  useEffect(() => {
    console.log('This works!');
  },[]);

  const handleChange = () => {

  };

  const handleSubmit = () => {

  };

  return (
    <TrackerDiv>
      <h1>Goals</h1>
      <form>
        <h2>Food For Thought</h2>
        <input type="text" />
        <h2>Feeling of the Day</h2>
        <input type="radio" className="circle" name="feeling" value={1} id="bad" style={{ border: '10px solid #ff0000' }} />
        <label className="radio" htmlFor="red">bad</label>
        <input type="radio" className="lightred" name="feeling" value={2} id="kindabad" style={{ border: '10px solid #EF959D' }} />
        <label className="radio" htmlFor="pink">medium bad</label>
        <input type="radio" className="circle" name="feeling" value={3} id="medium" style={{ border: '10px solid #ffffff' }} checked/>
        <label className="radio" htmlFor="white">medium</label>
        <input type="radio" className="circle" name="feeling" value={4} id="kindagreat" style={{ border: '10px solid #a5f89b' }} />
        <label className="radio" htmlFor="lightgreen">medium great</label>
        <input type="radio" className="circle" name="feeling" value={5} id="great" style={{ border: '10px solid #00ff4c' }} />
        <label className="radio" htmlFor="green">great</label>
        <button>Submit</button>
      </form>
      <h2>Log</h2>
    </TrackerDiv>
  );
};

const TrackerDiv = styled.div`

`;

export default Tracker;
