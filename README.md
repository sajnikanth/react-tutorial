React Tutorial
===============

Useful Links
------------

* [Source 1](https://albelli-my.sharepoint.com/:f:/g/personal/rniyazimbetov_albelli_net/Eo401OiJCddGrzlc0POFw6MBi9xepg3EAb0u_Y8ssna8OA?e=TEX6RV)
* [Source 2](https://www.youtube.com/watch?v=pgAvVxowaYU)
* [Source 3](https://siddharthac6.medium.com/getting-started-with-react-js-using-webpack-and-babel-66549f8fbcb8)

Install
-------
        
        npm init
        npm install --save-dev \
            react react-dom \
            webpack webpack-cli webpack-dev-server html-webpack-plugin \
            babel-loader @babel/core @babel/preset-env  @babel/preset-react \
            css-loader style-loader


Configure
---------

        package.json to include start & build scripts
        .babelrc to use presets for react
        webpack.config.js to be used for .jsx and .css files

Make the app
------------


        Create index.jsx containing:
                react component (simple function) that returns an HTML
                reactDom that renders the above component in a specific element
        Create index.html containing:
                div that as the id of the element being used in index.html
        Create style.css that styles the component being used

Launch
------

        npm start