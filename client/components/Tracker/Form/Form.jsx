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
            <ThoughtInput type="text" onChange={(event) => updateThoughts(event.target.value)} />

            <button onClick={(event) => handleSubmit(event)}>Submit</button>

          </ThoughtsContainer>
          <FeelingsContainer>

            <FeelingHeader>Feeling of the Day</FeelingHeader>
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

const StyledForm = styled.form`

	&#feeling {
		input[type="radio"] {
			-webkit-appearance: none;
			width: 90px;
			height: 90px;
			border: none;
			cursor: pointer;
			transition: border .2s ease;
			filter: grayscale(100%);
			margin: 0 5px;
			transition: all .2s ease;

			&:hover, &:checked {
				filter:	grayscale(0);
			}

			&:focus {
				outline: 0;
			}

			&.happy {
				background: url('https://res.cloudinary.com/turdlife/image/upload/v1492864443/happy_ampvnc.svg') center;
				background-size: cover;
			}

			&.neutral {
				background: url('https://res.cloudinary.com/turdlife/image/upload/v1492864443/neutral_t3q8hz.svg') center;
				background-size: cover;
			}
			&.sad {
				background: url('https://res.cloudinary.com/turdlife/image/upload/v1492864443/sad_bj1tuj.svg') center;
				background-size: cover;
			}
		}

}
`

const FeelingHeader = styled.h2`
margin-bottom: 35px;
`

const WelcomeMessage = styled.h2`

margin-bottom: 35px;
margin-top: 35px;
`

const ThoughtInput = styled.input.attrs((props) => ({
  // we can define static props
  type: 'text',
  // or we can define dynamic ones
  size: props.size || '2em',
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
/* background-color: teal; */
max-height: '50px';
max-width: '100px';
margin-top: '100px';
grid-row-start: 1;
`;

const ThoughtsContainer = styled.div`
/* background-color: pink; */
/* justify-content: space-between; */
grid-column-start: col-start 2;
height: '50px';
width: '100px';

`;

const FormContainer = styled.div`
grid-column-start: col-start 1;
display: grid;
`;

export default Form;
