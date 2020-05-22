import React,{useContext} from 'react'

import { ColorContext } from "./models/colorModel";

const ShowArea = () => {
    const { color } = useContext(ColorContext);
  return (
    <div style={{color: color }}>字体颜色展示为blue</div>
  )
}

export default ShowArea