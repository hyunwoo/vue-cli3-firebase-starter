module.exports = {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  },

  publicPath: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // LINK : https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    }
  }
};