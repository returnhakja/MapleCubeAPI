const proxy = require('http-proxy-middleware');

// src/setupProxy.js
module.exports = function(app) {
    app.use(
        proxy('/api', {
            target: 'https://public.api.nexon.com/openapi/maplestory/v1/cube-use-results',
            changeOrigin: true
        })
    );
};