module.exports = {
    configureWebpack:{
        devServer:{
            hot:true,
            port:7777,
            host:"inspiration.com",
            proxy:{
                "/search":{
                    target: "http://localhost:3000",
                    // pathRewrite:{
                    //     "^/api":""
                    // }
                },
                "/login/status":{
                    target:"http://localhost:3000/"
                }
            }
        }
    }
}