---

slug: "/docs"

title: "tomWritesCode - How I build the things."

---

## Hi my name is Tom, this is my site, and this is the how/what I used to build it.

All of the code for this site as well as most of the projects I talk about in here will be available at my [GitHub - tomWritesCode](https://github.com/tomWritesCode), feel free to check them out and let me know what you think.

*******

## raspberryCandy - <a href="https://marketplace.visualstudio.com/items?itemName=tomWritesCode.raspberryCandy" target="_blank">VS Code Marketplace</a>

This theme was inspired by my love of dark coding themes, Sarah Drasner's Night Owl theme, Wes Bos' Cobalt2 theme and Scott Tolinski's LevelUp Official Theme.

The name of this comes from ONA Cafe in Marrickville in Sydney, Australia. My favorite roast they have is called Raspberry Candy and I have had way too many of those while at that cafe.

![raspberryCandy Theme](https://res.cloudinary.com/tomwritescode/image/upload/v1550563515/Screenshot2.png)

*******

## raspberryCandy NodeJS Web Scraper

After making the raspberryCandy VS Code theme, I had and still have the huge novelty of checking daily to see how many downloads it has.

As a little side project I wanted to learn how to make a Node CLI tool and decided to roll that want with a way to check the downloads of my theme. 

I found a tutorial that went through making a web scraper and adapted it to use the VS Code Marketplace page of raspberryCandy, find the styling tag of the number of downloads and then pull the text from it. 

Then using Chalk, Figlet, Request Promise and Cheerio I would return the result to the terminal as well as a small math calculation which worked out how many days the theme has been released. I then added the command 'raspberry' to the project so that the command can be run straight from my terminal from any directory. 

A small project that only really has relevance for me but gave me a great understanding of working in a small NodeJS environment and making a CLI tool. 

![raspberryCandy Web Scraper](https://res.cloudinary.com/tomwritescode/image/upload/v1555478402/Screen_Shot_2019-04-17_at_8.43.53_am.png)

*******

## Basketball NoStarz - <a href="https://no-starz.tomwritescode.now.sh/" target="_blank">Check out the project</a>

 I have been playing basketball with my brother on my my days off and wanted a way to track our scores, that night this project started.

 The original concept was a quick Gatsby knock up to make sure it worked. Once I worked out the base way of how I wanted to do it I decided to use NextJS, Emotion, Zeit's Now hosting platform to build it.

 The main part of the project uses a lot of state and I plan to start learning and using Redux now that I have the concept of the project running and usable, among this there is also a large list of things I would like to work on and add to the project.

 For me this is a really awesome project that constantly has room to grow and add new ideas and features really giving me a great platform to have as a constantly growing app.

![Basketball NoStarz](https://res.cloudinary.com/tomwritescode/image/upload/v1555541786/nostarz.gif)

*******

## dadJokes() - <a href="https://jokesfromyourdad.netlify.com" target="_blank">Check out the project</a>

This doesn't need to exist, but here it is anyway. There was a running joke at the Code Heart Design Conference that we needed dad jokes in between the silence of people switching laptops. This was made the very next day.

Built in Gatsby because that is what I always reach for when I want to make something quickly.

The main logic behind it working is the array of objects in JokeList.js:

![dadJokes](https://res.cloudinary.com/tomwritescode/image/upload/v1560070086/dadJokes.png)

This is then used by the JokeGenerator.js file when someone presses the 'Just one more.' button which triggers the NewJoke() function:

![newJoke](https://res.cloudinary.com/tomwritescode/image/upload/v1560070086/dadJoke_Generator.png)

The JokeGenerator function runs first which generates a random Integer based on how long the array of jokes is.

![randomNumber](https://res.cloudinary.com/tomwritescode/image/upload/v1560070085/dadJoke_Numbers.png)

Once that has been done the selected joke is then set into the joke and punchline sections of the page.

*******

## tomWritesCode - <a href="https://github.com/tomWritesCode/tomWritesCode" target="_blank">Check out the codebase</a>

This site is built in Gatsby, but as well as React and GraphQL being packaged with Gatsby I am also using Styled Components as well as Emotion because I wanted to see how it worked. Last but not least, Contentful for holding all my blog posts.

```javascript

tomWritesCode = () => {

const React = true;

const GatsbyJS = true;

const Blog = 'Contentful';

const Docs = 'Markdown Remark';

const styling = 'Styled Components';

const stylingAlso = 'Emotion';

}

```

*******

