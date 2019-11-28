const path = require('path')
function resolve (dir) {
    return path.join(__dirname,  dir)
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
    // 使用overrides是为了分开配置jsx的解析规则，在react_app里使用react的规则解析，其他使用vue的规则
    overrides: [
        {
            // 这里如果不用函数，会出现报错的情况，还没找到原因
            test:function(filename) {
                if (filename === undefined) return
                if (filename.indexOf(resolve('src')) === 0) return filename
            },
            exclude: [/react_app[\/\\]+/],
            presets: [
                ['@vue/cli-plugin-babel/preset', {
                    jsx: true
                }]
            ]
        },
        {
            // 这里如果不用函数，会出现报错的情况，还没找到原因
            test:function(filename) {
                if (filename === undefined) return
                if (filename.indexOf(resolve('src/react_app')) === 0) return filename
            },
            plugins: [
                'transform-react-jsx'
            ],
            presets: [
                ['@vue/cli-plugin-babel/preset', {
                    jsx: false
                }]
            ]
        }
    ]
}
