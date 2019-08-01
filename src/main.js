// css初始化，rem根节点字号初始化
import '@/static/reset.js'
import '@/static/reset.css'

import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
// import fastClick from 'fastclick'
import '@/assets/iconfont/iconfont.css'

import {
  Swipe,
  SwipeItem,
  Lazyload,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Search,
  Sticky,
  NavBar,
  Field,
  Switch,
  NoticeBar,
  Rate,
  Collapse,
  CollapseItem,
  RadioGroup,
  Radio,
  TreeSelect,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup
} from 'vant'

import {
  Table,
  TableColumn,
  ColorPicker
} from 'element-ui'

import 'vant/lib/index.css'
import './plugins/element.js'

Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(Search).use(Sticky).use(NavBar).use(Field).use(Switch).use(NoticeBar).use(Rate).use(Collapse).use(CollapseItem).use(RadioGroup).use(Radio).use(TreeSelect).use(Button).use(Cell).use(CellGroup).use(Checkbox).use(CheckboxGroup).use(Table).use(TableColumn).use(ColorPicker)
// fastClick.attach(document.body)

new Vue({
  render: h => h(App),
  store,
  router,
  components: {
    App
  }
}).$mount('#app')
