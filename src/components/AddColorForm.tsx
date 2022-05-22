import React, {useState} from 'react';
import {hexToHSL, hexToRGB} from "../functions/convert/convertFunctions";


const AddColors = () => {
    const [inputValue, setInputValue] = useState('');
    const hexRegExp = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i
    const validateInput = (input:string) => {
        console.log(hexRegExp.test(input))
    };

    return (
        <>
            <button onClick={()=>validateInput(inputValue)}>test</button>
            <form onSubmit={()=>console.log('submituje')}>
                <label htmlFor="addColorForm">Please provide new color:</label>
                <span>#</span>
                <input
                    name="addColorForm"
                    type="text"
                    maxLength={6}
                    onChange={(event) => setInputValue("#" + event.target.value)}
                    pattern="[a-zA-Z0-9]+"
                />
            </form>
            <p style={{color:`${inputValue ? inputValue : "red"}`}}>{inputValue}</p>
            <p style={{color:`${inputValue ? inputValue : "red"}`}}>{hexToRGB(inputValue)}</p>
            <p style={{color:`${inputValue ? inputValue : "red"}`}}>{hexToHSL(inputValue)}</p>
        </>

    );
}

export default AddColors;
