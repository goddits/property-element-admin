const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  lintOnSave: true,//设置是否在开发环境下每次保存代码时都启用 eslint验证
  productionSourceMap: false, //生产环境是否要生成 sourceMap
    publicPath: './', //部署应用包时的基本 URL
    outputDir: 'dist', //build 时输出的文件目录
    assetsDir: 'assets', //放置静态文件夹目录
    devServer: {
        port: 8099, //开发运行时的端口
        host: '0.0.0.0', //开发运行时域名，设置成'0.0.0.0'
        https: false,//是否启用 https
        open: true //npm run serve 时是否直接打开浏览器
    },

  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
}