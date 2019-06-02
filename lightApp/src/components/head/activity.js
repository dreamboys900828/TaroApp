import Taro, {Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './activity.less'

class Activity extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      activity: [{
        type: "cut",
        info: [
          {total: 48, cut: 10},
          {total: 58, cut: 20},
          {total: 100, cut: 30}
        ]
      }]
    };
  }

  /**
   * 获取类型
   * @param type
   * @returns {string}
   */
  static getTextByType(type) {
    let textType: string;
    switch (type) {
      case 'cut':
        textType = '减';
        break;
      case 'plus':
        textType = '加';
        break;
    }
    return textType;
  }

  /**
   * 拼接活动字符串
   * @param arr
   * @returns {string}
   */
  static getLineString(arr: Array[]) {
    return arr.map((value, index) => `满${value.total}减${value.cut}`).join(';');
  }

  render() {
    let {activity: [firstItem]} = this.state;
    return (
      <View className={"activity"}>
        <Text className={"type"}>{Activity.getTextByType(firstItem.type)}</Text>
        <Text className={"activity_s"}>{Activity.getLineString(firstItem.info)}</Text>
        <Text className={"length"}>{firstItem.info.length + "个活动"}</Text>
      </View>
    );
  }
}

export default Activity;
