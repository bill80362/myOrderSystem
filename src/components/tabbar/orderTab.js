import React, { useState, useContext } from 'react';
import { NavBar, Menu, ActivityIndicator, List, 
    WhiteSpace,Card,Button,InputItem,SegmentedControl,WingBlank } from 'antd-mobile'
import './orderTab.css';

import { OrderTabPageContext,TabBarSelectedContext } from "../models/global";

//List
const Item = List.Item;
const Brief = Item.Brief;

export default () => {
    //頁面
    const { OrderTabPage, OrderTabPageDispatch } = useContext(OrderTabPageContext);
    const { TabBarSelected,TabBarSelectedDispatch } = useContext(TabBarSelectedContext);
    //菜單預設關閉
    const [MenuShow, setMenuShow] = useState(false);
    const [MenuLabel, setMenuLabel] = useState('');
    const [MenuValue, setMenuValue] = useState([1]);
    //菜單分類list
    const MenuData = [
        {
            value: '1',
            label: '套餐',
        }, {
            value: '2',
            label: '焗烤麵/飯',
        },
        , {
            value: '3',
            label: '燉飯/燉麵/炒飯',
        },
        {
            value: '4',
            label: '甜品',
        },
        {
            value: '5',
            label: '飲料',
        },
    ];
    //
    const onChange = (value) => {
        //關閉菜單
        setMenuShow(false);
        //
        let label = MenuLabel;
        MenuData.forEach((MenuData) => {
            if (MenuData.value === value[0]) {
                label = MenuData.label;
                if (MenuData.children && value[1]) {
                    MenuData.children.forEach((cItem) => {
                        if (cItem.value === value[1]) {
                            label += ` ${cItem.label}`;
                        }
                    });
                }
            }
        });
        setMenuLabel(label);
        setMenuValue(value);
        // console.log(value);

    }
    //菜單
    const menuEl = (
        <Menu
            className="single-foo-menu"
            data={MenuData}
            value={MenuValue}
            level={1}
            onChange={onChange}
        // height={document.documentElement.clientHeight * 0.6}
        />
    );
    //左上方顯示
    const leftContentBtn = (e) => {
        switch (OrderTabPage[0]) {
            case "List":
                return <div onClick={handleClick}>
                    <img style={{verticalAlign:'middle'}} src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg" className="am-icon am-icon-md" alt="" />
                    菜單</div>
                break;
            case "Detail":
                return <div onClick={() => OrderTabPageDispatch({ type: "List" })}> {'<'} </div>
                break;
            default:
                break;
        }

    }
    //按下菜單按鈕
    const handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        //開啟menu
        setMenuShow(!MenuShow);
    }
    //
    const loadingEl = (
        <div style={{ position: 'absolute', width: '80%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
            <ActivityIndicator size="large" />
        </div>
    );
    //
    const PageRender = () => {
        // console.log(OrderTabPage[0])
        switch (OrderTabPage[0]) {
            case "List":
                return <OrderPage />
                break;
            case "Detail":
                return <OrderDeatailPage />
                break;
            default:
                break;
        }
    }
    return (
        <div style={{ height: '100%' }}>
            {/* 上方標題區 */}
            <div style={{ position: 'fixed', width: '100%', zIndex: '999' }}>
                <NavBar
                    className="top-nav-bar"
                    mode="dark"
                    leftContent={leftContentBtn()}
                    rightContent={
                    <div onClick={()=>{TabBarSelectedDispatch({ type: "UPDATE", TabBarSelected: "checkTab" });}} style={{textDecoration:'underline'}}>$ 520 </div>
                }
                >
                    點餐區
                </NavBar>
            </div>
            {/* 因為標題區浮起，需要最上方留45px高度，才能不被瀏海蓋到 */}
            <div style={{ height: '45px' }}></div>
            {/* 菜單分類 */}
            {MenuShow ? MenuData ? menuEl : loadingEl : null}
            {/* 內容區 */}
            <PageRender />
            {/* 底下要閃開TabBar */}
            <WhiteSpace size="xl" />  
            <WhiteSpace size="xl" />  
            <WhiteSpace size="xl" /> 
        </div>
    )
}

const OrderPage = () => {
    //頁面
    const { OrderTabPageDispatch } = useContext(OrderTabPageContext);
    return (
        <List renderHeader={() => '套餐'} className="my-list">
            <Item
                arrow="horizontal"
                thumb="https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2017/01/butter-chicken.jpg?itok=TJhCIClB"
                multipleLine
                onClick={() => { OrderTabPageDispatch({ type: "Detail", detailID: 1 }) }}
            >
                套餐-紅酒燉牛肉飯
            <Brief>紅酒醬汁、牛肉</Brief>
            </Item>
            <WhiteSpace size="sm" />
            <Item
                arrow="horizontal"
                thumb="https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2020/01/gnocchi.jpg?itok=t8nDKMYu"
                multipleLine
                onClick={() => { OrderTabPageDispatch({ type: "Detail", detailID: 1 }) }}
            >
                套餐-燒烤嫩雞排
            <Brief>紅酒醬汁、牛肉</Brief>
            </Item>
            <WhiteSpace size="sm" />
            <Item
                arrow="horizontal"
                thumb="https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe_images/classic-lasange.jpg?itok=07iccUUm"
                multipleLine
                onClick={() => { OrderTabPageDispatch({ type: "Detail", detailID: 1 }) }}
            >
                套餐-辣味香醬燒烤雞排
            <Brief>紅酒醬汁、牛肉</Brief>
            </Item>
            <WhiteSpace size="sm" />
            <Item
                arrow="horizontal"
                thumb="https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2016/07/thai.jpg?itok=J75HT1u7"
                multipleLine
                onClick={() => { OrderTabPageDispatch({ type: "Detail", detailID: 1 }) }}
            >
                套餐-香草燒烤春雞
            <Brief>紅酒醬汁、牛肉</Brief>
            </Item>
            <WhiteSpace size="sm" />
            <Item
                arrow="horizontal"
                thumb="https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2020/02/piri-piri-chicken-with-smashed-sweet-potatoes-broccoli.jpg?itok=eY9FJomj"
                multipleLine
                onClick={() => { OrderTabPageDispatch({ type: "Detail", detailID: 1 }) }}
            >
                套餐-茄汁羅勒鮮魚飯
            <Brief>紅酒醬汁、牛肉</Brief>
            </Item>
            <WhiteSpace size="sm" />
            <Item
                arrow="horizontal"
                thumb="https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2016/06/veggie-chilli.jpg?itok=Mi_aCxb3"
                multipleLine
                onClick={() => { OrderTabPageDispatch({ type: "Detail", detailID: 1 }) }}
            >
                套餐-野菇焗烤起司番茄
            <Brief>紅酒醬汁、牛肉</Brief>
            </Item>
            <WhiteSpace size="sm" />
            <Item
                arrow="horizontal"
                thumb="https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe_images/recipe-image-legacy-id--1259495_9.jpg?itok=Q9-dtftK"
                multipleLine
                onClick={() => { OrderTabPageDispatch({ type: "Detail", detailID: 1 }) }}
            >
                套餐-素食野菜焗烤
            <Brief>紅酒醬汁、牛肉</Brief>
            </Item>
        </List>
    )
}

const OrderDeatailPage = () => {
    return (
        <div>
        <WhiteSpace size="lg" />
        <Card full>
          <Card.Header
            title="套餐-紅酒燉牛肉飯"
            // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<span>NT$ 45元</span>}
          />
          <Card.Body>
              <div style={{textAlign:"center"}}>
                <img height="200" src="https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2017/01/butter-chicken.jpg?itok=TJhCIClB" />
              </div>
            <div>
                碳烤美國蘆筍搭配的是鴨蛋黃沾醬，選用黑麥製作巧巴達麵包，咀嚼時感受到微微麥香<br />
                漬物是番茄跟涼拌苦瓜，處理到一點雜味都沒有，還很解膩<br />
                桂丁雞的皮非常薄，油脂也沒那麼多，將表皮煎到焦脆，入口時非常香。
            </div>
            <div>
                <List>
                    <InputItem
                    type="money"
                    defaultValue={2}
                    ><div>餐點份數</div></InputItem>

                </List>
                <List>
                    <InputItem
                    type="money"
                    defaultValue={90}
                    editable={false}
                    >小計</InputItem>
                </List>
                <WhiteSpace size="lg" />
                <List>
                    <SegmentedControl values={['無糖', '微糖','少糖','正常']} />
                </List>
                <WhiteSpace size="lg" />
                <List>
                    <SegmentedControl values={['去冰', '微冰','少冰','正常']} />
                </List>
                <WhiteSpace size="lg" />
                <List>
                    <Button type="primary" size="small">加入點餐單</Button>
                </List>
                <WhiteSpace size="lg" />  
            </div>
          </Card.Body>
          {/* <Card.Footer content="NT$ 45 元" extra={<div>請選擇 甜度、冰塊</div>} /> */}
        </Card>
      </div>
    )

}





