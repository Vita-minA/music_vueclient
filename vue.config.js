const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// vue 的配置
module.exports = {
  // entry: path.join(__dirname, "./src/main.js"),
  // output: {
  //   path: path.join(__dirname, "./dist"),
  //   filename: 'bundle.js'
  // },
  // 部署应用时的基本 URL。
  // NODE_ENV === 'production' 用来表示是不是生产环境
  publicPath: process.env.NODE_ENV === 'production' ?
    '/CloudMusic/' : '/',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除（构建时传入 --no-clean 可关闭该行为）
  outputDir: 'dist',
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  lintOnSave: 'error',
  productionSourceMap: false,
  css: {
    loaderOptions: {}
  },
  devServer: {
    proxy: '',
    port: '8080'
  },
  chainWebpack: (config) => {
    // 引入字体
    // config.module
    //   .rule("font")
    //   .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
    //   .loader("url-loader")
    //   .options({
    //     limit: 10000,
    //     name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
    //   })
    //   .end()
    // 移除默认规则对该文件夹的控制 
    config.module
      .rule("svg")
      .exclude.add(resolve("src/assets/font-icon"))
      .end();
    // 新增规则并设置 svg-sprite-loader-loader 处理 font-icon 目录下的 svg 文件。
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/font-icon"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
    // 配置热重载
    config.resolve.symlinks(true);
    // 配置alias
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@config', resolve('src/config'))
      .set('@style', resolve('src/style'))
      .set('@utils', resolve('src/utils'))
      .set('@views', resolve('src/views'))
      .set('@store', resolve('src/store'))
      .set('@api', resolve('src/api'))
      .set('@filter', resolve('src/filter'))
      .set('@directive', resolve('src/directive'))
  }
}