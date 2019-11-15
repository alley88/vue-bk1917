import Header from "./header"
import bscroll from "./bscroll"
import loading from "./loading"
// import MessageBox from "./messageBox";


const UIcomponents = [
    Header,
    bscroll
]


const install = (Vue) => {
    UIcomponents.forEach(item => {
        Vue.component(item.name, item)
    })
}


export default {
    install,
    loading
    
}





// export default {
//     install,
//     Loading
// }
/*
    Vue.use 使用插件，当使用插件的时候  这个插件必须提供一个install方法。
    并且会将Vue这个构造函数传入这个install方法中去

    如果导出的是一个对象  那么这个对象必须有一个install方法
    如果导出的是一个函数则这个函数会当做install方法

    install:异步的

    上线第一步:
        打包

*/




