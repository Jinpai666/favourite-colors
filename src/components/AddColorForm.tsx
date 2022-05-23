import React, {useState} from 'react';
import {getSaturation, getRGB} from "../functions/convert/convertFunctions";

interface Colors {
            code: string,
            r: number,
            g: number,
            b: number,
            saturation: number,
     }
interface Props {
    allColors: Colors[]
    colorsFromStorage: Colors[]
    predefinedColors: Colors[]
    setColors: React.Dispatch<React.SetStateAction<Colors[]>>

}


const AddColors = ({allColors, colorsFromStorage, setColors, predefinedColors}:Props) => {
    const [inputValue, setInputValue] = useState('');
    const [inputIsIncorrect, setInputIsIncorrect] = useState(false);
    const [isInStorage, setIsInStorage] = useState(false);
    const hexRegExp = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i
    const codes = allColors.map((color:Colors)=>color.code)


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        const correct = () => {
            event.preventDefault();
            const colorToSave = {
                code: inputValue.toUpperCase(),
                r: Number(getRGB(inputValue)[0]),
                g: Number(getRGB(inputValue)[1]),
                b: Number(getRGB(inputValue)[2]),
                saturation: getSaturation(inputValue)
            }
            const newColors = colorsFromStorage
                ? [...colorsFromStorage, colorToSave]
                : [colorToSave]
            localStorage.setItem('storedColors', JSON.stringify(newColors));
            setColors([...newColors, ...predefinedColors]);
            setIsInStorage(false);
            setInputIsIncorrect(false);
            setInputValue("")
            return;
        }

        const incorrect = () => {
            setIsInStorage(false);
            event.preventDefault();
            setInputIsIncorrect(true);
            return;
        }

        const inStorage = () => {
            setInputIsIncorrect(false)
            event.preventDefault();
            setIsInStorage(true);
            return;
        }

        if(!codes.includes(inputValue.toUpperCase())){
            hexRegExp.test(inputValue)
                ? correct()
                : incorrect();
            return
        }
        inStorage();
    };

    return (
        <>
            <form className="addForm" onSubmit={event => handleSubmit(event)}>
                <label className="addForm__label" htmlFor="addColorForm">Please provide new color's hex code:</label>
                <div>
                    <span>#</span>
                    <input
                        className="addForm__input"
                        name="addColorForm"
                        type="text"
                        maxLength={6}
                        onChange={(event) => setInputValue("#" + event.target.value)}
                        pattern="[a-zA-Z0-9]+"
                    />
                </div>
                <button className={"addForm__button"} type={"submit"}>Submit</button>
            </form>
            <p className={"addForm__errorMessage"}>{inputIsIncorrect? "Please provide correct hex format" : ""}{isInStorage && "Color already saved"}</p>
        </>
    );
}

export default AddColors;
