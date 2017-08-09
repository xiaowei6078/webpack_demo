const path = require('path');

module.exports = {
    //入口文件
    entry: './src/js/index.js',
    //输出
    output: {
        //输出文件名
        filename: 'bundle.js',
        //输出路径
        path: path.resolve(__dirname, 'dist/js')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}