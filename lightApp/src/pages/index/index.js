import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import Head from '../../components/head/head'
import Scroll from '../../components/head/scrolltop'
import Food from '../../components/food/food'

import './index.less'

class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    onReachBottomDistance: 50,
    pageOrientation: 'auto'
  };

  constructor() {
    super(...arguments);
  }

  // 页面加载时触发(还未加载完成)
  componentWillMount() {
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

  onPageScroll(obj: Taro.PageScrollObject): void {
    Scroll.bannerTop(obj);
  }

  render() {
    return (
      <View>
        <Head />
        <Food />
      </View>
    )
  }
}

export default Index;
