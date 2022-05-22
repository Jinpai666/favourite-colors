import React from 'react';


const FilterColors = () => {
    return (
        <form>
            <label htmlFor="filterColors">Choose color:</label>
            <select name="filterColors" id="filterColors">
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
            </select>
        </form>
    );
}

export default FilterColors;
