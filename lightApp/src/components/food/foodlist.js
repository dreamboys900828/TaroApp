import Taro, { Component } from '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components'

class FoodList extends Component {

  constructor(){
    super(...arguments);
    this.state={}
  }
  render() {
    return (
      <View>
        <Image></Image>
        <Text>Template</Text>
      </View>
      );
  }
}

export default FoodList;
