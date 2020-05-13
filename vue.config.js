module.exports = {
    configureWebpack:{
        devServer:{
            hot:true,
            port:7777,
            host:"inspiration.com",
            proxy:{
                "/search":{
                    target: "http://localhost:3000",
                    changeOrigin: true,
                    // pathRewrite:{
                    //     "^/api":""
                    // }
                },
                "/login":{
                    target:"http://localhost:3000",
                    changeOrigin: true,
                }
            }
        }
    }
}