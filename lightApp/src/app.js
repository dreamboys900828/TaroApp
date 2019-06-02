import '_@tarojs_async-await@1.3.0-beta.6@@tarojs/async-await'
import Taro, {Component} from '@tarojs/taro'
import {Provider} from '@tarojs/redux'
/**
 * Taro-UI 组件的全局样式表
 */
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {

  config = {
    pages: [
      'pages/index/index'
    ],
    permission: {
      'scope.userLocation': {
        desc: '你的位置信息将用于小程序位置接口的效果展示'
      }
    },
    window: {
      backgroundTextStyle: 'light', // 	下拉 loading 的样式，仅支持 dark / light
      navigationBarTitleText: 'WeChat', // 导航栏标题文字内容
      navigationBarBackgroundColor: '#c7ffc4', // 导航栏背景颜色
      navigationBarTextStyle: 'black', // 导航栏标题颜色 仅支持 黑 / 白
      navigationStyle: 'default', // 导航栏样式，仅支持以下值：default 默认样式；custom 自定义导航栏，只保留右上角胶囊按钮
      backgroundColor: '#ff0003', // 窗口的背景色
      backgroundColorTop: '#FF7474', // 顶部窗口的背景色，仅 iOS 支持
      backgroundColorBottom: '#FF7474', // 底部窗口的背景色，仅 iOS 支持
      enablePullDownRefresh: true, // 是否开启当前页面的下拉刷新。
      onReachBottomDistance: 50, // 页面上拉触底事件触发时距页面底部距离，单位为 px
      pageOrientation: 'auto' // 屏幕旋转设置，支持 auto / portrait / landscape 详见 响应显示区域变化
    }
  };

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>

      </Provider>
    )
  }
}

Taro.render(<App/>, document.getElementById('app'));
