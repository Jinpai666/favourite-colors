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


export default class FilterColors extends Component <MyProps> {


    render() {
        return (
            <>
                <form>
                    <p onClick={()=> console.log(this.props.colors)}>klik</p>
                    <label htmlFor="filterColors">Choose color:</label>
                    <select name="filterColors" id="filterColors">
                        <option value="1">Filter 1</option>
                        <option value="2">Filter 2</option>
                        <option value="3">Filter 3</option>
                        <option value="4">Filter 4</option>
                    </select>
                </form>
                <div className={"generator"}>
                    {this.props.colors.map((color,idx)=>(
                            //wiem że w poleceniu jest zabronione stylowanie inline, ale w tym przypadku
                            // wydaje mi się jak sensowne rozwiązanie
                            // i jest to jedyny wyjątek
                            <div className={"generator__colorContainer"} key={idx}>
                                <div className="generator__color">
                                    <div className="generator__presentation" style={{backgroundColor: `${color.code}`}}/>
                                    <p>{color.code}</p>
                                </div>
                                <button className="generator__button-remove" role={"button"}>remove from favorites</button>
                            </div>
                        )
                    )}
                </div>
            </>
        );
    }
}


