# Assemble Weather

This is a boilerplate web app built on Typescript, React, Node.js, Express and Webpack. It is built on top of [crsandeep/simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack)

## Quick Start

```
# Install dependencies
npm install (or yarn install)

# Start development server
npm run dev (or yarn dev)
```

### Folder Structure

All the source code will be inside **src** directory. Inside src, there is client and server directory. All the frontend code (react, css, js and any other assets) will be in client directory. Backend Node.js/Express code will be in the server directory.

### Submission Write up
- An overview of what you managed to accomplish in the three hours
    Autocomplete endpoint
- Why you made certain design/implementation choices
    Singleton Pattern
    Flexsearch

- What obstacles (if any) you ran in to as you worked on the exercise
    Working with the Flexsearch actually presented me a few obstcale, largely around the way it stores and returns information.  
    It was hard to determine if it was working as intended since it only returns the ID's that were provided when the data is added to the "cluster". I expected it to return the document that was passed in during creation of the indices.  
    I also had a few issues with getting the proper char encoding via the 'charset' functionality to seemingly work properly. This was a lot of trial and error to find the proper charset for the given data.
- What you would do if you had more time
    I feel the data retreval still has some rough edges. Also 