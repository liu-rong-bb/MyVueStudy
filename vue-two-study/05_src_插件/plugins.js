export default {
    // 用于增强Vue。install第一个参数是Vue第二个使用的参数是插件使用者传递的数据
    install(Vue, x,y,z) {
        console.log(x + y + z)
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0,4)
        })

        // 对象定义成全局
        Vue.directive('fbig', {
            // 指令与元素成功绑定时
            bind(element, binding) {
                console.log(this) // 注意此处的this时window
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus()
            },
            //  指令所在模板被成功解析时
            update(element, binding) {
                element.value = binding.value
                element.focus()
            }
        })

        // 定义混入
        Vue.mixin({
            data() {
                return{
                    x:100,
                    y:200
                }
            }
        })

        // 给vue原型上定义指令,全局hello方法
        Vue.prototype.hello = () => {alert('你好啊')}
    }
}
