import Taro, { Component } from '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components'
import './foodlist.less'

class FoodList extends Component {

  constructor(){
    super(...arguments);
    this.state={}
  }
  render() {
    // console.log(JSON.stringify(this.props.currentList));
    let {selectCate,currentList} = this.props;
    return (
      <View className={"foodlist"}>
        <Text>{selectCate?selectCate.name:""}</Text>
      </View>
      );
  }
}

export default FoodList;
