import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import Top from './top'
import Activity from './activity'
import './head.less'

class Head extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      store: {
        title: "川湘居",
        notice: "欢迎光临，很高兴为您服务~",
        tags: ["奶量足", "活nice", "水很多!", "下次还会来"]
      }
    }
  }

  render() {
    let {store} = this.state;
    return (
      <View className={"head"}>
        <Top/>
        <Image className={"back"} src={require('../../assets/img/water.gif')}/>
        <View className={"store"}>
          <Image className={"store_img"} src={require('../../assets/img/water.gif')}/>
          <View className={"store_text"}>
            <Text>{store.title}</Text>
            <Text>{store.notice}</Text>
            <Text>
              {store.tags.map((value, index) => {
                return <Text className={"tags_text"} key={index}>{value}</Text>
              })}
            </Text>
          </View>
        </View>
        <Activity/>
      </View>
    );
  }
}

export default Head;
