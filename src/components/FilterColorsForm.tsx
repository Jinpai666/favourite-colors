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
                        <input onChange={()=>console.log('filtr1')} type="checkbox" id="filter1" name="filter1" value="filer1"/>
                    </div>
                    <div>
                        <label htmlFor="filter2">filter2</label>
                        <input onChange={()=>console.log('filtr2')} type="checkbox" id="filter2" name="filter2" value="filer2"/>
                    </div>
                    <div>
                        <label htmlFor="filter3">filter3</label>
                        <input onChange={()=>console.log('filtr3')} type="checkbox" id="filter3" name="filter3" value="filer3"/>
                    </div>
                    <div>
                        <label htmlFor="filter4">filter4</label>
                        <input onChange={()=>console.log('filtr4')} type="checkbox" id="filter4" name="filter4" value="filer4"/>
                    </div>
                    <div>
                        <label htmlFor="filter5">filter5</label>
                        <input onChange={()=>console.log('filtr5')} type="checkbox" id="filter5" name="filter5" value="filer5"/>
                    </div>
                </form>
            </>
        );
    }
}


