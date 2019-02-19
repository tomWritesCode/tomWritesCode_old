---
slug: "/docs"
title: "tomWritesCode - How I build the things."
---

## Hi my name is Tom, this is my site, and this is the how/what I used to build it. 

All of the code for this site as well as most of the projects I talk about in here will be available at my [GitHub - tomWritesCode](https://github.com/tomWritesCode), feel free to check them out and let me know what you think.

*** 

## raspberryCandy - <a href="https://marketplace.visualstudio.com/items?itemName=tomWritesCode.raspberryCandy" target="_blank">VS Code Marketplace</a>

  This theme was inspired by my love of dark coding themes, Sarah Drasner's Night Owl theme, Wes Bos' Cobalt2 theme and Scott Tolinski's LevelUp Official Theme.

  The name of this comes from ONA Cafe in Marrickville in Sydney, Australia. My favorite roast they have is called Raspberry Candy and I have had way too many of those while at that cafe.

  ![raspberryCandy Theme](https://res.cloudinary.com/tomwritescode/image/upload/v1550563515/Screenshot2.png)

***

## dadJokes() - <a href="https://github.com/tomWritesCode/dadJokes" target="_blank">Check out the codebase</a>
  This doesn't need to exist, but here it is anyway. There was a running joke at the Code Heart Design Conference that we needed dad jokes in between the silence of people switching laptops. This was made the very next day. 

  Built in Gatsby because that is what I always reach for when I want to make something quickly. 

  The main logic behind it working is the array of objects in JokeList.js:

  ```javascript
    const JokeList = [
      {
        joke: `Did you hear about the restaurant on the moon?`,
        punchLine: `Great food, no atmosphere.`,
      },
    ]
  ```
  This is then used by the JokeGenerator.js file when someone presses the 'Just one more.' button which triggers the NewJoke() function:

  ```javascript
  function NewJoke() {
  // jokeGenerator();
    const returnedJoke = jokeGenerator()
  // Will not generate joke twice in a row
    document.getElementById('Joke').innerHTML = returnedJoke.joke
    document.getElementById('Punchline').innerHTML = returnedJoke.punchLine
  }
  ```

  The JokeGenerator function runs first which generates a random Integer based on how long the array of jokes is. 

  ```javascript
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))
    }

    function jokeGenerator() {
      return JokeList[getRandomInt(JokeList.length)]
    }
  ```

***

## tomWritesCode - <a href="https://github.com/tomWritesCode/tomWritesCode" target="_blank">Check out the codebase</a>
  This site is built in Gatsby, but as well as React and GraphQL being packaged with Gatsby I am also using Styled Components as well as Emotion because I wanted to see how it worked. Last but not least, Contentful for holding all my blog posts. 

  ```javascript
  tomWritesCode = () => {
    const React = true;
    const GatsbyJS = true;
    const Blog = Contentful;
    const styling = StyledComponents;
    const stylingAlso = Emotion;
  }
  ```

***

Once that has been done the selected joke is then set into the joke and punchline sections of the page. 
