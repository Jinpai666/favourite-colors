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
    filterFunctions: {
        red:  React.Dispatch<React.SetStateAction<boolean>>,
        green:  React.Dispatch<React.SetStateAction<boolean>>,
        blue:  React.Dispatch<React.SetStateAction<boolean>>,
        saturation:  React.Dispatch<React.SetStateAction<boolean>>,
    }
    filters:{
        red: boolean,
        green: boolean,
        blue: boolean,
        saturation: boolean,
    }
}
// type MyState ={
//
// }

export default class FilterColors extends Component <MyProps> {

    render() {
        return (
            <>
                <h2 className={"filterForm__header"}>Filters:</h2>
                <form>
                    <div className={"filterForm__filter"}>
                        <label htmlFor="filter1">Red {'>'} 50%</label>
                        <input
                            onChange={()=>this.props.filterFunctions.red(!this.props.filters.red)}
                            type="checkbox"
                            id="redFilter"
                            name="redFilter"
                        />
                    </div>
                    <div className={"filterForm__filter"}>
                        <label htmlFor="filter2">Green {'>'} 50%</label>
                        <input
                            onChange={()=>this.props.filterFunctions.green(!this.props.filters.green)}
                            type="checkbox"
                            id="greenFilter"
                            name="greenFilter"
                        />
                    </div>
                    <div className={"filterForm__filter"}>
                        <label htmlFor="filter3">Blue {'>'} 50%</label>
                        <input
                            onChange={()=>this.props.filterFunctions.blue(!this.props.filters.blue)}
                            type="checkbox"
                            id="blueFilter"
                            name="blueFilter"
                        />
                    </div>
                    <div className={"filterForm__filter"}>
                        <label htmlFor="filter4">Saturation {'>'} 50%</label>
                        <input
                            onChange={()=>this.props.filterFunctions.saturation(!this.props.filters.saturation)}
                            type="checkbox"
                            id="saturationFilter"
                            name="saturationFilter"
                        />
                    </div>
                </form>
            </>
        );
    }
}


