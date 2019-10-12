var HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry:'./src/app.js',
    output:{
        path:__dirname + '/dist',
        filename:'app.bundle.js'
    },
    devServer:{
        port:8080,
        open:true
    },
    plugins:[
        new HtmlWebpackPlugin({
        template:"./src/index.html"
        }),
        new VueLoaderPlugin(),
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    }
}