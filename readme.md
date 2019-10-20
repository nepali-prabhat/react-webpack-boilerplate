# React Webpack Boilerplate
Boiler plate for webpack, babbel and react.

## Basic
```
1.  Webpack (^4.0.0)

2.  Babbel (^7.6.4)

3.  React (^16.10.2) 
        
4.  ReactDOM (^16.10.2)

5.  SCSS for styling
```

## Features
```
1.  Hot reload, production and development modes

2.  Image files: "png, jpg, svg"

3.  Rest spread

4.  Transform class properties

5.  Allias for folders: src/img, src/components, src/utils, src/views, src/scss

6.  Source map for easy debugging

7.  Optimizations: JS, HTML, CSS

```

## Globals
```
1.  ENV_MODE ("dev"|"prod")

2.  process.env ({SESSION_IP})
```

## ToDo / Limitations
```
1. No server-side rendering (difficult to find by web crawlers and recommendations)

2. No proper env port setup (uses default)

3. No svg setup (I'd use SVGOMG and SVGR for making concise svg component)

4. No es6 babbel loader for node_modules 
```

## __Note:__
>**https://github.com/obahareth/are-you-es5 -are-you-es5!**
>
>If any modules use es6 and your application breaks, use this package to find and solve using regex