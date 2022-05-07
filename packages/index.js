// 整个包的入口
import AplButton from './AplButton'
import AplDialog from './AplDialog'
import AplInput from './AplInput'
import AplSwitch from './AplSwitch'
import AplRadio from './AplRadio'
import AplRadioGroup from './AplRadioGroup'
import AplCheckbox from './AplCheckbox'
import AplCheckboxGroup from './AplCheckboxGroup'
import AplForm from './AplForm'
import AplFormItem from './AplFormItem'
const components = [
    AplButton,
    AplDialog,
    AplInput,
    AplSwitch,
    AplRadio,
    AplRadioGroup,
    AplCheckbox,
    AplCheckboxGroup,
    AplForm,
    AplFormItem
]
// 定义 install 方法，接收 Vue 作为参数，如果使用 use 注册插件，则必须所有的组件都被注册
const install = (Vue) => {
    // console.log('install complete !')
    // 遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}
// 判断是否是直接引入文件，如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
export default {
    install
}