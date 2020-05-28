import React, { useContext, useReducer } from 'react';
import { TabBar,WhiteSpace } from 'antd-mobile';

import { TabBarSelectedContext } from "../models/global";
import './TabBar.css'

import orderTab from './orderTab'
import checkTab from './checkTab'

export default () => {
    const { TabBarSelected,TabBarSelectedDispatch } = useContext(TabBarSelectedContext);
    return (
        <TabBar
            unselectedTintColor="black"
            tintColor="white"
            barTintColor="#108ee9"
        >
            <TabBar.Item
                title="點餐"
                key="orderTab"
                icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://image.flaticon.com/icons/svg/883/883806.svg) center center /  21px 21px no-repeat'
                }}
                />
                }
                selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://image.flaticon.com/icons/png/512/883/883765.png) center center /  21px 21px no-repeat'
                }}
                />
                }
                selected={TabBarSelected === 'orderTab'}
                onPress={() => {
                  TabBarSelectedDispatch({ type: "UPDATE", TabBarSelected: "orderTab" });
                }}
                data-seed="logId"
            >
                {orderTab()}
            </TabBar.Item>
            <TabBar.Item
                icon={
                    <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://www.flaticon.com/premium-icon/icons/svg/2931/2931365.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                }
                selectedIcon={
                    <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://www.flaticon.com/premium-icon/icons/svg/2931/2931182.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                }
                title="結帳"
                key="checkTab"
                selected={TabBarSelected === 'checkTab'}
                onPress={() => {
                  TabBarSelectedDispatch({ type: "UPDATE", TabBarSelected: "checkTab" });
                }}
                data-seed="logId1"
            >
                {checkTab()}
                <WhiteSpace size="lg" />
            </TabBar.Item>
        </TabBar>
    )
}