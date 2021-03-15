const path = require("path");
const HWP = require("html-webpack-plugin");
module.exports = {
   entry: path.join(__dirname, "/src/index.jsx"),
   output: {
       filename: "build.js",
       path: path.join(__dirname, "/dist")},
   module:{
       rules:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
    ]
   },
   plugins:[
       new HWP(
          {template: path.join(__dirname,"/src/index.html")}
       )
   ]
}