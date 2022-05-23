import React, {useEffect, useState} from 'react';
import AddColorForm from "./components/AddColorForm";
import FilterColorsForm from "./components/FilterColorsForm";
import "./scss/main.scss";
import Generator from "./components/Generator";

const App = () => {

    const colorsFromStorage =  localStorage.getItem('storedColors') && JSON.parse(localStorage.getItem('storedColors') || "");
    const predefinedColors = [
        {
            code: "#FF0000",
            r: 255,
            g: 0,
            b: 0,
            saturation: 100,
        },
        {
            code: "#00FF00",
            r: 0,
            g: 255,
            b:0,
            saturation: 100,
        },
        {
            code: "#0000FF",
            r: 0,
            g: 0,
            b: 255,
            saturation: 100,
        },
    ]
    const allColors = colorsFromStorage
        ? [...colorsFromStorage,...predefinedColors]
        : predefinedColors

    const [colorsToPrint,setColorsToPrint] = useState(allColors);

    useEffect(() =>{
        console.log('zmienilem sie')

    }, [colorsToPrint])

    return (
        <div className="main">
            <AddColorForm
                allColors={allColors}
                colorsFromStorage={colorsFromStorage}
                setColors={setColorsToPrint}
                predefinedColors={predefinedColors}

            />
            <FilterColorsForm allColors={allColors} predefinedColors={predefinedColors} />
            <Generator
                predefinedColors={predefinedColors}
                allColors={allColors}
                setColors={setColorsToPrint}
                colors={colorsToPrint}
            />

            {/*{<button onClick={()=>console.log(allColors)}></button>}*/}

        </div>
    );
}

export default App;
