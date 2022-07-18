const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    host:'localhost',
    port:'8080',
    open:true,
  },
  lintOnSave:false,
  transpileDependencies: true
})
