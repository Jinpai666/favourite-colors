import React, {Component} from 'react';

interface Colors  {
    code: string,
    r: number,
    g: number,
    b: number,
    saturation: number,
}
type MyProps = {
    colors: Colors[]
}
type MyState ={

}

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

export default class FilterColors extends Component <MyProps> {

    render() {
        return (
            <>
                <form>
                    <label htmlFor="filterColors">Choose color:</label>
                    <select name="filterColors" id="filterColors">
                        <option value="1">Filter 1</option>
                        <option value="2">Filter 2</option>
                        <option value="3">Filter 3</option>
                        <option value="4">Filter 4</option>
                    </select>
                </form>
                {this.props.colors.map((color,idx)=>(
                    <p key={idx}>{color.code}<span style={{backgroundColor: `${color.code}`}}>square</span></p>
                    )
                )}
            </>
        );
    }
}


