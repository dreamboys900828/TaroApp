import Taro, {Component} from '@tarojs/taro'
import {View, Text, Button, Image} from '@tarojs/components'
import {AtTabs, AtTabsPane} from "taro-ui"
import Category from './category'
import FoodList from './foodlist'

import './food.less'

class Food extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      tabList: [
        {title: '点菜'},
        {title: '评价'},
        {title: '商家'}
      ]
    }
  }

  changeCurrent(value) {
    this.setState({current: value})
  }

  render() {
    let {current, tabList} = this.state;
    return (
      <View>
        <AtTabs
          swipeable
          current={current}
          tabList={tabList} onClick={this.changeCurrent.bind(this)}>
          <AtTabsPane>
            <Category />
            <FoodList />
          </AtTabsPane>
          <AtTabsPane>评价</AtTabsPane>
          <AtTabsPane>商家</AtTabsPane>
        </AtTabs>
      </View>
    );
  }
}

export default Food;
