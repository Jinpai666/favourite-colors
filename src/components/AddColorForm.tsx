import React, {useState} from 'react';
import {getSaturation, getRGB} from "../functions/convert/convertFunctions";


const AddColors = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputIsIncorrect, setInputIsIncorrect] = useState(false)
    const hexRegExp = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const correct = ()=>{
            setInputIsIncorrect(false);
            const colorToSave = {
                code: inputValue,
                r: Number(getRGB(inputValue)[0]),
                g: Number(getRGB(inputValue)[1]),
                b: Number(getRGB(inputValue)[2]),
                saturation: getSaturation(inputValue)
            }
            const colorsFromStorage =  localStorage.getItem('storedColors') && JSON.parse(localStorage.getItem('storedColors') || "");
            const newColors = colorsFromStorage
                ? [...colorsFromStorage, colorToSave]
                : [colorToSave]
            localStorage.setItem('storedColors', JSON.stringify(newColors));
            console.log(newColors)
        }
        const incorrect = ()=>{
            setInputIsIncorrect(true);
            console.log('niepoprawne')
        }
        event.preventDefault();
        hexRegExp.test(inputValue)
            ? correct()
            : incorrect()
    };


    return (
        <>
            <form className="addForm form" onSubmit={event => handleSubmit(event)}>
                <label className="form__label" htmlFor="addColorForm">Please provide new color:</label>
                <span>#</span>
                <input
                    name="addColorForm"
                    type="text"
                    maxLength={6}
                    onChange={(event) => setInputValue("#" + event.target.value)}
                    pattern="[a-zA-Z0-9]+"
                />
                <button type={"submit"}>submit</button>

            </form>
            <p>{inputIsIncorrect? "Please provide correct hex format" : ""}</p>
            {/*<p style={{color:`${inputValue ? inputValue : "red"}`}}>{inputValue}</p>*/}
            {/*<p style={{color:`${inputValue ? inputValue : "red"}`}}>*/}
            {/*    <span>{getRGB(inputValue)[0]}</span>,*/}
            {/*    <span>{getRGB(inputValue)[1]}</span>,*/}
            {/*    <span>{getRGB(inputValue)[2]}</span>*/}
            {/*    </p>*/}
            {/*<p style={{color:`${inputValue ? inputValue : "red"}`}}>{getSaturation(inputValue)}</p>*/}
        </>
    );
}

export default AddColors;
