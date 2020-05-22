import React, { createContext,useReducer } from "react";
import { ColorContext,colorReducer } from "./models/colorModel";


/**
 * 创建一个 Color 组件
 * Color 组件包裹的所有子组件都可以通过调用 ColorContext 访问到 value
 */
export const Color = props => {
    const [color, dispatch] = useReducer(colorReducer, 'blue')
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
};
