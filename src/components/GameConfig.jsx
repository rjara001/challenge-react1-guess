import React from 'react';

const GameConfig = ({change, config}) => {
    return <div>
        <h3>Game Config</h3>
        <div>
            <div>
                <label for='lower'>Lower bound: </label>
                <input type='text' name='lower' onChange={change} value={config.lower}></input>
            </div>
            <div>
                <label for='upper'>Upper bound: </label>
                <input type='text' name='upper' onChange={change} value={config.upper}></input>
            </div>
   
    </div></div>
}

export default GameConfig