import { createContext } from "react";

// 創建 context
export const ColorContext = createContext({});

// 創建 reducer
export const colorReducer = (state, action) => {
  switch(action.type) {
    case "UPDATE_COLOR":
      return action.color
    default:
      return state  
  }
}