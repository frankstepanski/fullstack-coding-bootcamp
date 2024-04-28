## Movie Reviewer Database App - Part 1

![Movie Reviewer Database Pt 1](images/movie-review-pt1.png)

### Create React App 

<a href="https://create-react-app.dev/">Create React App</a> is a build tool-chain that scaffolds a new React project. It includes the following tools:
- <a href="https://www.npmjs.com/package/react">react</a> and <a href="https://www.npmjs.com/package/react-dom">react-dom</a> packages
- <a href="https://babeljs.io/">Babel</a> to ```transpile``` the JSX to react elements (DOM elements)
- <a href="https://webpack.js.org/">Webpack</a> to ```bundle``` all the files into one file
- Webpack devServer to ```listen``` for changes and run the ```build``` and ```serve``` the new files
- Jest and React-Testing-Library to support code and DOM tests
- <a href="https://eslint.org/">ESLint</a> for code checking
> In the project directory, run the command:


#### npm install

After you fork and clone the repo, install the necessary packages first.

#### npm start

Runs the app in development mode.
 - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

> The page will reload when you make changes. Look in the browser console for errors or linting warnings.

#### Issues with installed packages

If you ever run into issue with installed packages giving odd errors in your React project follow these steps:

 1. Delete the ```package-lock.json``` file (tracks sub-dependencies of your packages)
 2. Delete the ```node_modules``` folder
 3. Type ```npm install`` in the terminal (root project path)
 4. DO NOT DELETE THE ```package.json``` file

### Getting Started

Here are some resources on getting started with React:

- [React Roadmap](https://roadmap.sh/react)
- [High Level Overview of React](https://www.youtube.com/watch?v=FRjlF74_EZk&t=40s)
- [What Create React App Really Does](https://www.freecodecamp.org/news/create-react-app-npm-scripts-explained/)
- [Component Composition](https://www.youtube.com/watch?v=IDDIvXqMiD4&t=69s)
- [Steve Griffith Playlist](https://www.youtube.com/playlist?list=PLyuRouwmQCjmMfs-HOsDGoaN6JiYrC6Ms) 
- [Free Scrimba React Course](https://scrimba.com/learn/learnreact)
- [Let's Learn React - Learn with Jason Video Podcast](https://www.learnwithjason.dev/let-s-learn-react)
- [Free Mini React Course](https://fullstackopen.com/en/part1)
- [Watch some crazy dudes code for 20 hours](https://www.youtube.com/watch?v=0mVbNp1ol_w&t=18382s)

### React Under-the-Hood

A lot happens to make React work. If you are curious, here are some technical resources:

- [React Deep Dive - Phillp Fabianek](https://www.youtube.com/watch?v=7YhdqIR2Yzo)
- [React Fiber Overview - React's main algorithm](https://www.youtube.com/watch?v=ZCuYPiUIONs&t=28s)
- [React Fiber Overview Article](https://github.com/acdlite/react-fiber-architecture)
- [React Fiber Deep Dive](https://www.youtube.com/watch?v=0ympFIwQFJw)
- [React Fiber Article](https://blog.logrocket.com/deep-dive-react-fiber/)
- [React Theoretical Concepts](https://github.com/reactjs/react-basic)