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
      current: 0, // 横版菜单索引
      tabList: [
        {title: '点菜'},
        {title: '评价'},
        {title: '商家'}
      ],
      foodList: [], // 菜品数据
      currentList: [], // 当前的菜品
      selectCate:null // 分类名称
    }
  }

  /**
   * 更改横版菜单的索引值
   * @param value number 索引
   */
  changeCurrent(value) {
    this.setState({current: value})
  }

  /**
   * 切换分类
   * @param selectCate  object // 参数 {name: "专场", id: 1},
   */
  changeCategory(selectCate) {
    this.setState({selectCate:selectCate});
    if (this.state.foodList.some(item => item.pid === selectCate.id)) {
      this.setState({
        currentList: this.state.foodList.filter(item => item.pid === selectCate.id)
      })
      // 不加载数据
    } else {
      // 加载数据
      this.setState({foodList: this.state.foodList.concat(this.getData(selectCate))}, () => {
        this.setState({
          currentList: this.state.foodList.filter(item => item.pid === selectCate.id)
        })
      });
    }
  }

  getData(selectCate) {
    // 创建随机图片
    let count = Math.floor(Math.random() * 2);
    return Array.from(Array(Math.round(Math.random() * 20)), (v, k) => ({
      price:Math.round(Math.random() * 20),
      sole:Math.round(Math.random()*50),
      img: count,
      pid: selectCate.id,
      id: selectCate.id + "_" + k,
      title: "分类" + selectCate.id + "菜品" + (k + 1)
    }));
  }

  render() {
    let {current, tabList, currentList,selectCate} = this.state;
    return (
      <View>
        <AtTabs
          swipeable
          current={current}
          tabList={tabList} onClick={this.changeCurrent.bind(this)}>
          <AtTabsPane>
            <View className={"food_body"}>
              <Category onChangeCategory={this.changeCategory.bind(this)}/><FoodList selectCate={selectCate} currentList={currentList}/>
            </View>
          </AtTabsPane>
          <AtTabsPane>评价</AtTabsPane>
          <AtTabsPane>商家</AtTabsPane>
        </AtTabs>
      </View>
    );
  }
}

export default Food;
