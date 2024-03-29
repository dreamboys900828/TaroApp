import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text, Image} from '@tarojs/components'
import './top.less'

class Top extends Component {
  render() {
    return (
      <View className={"top"}>
        <View className={"left"}>
          <Image className={"img"} src={require('../../assets/img/left.png')}/>
        </View>
        <View className="right">
          <Image className={"img"} src={require('../../assets/img/search.png')}/>
          <Image className={"img"} src={require('../../assets/img/collection.png')}/>
          <Image className={"img"} src={require('../../assets/img/buy.png')}/>
          <Image className={"img"} src={require('../../assets/img/dian.png')}/>
        </View>
      </View>
    );
  }
}

export default Top;
