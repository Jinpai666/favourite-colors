import React from "react";


interface Colors {
    code: string,
    r: number,
    g: number,
    b: number,
    saturation: number,
}
interface Props {
    predefinedColors: Colors[]
    allColors: Colors[]
    setColors: React.Dispatch<React.SetStateAction<Colors[]>>
    colors: Colors[]
}

const Generator = ({allColors, predefinedColors, setColors, colors}:Props) => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, colors: Colors[], alwaysFilterColors: Colors[]) => {
        const colorToRemove = event.currentTarget.value;
        const predefined = alwaysFilterColors.map(color => color.code);
        const filtered = colors.filter(color => color.code !== colorToRemove);
        const newColors = filtered.filter(color => !predefined.includes(color.code));
        localStorage.setItem('storedColors', JSON.stringify(newColors));
        setColors([...newColors,...predefinedColors]);
    }

    return(
        <div className={"generator"}>
            {colors
                //sort before printing
                .sort((a,b) => a.b < b.b ? 1 : -1)
                .sort((a,b) => a.g > b.g ? 1 : -1)
                .sort((a,b) => a.r < b.r ? 1 : -1)
                .map((color, idx) => (
                    //pamiętam, że w poleceniu jest zabronione stylowanie inline, ale w tym przypadku
                    // wydaje mi się jak sensowne rozwiązanie
                    // i jest to jedyny wyjątek
                    <div className={"generator__colorContainer"} key={idx}>
                        <div className="generator__color">
                            <div className="generator__presentation" style={{backgroundColor: `${color.code}`}}/>
                            <p>{color.code}</p>
                        </div>
                        {!predefinedColors.map(color => color.code).includes(color.code)
                            ? <button className="generator__button-remove" value={color.code}
                                onClick={(event) => handleClick(event, allColors, predefinedColors)}>remove
                        </button>
                            :<button disabled={true}>predefined color</button>}
                    </div>
                )
            )}
        </div>
    )
}
export default Generator;