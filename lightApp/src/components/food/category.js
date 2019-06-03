import Taro, {Component} from '@tarojs/taro'
import {View, Text, Button, Image} from '@tarojs/components'
import './cate.less'

class Category extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      selectCate: null, // 初始值让第一个选中
      category: [
        {name: "专场", id: 1},
        {name: "热销", id: 2},
        {name: "折扣", id: 3},
        {name: "主食", id: 4},
        {name: "热炒", id: 5},
        {name: "凉菜", id: 6},
        {name: "饮品", id: 7},
        {name: "早餐", id: 8}
      ]
    }
  }

  clickHandle(item) {
    if (this.state.selectCate && this.state.selectCate !== item.id) {
      this.setState({
        selectCate: item
      }, () => {
        this.props.onChangeCategory && this.props.onChangeCategory(this.state.selectCate)
      })
    } else if (!this.state.selectCate) {
      this.setState({
        selectCate: item
      }, () => {
        this.props.onChangeCategory && this.props.onChangeCategory(this.state.selectCate)
      })
    }

  }

  render() {
    let {selectCate, category} = this.state;
    return (
      <View className={"category"}>
        {category.map((item, index) => {
          return <Text onClick={this.clickHandle.bind(this, item)}
                       className={"category_name " + ((selectCate && selectCate.id === item.id) ? "select" : "")}
                       key={item.id}>{item.name}</Text>
        })}
      </View>
    );
  }
}

export default Category;
