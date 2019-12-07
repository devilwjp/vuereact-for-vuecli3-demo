# 一个纯净的通过vue-cli3创建的项目集成了react  
被用于VueReact(vuereact-combined)的demo用例  
在线demo https://devilwjp.github.io/vuereact-for-vuecli3-demo/dist/index.html

## demo项目的创造步骤日志  
+ 通过vue create创建一个项目  
+ 安装相关依赖  
````  
npm i react react-dom babel-plugin-transform-react-jsx vuereact-combined -S
````  
+ 在src目录里创建一个react_app的目录用来存放react的jsx文件  
+ 在babel.config.js中进行配置
````jsx harmony  
const path = require('path')
function resolve (dir) {
    return path.join(__dirname,  dir)
}

module.exports = {
    presets: [
        // vue的plugin包
        '@vue/cli-plugin-babel/preset'
    ],
    // 使用overrides是为了分开配置jsx的解析规则，在react_app里使用react的规则解析，其他使用vue的规则
    overrides: [
        {
            // 这里如果不用函数，会出现报错的情况，还没找到原因
            // babel会提示Configuration contains string/RegExp pattern, but no filename was passed to Babel
            // 因为filename不存在，如果不存在就必须通过回调返回一个undefined
            test:function(filename) {
                // 仅对src/react_app目录有效
                if (filename !== undefined && filename.indexOf(resolve('src/react_app')) === 0) return filename
            },
            plugins: [
                // 使用react的jsx编译
                'transform-react-jsx'
            ],
            presets: [
                ['@vue/cli-plugin-babel/preset', {
                    // 关闭vue的jsx编译
                    jsx: false
                }]
            ]
        }
    ]
}

````  
