import React, {useEffect, useState} from 'react';
import AddColorForm from "./components/AddColorForm";
import FilterColorsForm from "./components/FilterColorsForm";
import "./scss/main.scss";
import Generator from "./components/Generator";
import Header from "./components/Header";

const App = () => {
//colors
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
//filtering
    const [redFilter, setRedFilter] = useState(false)
    const [greenFilter, setGreenFilter] = useState(false)
    const [blueFilter, setBlueFilter] = useState(false)
    const [saturationFilter, setSaturationFilter] = useState(false)
    const filterFunctions = {
        red: setRedFilter,
        green: setGreenFilter,
        blue: setBlueFilter,
        saturation: setSaturationFilter,
    }
    const filters = {
        red: redFilter,
        green: greenFilter,
        blue: blueFilter,
        saturation: saturationFilter,
    }
    useEffect(()=>{
        console.log('test')
        const red = redFilter ? colorsToPrint.filter(color=>color.r > 127) : colorsToPrint
        const green = greenFilter ?  red.filter(color=>color.g > 127) : red;
        const blue = blueFilter ? green.filter(color=>color.b > 127) : green
        const saturation = saturationFilter ? blue.filter(color=>color.saturation > 50) : blue;
        setColorsToPrint(saturation)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[redFilter, greenFilter, blueFilter, saturationFilter])
    return (
        <div className="main">
            <Header/>
            <AddColorForm
                allColors={allColors}
                colorsFromStorage={colorsFromStorage}
                setColors={setColorsToPrint}
                predefinedColors={predefinedColors}
            />
            <FilterColorsForm
                allColors={allColors}
                predefinedColors={predefinedColors}
                filterFunctions={filterFunctions}
                filters={filters}
            />
            <Generator
                predefinedColors={predefinedColors}
                allColors={allColors}
                setColors={setColorsToPrint}
                colors={colorsToPrint}
            />
        </div>
    );
}

export default App;
