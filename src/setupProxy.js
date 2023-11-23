const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Your API endpoint
    createProxyMiddleware({
      target: 'http://localhost:8000', // Change to the correct port of your server
      changeOrigin: true,
    })
  );
};
