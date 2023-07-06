const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/': {
        target: "https://192.168.123.101:8080",
        changeOrigin: true,
        ws: false,  
      }
    }
  }
})
