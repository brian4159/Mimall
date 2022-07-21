const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/common": {
        target: "https://www.imooc.com",
        changeOrigin: true,
        pathRewrite: {
          "/common": "/common",
        },
      },
    },
  },
};
