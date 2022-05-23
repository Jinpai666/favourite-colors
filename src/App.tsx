import React from 'react';
import AddColorForm from "./components/AddColorForm";
import FilterColorsForm from "./components/filterForm/FilterColorsForm";
import "./scss/main.scss";

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

    return (
        <div className="main">
            <AddColorForm allColors={allColors} colorsFromStorage={colorsFromStorage} />
            <FilterColorsForm colors={allColors}/>
            {/*{<button onClick={()=>console.log(allColors)}></button>}*/}

        </div>
    );
}

export default App;
