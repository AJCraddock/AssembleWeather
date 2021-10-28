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
>- An overview of what you managed to accomplish in the three hours
    
   Autocomplete endpoint that allowed limiting of the amount of results returned. Utilized a singleton pattern to allow future features to leverage the searching class with limited effort, and allow lazy loading of search engine.
>- Why you made certain design/implementation choices
   
   - Flexsearch - A good in memory search engine that supported various features such as phonic searching with a decent language support. It has excellent query performance and allowed a fair bit of tuning. One drawback was, indexing (adding, updating) can be quite expensive but was a fair tradeoff for the query performance since the data was static. 

   - Singleton Pattern - used largely to prevent multiple initialization of Flexsearch. As mentioned previously, index operations (excluding search) can be quite expensive, so I wanted to enforce limiting the instances of Flexsearch being created. 

> - What obstacles (if any) you ran in to as you worked on the exercise
    
   Working with the Flexsearch actually presented me a few obstcale, largely around the way it stores and returns information. It was my first time using it, so I took some time to familiarize myself with it using VS Code's debugger.  
   It was difficult to determine if it was working as intended since it only returns the ID's that were provided when the data is added to the "cluster". I expected it to return the document that was passed in during creation of the indices.  
   I also had a few issues with getting the proper char encoding via the 'charset' functionality to seemingly work properly. This was a lot of trial and error to find the proper charset for the given data.  
   I realized pretty late the the limit was a limit across all the indices and not the total results returned. This meant that I had to quickly handle this post query.  
> - What you would do if you had more time
    
   I feel the data retreval still has some rough edges. I would have explored changing the index to contain a concatenation of the name, state, and country. I believe this would have made the limit work a bit nicer while offering an acceptable query time. 
