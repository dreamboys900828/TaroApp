import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import Child from './Child'

import './index.less'

class Parent extends Component {

  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    onReachBottomDistance: 50,
    pageOrientation: 'auto'
  };

  state = {nickname:'蔡徐坤',hobby:'🎤、💃、Rap、🏀'};
  // 页面加载时触发(还未加载完成)
  componentWillMount(){
    // this.setState({nickname:'蔡徐坤',hobby:'🎤、💃、Rap、🏀'})
  }
  // 页面初次渲染完成时触发(已加载完成)
  componentDidMount() {
  }

  // 页面卸载时触发 如 redirectTo 或 navigateBack 到其他页面时
  componentWillUnmount() {
  }

  // 页面显示/切入前台时触发
  componentDidShow() {
  }

  // 页面隐藏/切入后台时触发， 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等
  componentDidHide() {
  }

  click = ()=>{
    this.setState({nickname:'张坤',hobby:'🏊、💃、Rap、🏐'}, ()=>{
      console.log(this.state.nickname);
    });
  };
  change = () => {
    this.setState({nickname:'猫南北',hobby:'狗东西'})
  };
  render() {
    return (
      <View className='index'>
        <Child nickname={this.state.nickname} onchange={this.change.bind(this)}/>
        <Button onClick={this.click}>改名</Button>
        <View><Text>{`全民制作人们，大家好，我叫${this.state.nickname} 我喜欢 ${this.state.hobby}`}</Text></View>
      </View>
    )
  }
}

export default Parent
