import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = ({ getList, renderCount, user }) => {
  const [feeling, updateFeeling] = useState('');
  const [thoughts, updateThoughts] = useState('');
  const dayOfTheWeek = new Date().toLocaleDateString('en-us', { weekday: 'long' }); console.log(dayOfTheWeek);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trackDate = new Date(Date.now()).toLocaleString().split(',')[0].split('/').join('-');

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
      <WelcomeMessage>
        {' '}
        Hello it's
        {' '}
        {dayOfTheWeek}
        , a penny for your thoughts?
      </WelcomeMessage>
      {/* <span>`Hello it's ${dayOfTheWeek}, Penny for your thoughs?` </span> */}
      <form>
        <FormContainer>

          <ThoughtsContainer>

            <h2>Food For Thought</h2>
            <ThoughtInput type="textarea" onChange={(event) => updateThoughts(event.target.value)} />

            <button onClick={(event) => handleSubmit(event)}>Submit</button>

          </ThoughtsContainer>
          <FeelingsContainer>

            <FeelingHeader>Feeling of the Day</FeelingHeader>
            <input
              type="radio"
              className="circle"
              name="feeling"
              value={1}
              id="bad"
              onChange={(event) => updateFeeling(event.target.value)}
            />

            <label className="radio" htmlFor="red">
              <img src="https://emoji.gg/assets/emoji/9528-sad-sweat.png" width="64px" height="64px" alt="sad_sweat" />
            </label>

            <input
              type="radio"
              className="lightred"
              name="feeling"
              value={2}
              id="kindabad"
              onChange={(event) => updateFeeling(event.target.value)}
            />

            <label className="radio" htmlFor="pink">
              <img src="https://emoji.gg/assets/emoji/9004-super-frown.png" width="64px" height="64px" alt="super_frown" />
            </label>

            <input
              type="radio"
              className="circle"
              name="feeling"
              value={3}
              id="medium"
              onChange={(event) => updateFeeling(event.target.value)}
            />

            <label className="radio" htmlFor="white">
              <img src="https://emoji.gg/assets/emoji/2542-imposter.png" width="64px" height="64px" alt="imposter" />
            </label>

            <input
              type="radio"
              className="circle"
              name="feeling"
              value={4}
              id="kindagreat"
              onChange={(event) => updateFeeling(event.target.value)}
            />

            <label className="radio" htmlFor="lightgreen">
              <img src="https://emoji.gg/assets/emoji/8664-coolangel.png" width="64px" height="64px" alt="coolangel" />
            </label>

            <input
              type="radio"
              className="circle"
              name="feeling"
              value={5}
              id="great"
              onChange={(event) => updateFeeling(event.target.value)}
            />

            <label className="radio" htmlFor="green">
              <img src="https://emoji.gg/assets/emoji/8548-birthday.png" width="64px" height="64px" alt="birthday" />
            </label>

          </FeelingsContainer>
        </FormContainer>

      </form>
    </>
  );
};

const FeelingHeader = styled.h2`
margin-bottom: 35px;
`;

const WelcomeMessage = styled.h2`

margin-bottom: 35px;
margin-top: 35px;
`;

const ThoughtInput = styled.input.attrs((props) => ({
  type: 'textarea',
  size: props.size || '2.5em',
}))`
  margin-top: 20px;
  color: #000000;
  font-size: 1em;
  border: 2px solid #000000;
  border-radius: 3px;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const FeelingsContainer = styled.div`
padding: '50px';
max-height: '50px';
max-width: '100px';
margin-top: '100px';
grid-row-start: 1;

`;

const ThoughtsContainer = styled.div`
grid-column-start: col-start 2;
height: '50px';
width: '100px';

`;

const FormContainer = styled.div`
grid-column-start: col-start 1;
display: grid;
`;

export default Form;
