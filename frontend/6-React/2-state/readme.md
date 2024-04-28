## Other Build Tools  

> Go <a href="https://github.com/Promineo-Tech/react-app-design/tree/main/week2/CRA">here</a> to see what's new in React Week 2.

Create React App is not the only build tool you can use to scaffold a React project.

Other tools such as <a href="https://vitejs.dev/">Vite</a> and <a href="https://parceljs.org/">Parcel</a> can scaffold your React with a faster (currently) build process. Vite has pre-packed templates for a complete React project while Parcel (currently)
needs a manual installation of the ```react``` and ```react-dom``` packages and creation of a few files to get going.

### What is a Bundler?

A bundler is a development tool that will compress and minify all your code. And if you have a function that is never used, it will detect that and remove that. A bundler generates a dependency graph as it traverses your first code files. This implies that beginning with the entry point you specified, the module bundler keeps track of both your source files’ dependencies and third-party dependencies. This dependency graph guarantees that all source and associated code files are kept up to date and error-free.

The bundler tool that is included within the <a href="https://create-react-app.dev/">Create React App</a> tool is ```Webpack```. <a href="https://webpack.js.org/">Webpack</a> is the most popular bundler tool by a large margin, but that does not mean it does not have its problems. 


### Webpack

...

> Webpack can be confusing to <a href="https://webpack.js.org/configuration/">configure</a> manually.

https://www.youtube.com/watch?v=ILcb7BD9R90
https://createapp.dev/


There are alternatives. 😊

### Parcel

<a href="https://parceljs.org/docs/">Parcel</a> is marketed a "zero-configuration" build tool.

Not only does it do the ```bundling``` of all of your project files (.js, .css, etc) no matter what framework you are using (React, Vue, etc) it will determine the necessary plugins and dev dependencies automatically (the ```build``` part).

Includes out of the box:

 - <a href="https://parceljs.org/features/development/#dev-server">Dev server</a>
 - <a href="https://swc.rs/">SWC</a> (transpiling - faster than Babel, built with Rust)
 - <a href="https://github.com/parcel-bundler/parcel-css">Parcel CSS</a> - CSS parser, compiler and minifier (also built with Rust)

 ```Setup for React```

Parcel apps start with an HTML file. Parcel follows the dependencies from there to build your app. Look at the <a href="https://parceljs.org/recipes/react/">documentation</a> for complete code setup.

 - npm i -D parcel (dev dependency)
 - npm i react react-dom
 - creat an index.html in src folder
 - create an index.js in src folder
 - setup dev script (package.json): ```"dev": "parcel src/index.html --open"```
 - open browser to https://localhost:1234

### Vite (pronounced "veet")

<a href="https://vitejs.dev/guide/">Vite</a> is another build tool that handles everything you need to setup a front-end project.

Vite has a build setup templates (with TypeScript) for:

- React
- Preact
- Svelte
- Vue
- Vanilla JS

So you don't have to install anything else manually.

 ```Setup for React```

 - type ```npm create vite@latest```
 - follow prompts to install React build setup

You can try it out on <a href="https://vitejs.dev/guide/#trying-vite-online">StackBlitz</a> for yourself.