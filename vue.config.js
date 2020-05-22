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
                },
                "register":{
                    target:"http://localhost:3000",
                    changeOrigin:true
                },
                "/captcha/sent":{
                    target:"http://localhost:3000",
                    changeOrigin:true
                },
                "/captcha/verify":{
                    target:"http://localhost:3000",
                    changeOrigin:true
                }
            }
        }
    }
}