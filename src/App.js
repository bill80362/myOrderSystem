import React, { useContext, useReducer } from 'react';

import ShowArea from './components/ShowArea'
import Buttons from './components/Buttons'
import { Color } from "./components/color";

export default function App() {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  );
}


