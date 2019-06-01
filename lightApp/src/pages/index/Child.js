import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'

class Child extends Component {
  render() {
    return (
      <View>
        <Button onClick={this.changeHandle}>调用上层事件</Button>
        {this.props.state.nickname}
      </View>
    )
  }

  changeHandle() {
    this.props.onchange();
  }
}
export default Child;
