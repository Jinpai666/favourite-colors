import React, {Component} from 'react';

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
// type MyState ={
//
// }

export default class FilterColors extends Component <MyProps> {

    render() {
        return (
            <>
                <form>
                    <div>
                        <label htmlFor="filter1">Red {'>'} 50%</label>
                        <input onChange={()=>console.log('filtr1')} type="checkbox" id="filter1" name="filter1" value="filer1"/>
                    </div>
                    <div>
                        <label htmlFor="filter2">Green {'>'} 50%</label>
                        <input onChange={()=>console.log('filtr2')} type="checkbox" id="filter2" name="filter2" value="filer2"/>
                    </div>
                    <div>
                        <label htmlFor="filter3">Blue {'>'} 50%</label>
                        <input onChange={()=>console.log('filtr3')} type="checkbox" id="filter3" name="filter3" value="filer3"/>
                    </div>
                    <div>
                        <label htmlFor="filter4">Saturation {'>'} 50%</label>
                        <input onChange={()=>console.log('filtr4')} type="checkbox" id="filter4" name="filter4" value="filer4"/>
                    </div>
                </form>
            </>
        );
    }
}


