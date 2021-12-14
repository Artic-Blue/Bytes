import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = ({ getList, renderCount, user }) => {
  const [feeling, updateFeeling] = useState('');
  const [thoughts, updateThoughts] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const trackDate = new Date(Date.now()).toLocaleString().split(',')[0].split('/').join('-');
    const dayOfTheWeek = new Date().toLocaleDateString('en-us', { weekday: 'long' }); console.log(dayOfTheWeek);


    axios.post('/tracker/postListItem', {
      feeling, thoughts, trackDate, user,
    })
      .then(() => {
        getList(renderCount);
      })
      .catch((err) => console.log('Oh no! There was an error trying to log your feeling :( ', err));
  };

  return (
    <>
    <h2> Hello it's ${dayOfTheWeek}, Penny for your thoughs?` </h2>
        {/* <span>`Hello it's ${dayOfTheWeek}, Penny for your thoughs?` </span> */}
      <form>
        <FormContainer>




          <ThoughtsContainer>

            <h2>Food For Thought</h2>
            <input type="text" onChange={(event) => updateThoughts(event.target.value)} />

            <button onClick={(event) => handleSubmit(event)}>Submit</button>

          </ThoughtsContainer>
          <FeelingsContainer>

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

          </FeelingsContainer>
        </FormContainer>

      </form>
    </>
  );
};

const FeelingsContainer = styled.div`
justify-content: space-between;

`;

const ThoughtsContainer = styled.div`
justify-content: space-between;
grid-column-start: col-start 2;

`;

const FormContainer = styled.div`
grid-column-start: col-start 1;

grid-template-rows: 2;
display: grid;
`;

export default Form;
