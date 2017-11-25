# Minimalist React Environment
Minimalist boilerplate project setup for React, React Router, Babel, and Webpack. Best template if you are beginner in using React, Babel, and Webpack and try to learn it.

__Feel puzzled with webpack, babel, and react project configuration and have no idea how it works?__
This project is designed to give you a basic explanation for using webpack and babel configuration in react, react router project with a minimal code base. 

You can use this boilerplate as your code base for building bigger application.

Check the explanation below and the comment I attatch on every file.

__Feedback and contribution are welcome!__

## Installation
1. Clone this repository

    ```git clone https://github.com/jundialwan/minimalist-react.git```

2. Install dependency

    ```npm install```

3. Run or Build

    __Run:__

    ```npm run dev```

    Application running in localhost:8080

    __Build:__

    ```npm run build```

    Build the app and create bundle.js in /dist folder



## Dependency Explanation

__Dev Dependency (Only used when development)__
* __babel-core__: Core of babel, clear enough
* __babel-loader__: Used by webpack to load javascript file with babel
* __babel-polyfill__: Support new globals such as Promise or new native methods
* __babel-preset-env__: Babel preset to enable the latest ECMAScript standard (ES2015, ES2016, ES2017)
* __babel-preset-react__: Babel preset to enable JSX
* __webpack__: Bundling your app into a single JS file
* __webpack-dev-server__: Enables dev server for development, support hot reload

### Babel
Babel is a transpiler. Used to transform ES2015++ code to ES5 code so that most of all browser with ES5 support could run it. Babel allow you to use new ES syntax without waiting for browser support.

Documentation: [babeljs.io](http://babeljs.io)

### Webpack
Webpack is a static module bundler. Used to bundling all your JS file to a single JS file that will be loaded by index.html. Webpack recursively builds a dependency graph of your file/module then package all of those file into one file.

Documentation: [webpack.js.org](http://webpack.js.org)

### React
React is a JavaScript library for building reusable user interfaces. It can be used for web or mobile apps with React Native. React designed to be used for Single Page Application. It allows you to create web applications which can change data without reloading the page. 

Documentation: [reactjs.org](http://reactjs.org)

### React Router
React Router is a collection of navigational components that compose declaratively with your application. React Router allows us to enter the address on address bar and render it base on the address, even it is a Single Page Application, the webpage is not reloading!

Documentation: [reacttraining.com/react-router](http://reacttraining.com/react-router)
