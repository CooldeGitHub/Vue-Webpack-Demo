var HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // entry:['./src/app.js','./src/router_view.js'],
    entry:{
        app:'./src/app.js',
        router_view:'./src/router_view.js',
        render:'./src/render.js'
    },
    output:{
        path:__dirname + '/dist',
        filename:'[name].bundle.js'
    },
    devServer:{
        port:8080,
        open:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            chunks:['app'],
            filename:"index.html",
            template:"./src/index.html"
        }),
        new HtmlWebpackPlugin({
            chunks:['router_view'],
            filename:"index2.html",
            template:'./src/index2.html'
        }),
        new HtmlWebpackPlugin({
            chunks:['render'],
            filename:"index3.html",
            template:'./src/index3.html'
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