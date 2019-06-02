import Taro, {Component} from '@tarojs/taro'

class Scroll extends Component {
  /**
   * 顶部搜索框区域的背景更改
   * @param e 对象
   */
  static bannerTop(e) {
    let scrollTop = e.scrollTop;
    // 查找.back 头部背景图的高度
    let bgHeightElement = document.querySelector('.back');
    let backHeight = bgHeightElement.offsetHeight;
    // 获取 顶部标签的高度
    let topHeightElement = document.querySelector('.top');
    let topHeight = topHeightElement.offsetHeight;
    // 图片自身高度 - 滚出去的距离 < top标签的高度时 就改变背景颜色 显示出来
    backHeight - scrollTop < topHeight ? topHeightElement.style.background = '#EFD1C1' : topHeightElement.style.background = 'rgba(0,0,0,0)';
  }
}
export default Scroll;
