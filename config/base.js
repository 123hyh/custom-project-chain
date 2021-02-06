/*
 * @Author: huangyuhui
 * @Date: 2021-01-27 11:37:42
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-06 17:39:22
 * @Description: webpack 基础配置
 * @FilePath: \custom-project-chain\config\base.js
 */
const Chain = require('webpack-chain')
const { resolve, startLog, getAssets, getDataUrlParset } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/dist/plugin').default
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
startLog()

/* 指定 babel 编译 */
const BABEL_INCLUDES = [resolve('../src')]
const { name: PROJECT_NAME } = require(resolve('../package.json'))
const {
  /* 查看打包体积 */
  analyzer,
  /* 当前环境 */
  NODE_ENV,
  /* 环境别名 */
  env,
  /* 使用缓存 */
  useCache
} = process.env

/**
 * 开发环境
 */
const isDevelop = NODE_ENV === 'development'

/* 资源路径 */
const STATIC_PATH = 'static'

const config = new Chain()

config
  .name(PROJECT_NAME)
  .target('web')
  .mode(NODE_ENV)
  .entry('index')
  .add(resolve('../src/bootstrap.tsx'))
  .end()
  .output.path(resolve('../dist'))
  .publicPath('/')
  .library('customer_project')
  .libraryTarget('window')
  .filename(
    `${STATIC_PATH}/js/[name]${isDevelop ? '' : '.[contenthash]'}.bundle.js`
  )
  .chunkFilename(
    `${STATIC_PATH}/js/[name]${isDevelop ? '' : '.[chunkhash]'}.chunk.js`
  )
  .end()
  /* 路径别名 */
  .resolve.alias.set('@', resolve('../src'))
  .end()
  .extensions.add('.js')
  .add('.ts')
  .add('.tsx')
  .add('.vue')
  .end()
  .end()
  .module /* JS rule */
  .rule('js-rule')
  .test(/\.jsx?$/i)
  .include.merge(BABEL_INCLUDES)
  .end()
  .use('babel')
  .loader('babel-loader')
  .end()
  .end()

  /* typescript */
  .rule('typescript')
  .test(/\.tsx?$/i)
  .use('babel')
  .loader('babel-loader')
  .end()
  .use('tscompile')
  .loader('ts-loader')
  .options({
    transpileOnly: true
  })
  .end()
  .end()

  /* VUE rule */
  .rule('vue')
  .test(/\.vue$/i)
  .use('vueloader')
  .loader('vue-loader')
  .end()
  .end()

  /* CSS rule */
  .rule('css')
  .test(/\.css$/i)
  .use('styleLoader')
  .loader(isDevelop ? 'vue-style-loader' : MiniCssExtractPlugin.loader)
  .end()
  .use('cssLoader')
  .loader('css-loader')
  .options({
    /* .vue 使用样式时 必须关闭 */
    esModule: false
  })
  .end()
  .use('postcssLoader')
  .loader('postcss-loader')
  .end()
  .end()
  /* LESS rule */
  .rule('less')
  .test(/\.less$/i)
  .include /* ant-design-vue 使用less */
  .add(/node_modules([\\]+|\/)(?=ant-design-vue)/)
  .end()
  .use('styleLoader')
  .loader(isDevelop ? 'vue-style-loader' : MiniCssExtractPlugin.loader)
  .end()
  .use('cssLoader')
  .loader('css-loader')
  .options({
    /* .vue 使用样式时 必须关闭 */
    esModule: false
  })
  .end()
  .use('postcssLoader')
  .loader('postcss-loader')
  .end()
  .use('lessLoader')
  .loader('less-loader')
  .options({
    lessOptions: {
      javascriptEnabled: true
    }
  })
  .end()
  .end()
  /* SCSS rule */
  .rule('sass')
  .test(/\.s[ac]ss$/i)
  .use('styleLoader')
  .loader(isDevelop ? 'vue-style-loader' : MiniCssExtractPlugin.loader)
  .end()
  .use('cssLoader')
  .loader('css-loader')
  .options({
    esModule: false
  })
  .end()
  .use('postcssLoader')
  .loader('postcss-loader')
  .end()
  .use('sassLoader')
  .loader('sass-loader')
  .end()
  .use('sassVariable')
  .loader('sass-resources-loader')
  .options({
    resources: [resolve('../src/styles/variable.scss')]
  })
  .end()
  .end()

  /* 图片 */
  .rule('image')
  .test(/\.(png|svg|jpg|jpeg|gif)$/i)
  .type('asset')
  .parser(getDataUrlParset())
  .merge(getAssets('images'))
  .exclude.add(resolve('../src/assets/svgs/icons'))
  .end()
  .end()

  /* 字体 */
  .rule('font')
  .test(/\.(woff2?|eot|ttf|otf)$/i)
  .type('asset')
  .parser(getDataUrlParset())
  .merge(getAssets('fonts'))
  .end()

  /* 媒体资源 */
  .rule('media')
  .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i)
  .type('asset')
  .parser(getDataUrlParset())
  .merge(getAssets('medias'))
  .end()

  /* SVG 图标 */
  .rule('svg_icon')
  .include.add(resolve('../src/assets/svgs/icons'))
  .end()
  .test(/\.svg$/i)
  .use('svgLoader')
  .loader('svg-sprite-loader')
  .options({
    symbolId: `icon-[name]-[contentHash]`
  })
  .end()
  .end()
  .end()

  /* 缓存 */
  .when(useCache === 'true', scopedConfig => {
    scopedConfig.merge({
      cache: {
        type: 'filesystem',
        name: `${scopedConfig.get('name')}_${env || NODE_ENV}`,
        buildDependencies: {
          config: [__filename]
        }
      }
    })
  })
  /* HTML 插件 */
  .plugin('html-template')
  .use(HtmlWebpackPlugin, [
    {
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['index'],
      inject: true,
      title: 'vue-tsx-cli',
      favicon: resolve('../public/favicon.ico')
    }
  ])
  .end()
  /* Vue 插件 */
  .plugin('vuePlugin')
  .use(VueLoaderPlugin)
  .end()
  .when(
    isDevelop,
    () => void 1,
    scopedConfig => {
      /* DLL */
      scopedConfig
        .plugin('dll')
        .use(webpack.DllReferencePlugin, [
          {
            context: __dirname,
            manifest: require('./dll/manifest.json')
          }
        ])
        .end()
      /*
      .plugin('addAssetHtml')
        .use(
          require('add-asset-html-webpack-plugin'),
          [
            {
              filepath: resolve('../scripts/dll/dll.js')
            }
          ]
        )
        .end()  
    .end()*/
      /* Css 压缩 */
      const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
      scopedConfig.optimization
        .minimize(true)
        .minimizer('css')
        .use(CssMinimizerPlugin)
        .end()
        .end()

      /* 可视化体积  */
      scopedConfig.when(analyzer === 'true', _scopedConfig => {
        _scopedConfig
          .plugin('analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
      })
      scopedConfig
        /* 样式抽离 */
        .plugin('MiniCssExtractPlugin')
        .use(MiniCssExtractPlugin, [
          {
            filename: `${STATIC_PATH}/styles/[name].[contenthash].bundle.css`,
            chunkFilename: `${STATIC_PATH}/styles/[name].[contenthash].chunk.css`
          }
        ])
        .end()
    }
  )

module.exports = config
