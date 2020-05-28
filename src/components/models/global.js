import React, { createContext, useReducer } from "react";

/** Color **/
// 創建 context
export const ColorContext = createContext({});
// 創建 reducer
export const colorReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_COLOR":
      return action.color
    default:
      return state
  }
}
//创建 整合组件
export const Color = props => {
  const [color1, dispatch] = useReducer(colorReducer, 'blue')
  return (
    <ColorContext.Provider value={{ color1, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
};

/**
 * TabBarSelected
 */
export const TabBarSelectedContext = createContext({});
export const TabBarSelectedReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return action.TabBarSelected
    default:
      return state
  }
}
export const TabBarSelected = props => {
  const [TabBarSelected, TabBarSelectedDispatch] = useReducer(TabBarSelectedReducer, 'orderTab')
  return (
    <TabBarSelectedContext.Provider value={{ TabBarSelected, TabBarSelectedDispatch }}>
      {props.children}
    </TabBarSelectedContext.Provider>
  );
};

/**
 * OrderTabPage
 */
export const OrderTabPageContext = createContext({});
export const OrderTabPageReducer = (state, action) => {
  switch (action.type) {
    case "List":
      return [action.type,0]
    case "Detail":
      return [action.type,action.detailID]
    default:
      return state
  }
}
export const OrderTabPage = props => {
  const [OrderTabPage, OrderTabPageDispatch] = useReducer(OrderTabPageReducer, ["List",0])
  return (
    <OrderTabPageContext.Provider value={{ OrderTabPage, OrderTabPageDispatch }}>
      {props.children}
    </OrderTabPageContext.Provider>
  );
};