var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack           = require('webpack');
var path              = require('path');
var WebpackDevServer  = require('webpack-dev-server');
var CleanPlugin       = require('clean-webpack-plugin');


process.env.NODE_ENV = process.env.NODE_ENV || (require.main === module ? 'development' : 'production');


console.log('NODE_ENV', process.env.NODE_ENV);

// configure host settings for the WebDevServer
var devserver = {
    ip:   'localhost',
    port: 5000
};


var config = {
    modulesDirectories: ['node_modules'],
    context:            path.join(__dirname, 'src'),
    entry:              process.env.NODE_ENV == 'production' ?
        {
            app: ['./index.jsx']
        }
        :
        {
            // WebpackDevServer is only required on development, with key value entry mode, the
            // webpack/hot/only-dev-server entry is required on each entry.
            app: ['./index.jsx', 'webpack/hot/only-dev-server'],
            // The client entry is used to serve an iframe with reloading information
            // The final url will be http://localhost:3000/webpack-dev-server
            client: 'webpack-dev-server/client?http://'+devserver.ip+':'+devserver.port
        }
    ,
    output: {
        // Assets destination
        path: path.join(__dirname, '..', 'nivo-gh-pages'),
        // The final entry file is located in dist/js folder
        // The name variable will the key used in the entry index
        // The hash is optional, but usefull for having unique url for caching purpose
        filename: "js/[name]-[hash:8].js",

        // require to make the specific fonts work (absolute path),
        // the value is also used by the WebpackDevServer to serve assets
        publicPath: process.env.NODE_ENV === 'production' ? '' : '/'
    },

    resolve: {
        fallback: [
            path.join(__dirname, 'src')
        ],
        alias: {
            d3:          path.resolve('./node_modules/d3'),
            react:       path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
            lodash:      path.resolve('./node_modules/lodash'),
        },
        modulesDirectories: ['node_modules'],
    },

    module: {
        // The loaders section defines how webpack behaves when a resource need to be loaded.
        // A resource is anything loaded with the require keyword
        loaders: [
            {
                test:   /snippets/,
                loader: 'raw'
            },
            {

                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                include: path.join(__dirname, 'src'),
                loaders: process.env.NODE_ENV === 'production' ?
                    ['babel?presets[]=es2015&presets[]=react&presets[]=stage-0'] :
                    ['react-hot', 'babel?presets[]=es2015&presets[]=react&presets[]=stage-0']
            },
            {
                test: /\.styl/,
                loader: process.env.NODE_ENV == 'production' ?
                    ExtractTextPlugin.extract('css!resolve-url!stylus') :
                    'style!css!resolve-url!stylus'
            },
            {

                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file?name=fonts/[name]-[hash:8].[ext]"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                // the -loader suffix is optional so file or file-loader is equivalent
                loader: "file-loader?name=fonts/[name]-[hash:8].[ext]"
            },
            {
                test: /\.png$/,
                loader: "url?limit=100000"
            },
            {
                test: /\.(jpg|gif)$/,
                loader: "file"
            },
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name]-[id]-[contenthash:8].css", {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            inject:   true,
            title:    'nivo demo/docs',
            template: 'src/index.html',
            filename: 'index.html',
        }),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify("0.0.1-DEV"),
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ]
}

if ('development' === process.env.NODE_ENV) {
    config.devtool = 'eval'
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
} else if ('production' === process.env.NODE_ENV) {
    config.devtool = 'cheap-module-source-map'
    config.plugins.push(new CleanPlugin(path.join(__dirname, '..', 'nivo-gh-pages', 'js'), {
        root: path.join(__dirname, '..'),
    }))
    config.plugins.push(new CleanPlugin(path.join(__dirname, '..', 'nivo-gh-pages', 'css'), {
        root: path.join(__dirname, '..'),
    }))
    config.plugins.push(new CleanPlugin(path.join(__dirname, '..', 'nivo-gh-pages', 'fonts'), {
        root: path.join(__dirname, '..'),
    }))
    config.plugins.push(new webpack.BannerPlugin('This code is part of the nivo project', {
        raw:       false,
        entryOnly: false,
    }))
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
    config.plugins.push(new webpack.optimize.DedupePlugin())
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        }
    }))
}

// make the config available so webpack can grab the configuration
module.exports = config

// start the WebpackDevServer which handle hot reload
// if called directly from node
if (require.main === module && 'development' === process.env.NODE_ENV ) {
    const server = new WebpackDevServer(webpack(config), {
        publicPath:         config.output.publicPath,
        hot:                true,
        historyApiFallback: true,
        progress:           true,
        stats:              {
            colors: true,
        }
    })

    server.listen(devserver.port, devserver.ip, function (err, result) {
        if (err) {
            console.log(err)
        }

        console.log('Listening at http://'+devserver.ip+':'+devserver.port+'/webpack-dev-server/')
    })
}
