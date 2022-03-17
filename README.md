# Sketch frontend coding test

## Installation

To download dependencies

```bash
yarn 
```

## Running

Once you got it all installed, just run

```
yarn start
```
Now you can browse the app at `http://localhost:3000/sketch/`

## Developing

Once you create a new graphql query/mutation, you can genarate
the typescript types automatically

```bash
yarn types
```

## Building

Running this will create a folder called `dist` containing the whole website

```bash
yarn build
```

## Possible improvements

I wasn't able to make vite import svg files as React component. 
Making that work would make use of browser cache for svg files

I have used react-swipeable-views to provide the artwork 
page the slide gesture in mobile screens.
But it makes use of UNSAFE react methods, so removing that dependencies 
and add the gesture another way would benefit the app.

Increase code coverage

The app was deployed to [https://cescoferraro.github.io/sketch](https://cescoferraro.github.io/sketch), 
but the API fails because of CORS issues. Fix this would be good as well.