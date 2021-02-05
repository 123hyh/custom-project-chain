/*
 * @Author: huangyuhui
 * @Date: 2021-01-27 11:37:42
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-02-05 20:04:17
 * @Description: 处理 webpack的 工具函数
 * @FilePath: \custom-project-chain\config\utils.js
 */
const path = require('path')
const webpack = require('webpack')

/**
 *
 * @param {*} sourcePath
 */
module.exports.resolve = sourcePath => path.resolve(__dirname, sourcePath)

/**
 * webpack 启动程序
 * @param {*} config
 * @param {*} callback
 */
module.exports.bootstrap = (
  config,
  callback = e => {
    if (e) {
      console.log(e)
    }
  }
) => {
  const compiler = webpack(config)
  compiler.run(callback)
  /* 保证缓存 */
  // compiler.close()
}

const net = require('net')

/**
 * 获取端口
 * @param {*} port
 */
const getPort = (port = 8080) => {
  return new Promise(resolve => {
    // 创建服务并监听该端口
    var server = net.createServer().listen(port)

    server.on('listening', function () {
      // 执行这块代码说明端口未被占用
      server.close() // 关闭服务
      resolve(port)
    })

    server.on('error', function (err) {
      if (err.code === 'EADDRINUSE') {
        // 端口已经被使用
        resolve(getPort((port += 1)))
      }
    })
  })
}
module.exports.getPort = getPort
/**
 * 获取 ip
 */
function getIPAdress() {
  var interfaces = require('os').networkInterfaces() || []
  return Object.values(interfaces)
    .flat(Infinity)
    .reduce((prev, { address, family, internal }) => {
      if (family === 'IPv4' && internal === false) {
        prev.push(address)
      }
      return prev
    }, [])
}
module.exports.getIPAdress = getIPAdress

/**
 * 打印 信息
 * @description:
 * @param {*}
 * @return {*}
 */
module.exports.startLog = function () {
  const colors = require('colors')
  const fs = require('fs')
  const data = fs.readFileSync(path.resolve(__dirname, 'other/log.text'))
  console.log(colors.rainbow(data.toString()))
}

/**
 * parset 选项
 * @param { number } DATA_URL_MAX_SIZE dataUrl 阀值
 */
module.exports.getDataUrlParset = (DATA_URL_MAX_SIZE = 8192) => ({
  dataUrlCondition: {
    maxSize: DATA_URL_MAX_SIZE
  }
})
/**
 * 生成 asset 资源选项
 * @param {*} assetPath
 */
module.exports.getAssets = assetPath => ({
  generator: {
    dataUrl: {
      encoding: 'base64'
    },
    filename: `assets/${assetPath}/[name].[contenthash][ext]`
  }
})

/**
 * 添加默认 minimizer
 * @description:
 * @param { * } defaultMinimizer
 * @return {*}
 */
module.exports.defaultMinimizer = webpackConfig => {
  webpackConfig.optimization.minimizer.unshift('...')
  return webpackConfig
}

/**
 * 生成 proxy
 * @description:
 * @param {*} prefix
 * @param {*} proxyURI
 * @return {*}
 */
module.exports.generatePorxy = function generatePorxy(prefix, proxyURI) {
  return {
    target: proxyURI,
    changeOrigin: true,
    pathRewrite: {
      [`^/${prefix.replace('/', '')}`]: ''
    }
  }
}
