import React, {useState} from 'react';
import './App.css';
import {hexToHSL, hexToRGB} from "./functions/convert/convertFunctions";
import AddColorForm from "./components/AddColorForm";
import FilterColorsForm from "./components/FilterColorsForm";


const App = () => {


  return (
      <>
          <AddColorForm/>
          <FilterColorsForm/>


      </>
  );
}

export default App;
