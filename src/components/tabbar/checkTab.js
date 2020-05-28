import React from 'react';
import { NavBar,List,WhiteSpace,Button,InputItem,Modal  } from 'antd-mobile'

const alert = Modal.alert;

const Item = List.Item;
const Brief = Item.Brief;

export default () => {
    return (
        <div>
          {/* 上方標題區 */}
          <NavBar
          leftContent={<div>聯絡店家</div>}
          rightContent={<div>歷史結帳單</div>}
          mode="dark"
          // icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg" className="am-icon am-icon-md" alt="" />}
          // onLeftClick={this.handleClick}
          className="top-nav-bar"
          >
          結帳區
          </NavBar>
          {/* 內容區 */}
          <List renderHeader={() => '結帳單-消費清單明細'} >
            <Item multipleLine align="top" extra={<div><div style={{color:'red'}}>[刪除]</div><div>$ 120</div></div>} 
              // arrow="horizontal"
              thumb="https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2017/01/butter-chicken.jpg?itok=TJhCIClB"
            >
              套餐-紅酒燉牛肉飯
              <Brief>
              飲料 無糖、去冰 <br />
              甜點 蛋糕 <br />
              其他 加飯+10 <br />
              </Brief>
            </Item>
            <WhiteSpace size="sm" />
            <Item multipleLine align="top" extra={<div><div style={{color:'red'}}>[刪除]</div><div>$ 120</div></div>} 
              // arrow="horizontal"
              thumb="https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2017/01/butter-chicken.jpg?itok=TJhCIClB"
            >
              套餐-紅酒燉牛肉飯
              <Brief>
              飲料 無糖、去冰 <br />
              甜點 蛋糕 <br />
              其他 加飯+10 <br />
              </Brief>
            </Item>
          </List>
          <List>
            <Item extra={<div style={{fontSize:'20px',color:'red'}}>$ 520</div>}>總價</Item>
          </List>
          <WhiteSpace size="lg" />
          <List>
            <InputItem type="text"
              placeholder="點餐人姓名"
            >姓名</InputItem>
            <InputItem type="money"
            moneyKeyboardAlign="left"
              placeholder="please input account"
            >手機</InputItem>
            <InputItem
              placeholder="其他備註"
            />
 
          </List>
          <WhiteSpace size="lg" />
          <List>
            <Button type="primary" size="small" onClick={showAlert}>確認結帳</Button>
          </List>
            {/* 底下要閃開TabBar */}
            <WhiteSpace size="xl" />  
            <WhiteSpace size="xl" />  
            <WhiteSpace size="xl" /> 
        </div>
    )
}

const showAlert = () => {
  //結帳清單二次確認
  const checkDetailList = <div>
    {/* 點餐人 */}
    <div style={{color:'#108ee9'}}>馬很久 0912-345678</div>
    {/* 餐點 */}
    <div style={{fontSize:'14px',color:'black'}}>
      1.套餐-紅酒燉牛肉飯<br />
      2.套餐-紅酒燉牛肉飯<br />
      3.套餐-紅酒燉牛肉飯<br />
      4.套餐-紅酒燉牛肉飯<br />
      5.套餐-紅酒燉牛肉飯<br />
      6.套餐-紅酒燉牛肉飯<br />
      7.套餐-紅酒燉牛肉飯<br />
    </div>
    <div style={{color:'red'}}>
      總價:$ 520元
    </div>
    <div>其他備註</div>
  </div>

  const alertInstance = alert(<div style={{color:'red'}}>請再次確認您的餐點</div>, checkDetailList , [
    { text: '我要再看看', onPress: () => console.log('我要再看看'), style: 'default' },
    { text: '確認無誤', onPress: () => console.log('送出') },
  ]);
  setTimeout(() => {
    // 可以调用close方法以在外部close(太久沒按就自動取消)
    console.log('auto close');
    alertInstance.close();
  }, 500000);
};
