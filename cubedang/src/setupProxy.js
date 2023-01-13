const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
   app.use(
      createProxyMiddleware('/openapi', {
         target: 'https://public.api.nexon.com', 
         changeOrigin: true,
      })
   );
};