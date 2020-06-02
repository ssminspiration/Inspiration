module.exports = {
    configureWebpack:{
        devServer:{
            hot:true,
            port:7777,
            host:"inspiration.com",
            open:true,
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
                "/register/cellphone":{
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
                },
                // "/user/subcount":{
                //     target:"http://localhost:3000",
                //     changeOrigin:true
                // },
                // "/user/playlist":{
                //     target:"http://localhost:3000",
                //     changeOrigin:true
                // },
                "/user":{
                    target:"http://localhost:3000",
                    changeOrigin:true
                },
                "logout":{
                    target:"http://localhost:3000",
                    changeOrigin:true
                }
            }
        }
    }
}