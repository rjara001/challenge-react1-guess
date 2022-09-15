import React, {useState} from 'react';


const GuessNumber = ({randomicNumber, config}) => {
  const [messageSuggestion, setMessageSuggestion] = useState();
  const [userGuessValue, setUserGuessValue] = useState();
  
  const handleChangeUserGuessValue = (e) =>{
    setUserGuessValue(e.target.value);
  }

  const handleClickMakeGuess = () => {
    switch(true)
    {
      case userGuessValue==randomicNumber:
       { setMessageSuggestion('You got it!');
        break;}
      case userGuessValue<randomicNumber:
        { setMessageSuggestion('Nope, Upper');
        break;}
      default:
        { setMessageSuggestion('Nope, Lower');
        break;}
    }

  }

    return <div>
        <h3>Play!</h3>

      <div className='prompt'>Guess the number between {config.lower} and {config.upper}</div>
      <div class='prompt'></div>
      <div class='last-guess'>Last guess:{(userGuessValue)?userGuessValue:'none'}</div>      
      <div className='status'>{messageSuggestion}</div>
      <label for='guess'>Guess:</label>
      <input type='text' name='guess' value={userGuessValue} onChange={handleChangeUserGuessValue}></input>
      <button name='attempt' onClick={handleClickMakeGuess}>Make guess</button>
    </div>
}

export default GuessNumber