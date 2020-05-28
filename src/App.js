import React, { useState, useEffect } from 'react';


import TabBar from './components/tabbar/TabBar'
import { TabBarSelected,OrderTabPage } from "./components/models/global";

export default function () {
  // const [screenHeight, setscreenHeight] = useState(document.documentElement.clientHeight);

  return (
    <div>
        <TabBarSelected>
          <OrderTabPage>
            <TabBar />
          </OrderTabPage>
        </TabBarSelected>
    </div>
  );
}


