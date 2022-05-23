import React, {Component} from 'react';
import Generator from "./Generator";

interface Colors  {
    code: string,
    r: number,
    g: number,
    b: number,
    saturation: number,
}
type MyProps = {
    allColors: Colors[],
    predefinedColors : Colors[]
}
type MyState ={

}

export default class FilterColors extends Component <MyProps> {

    render() {
        return (
            <>
                <form>
                    <div>
                        <label htmlFor="filter1">filter1</label>
                        <input type="radio" id="filter1" name="filter1" value="filer1"/>
                    </div>
                    <div>
                        <label htmlFor="filter2">filter2</label>
                        <input type="radio" id="filter2" name="filter2" value="filer2"/>
                    </div>
                    <div>
                        <label htmlFor="filter3">filter3</label>
                        <input type="radio" id="filter3" name="filter3" value="filer3"/>
                    </div>
                    <div>
                        <label htmlFor="filter4">filter4</label>
                        <input type="radio" id="filter4" name="filter4" value="filer4"/>
                    </div>
                    <div>
                        <label htmlFor="filter5">filter5</label>
                        <input type="radio" id="filter5" name="filter5" value="filer5"/>
                    </div>
                    <button onClick={()=>console.log('fil;truje')}>filter</button>
                </form>
            </>
        );
    }
}


