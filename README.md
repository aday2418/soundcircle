# SoundCircle

#### Elevator Pitch
Have you ever wondered what your friends are jamming out to? With **SoundCircle**, you're always in the loop, diving into their favorite genres, artists, and top songs. **SoundCircle** isn't just about sharing playlists; it's a unique way to connect through music. You can compare listening stats and discover new tunes, all within a user-friendly interface that integrates seamlessly with your existing Spotify playlists. **SoundCircle** is the perfect way to deepen your connections through the universal language of music.

#### Design
Each user gets a personalized dashboard showcasing their music stats. Users will be able to click on their friends profiles to easily access and explore their friends' tastes. They will also be able to customize personal settings (such as whether to use light or dark mode).

![Dashboard](/public/images/dashboard.png)

#### Project Requirements
1. Authentication: **SoundCircle** will allow users to login and personalize their dashboard
2. Database Data: **SoundCircle** will store information such as a users friends and their app preferences
3. WebSocket Data: **SoundCircle** will use the Spotify API to get data such as a users top songs, top genres, and number of minutes listened

#### Key Features
+ Application uses the Spotify API
+ Allows users to create a network of friends
+ Collects data about top songs and genres
+ App manually updates to reflect current listening trends

#### Technologies
+ HTML - Application will use 4 HTML pages
    1. Login Page
    2. Dashboard
    3. Settings Page
    4. Following / Followers Page
+ CSS - Application styling will be used to create consistent themes and ensure that pages are formated clearly
+ JavaScript - Provides login, preferences options, creates graphs for data
+ Service - Backend service with endpoints for:
    + Login
    + Retrieving Listening Data
    + Retrieving and Displaying Friend Data
+ DB/Login - Store users, app preferences, and listening data in database. Users are not able to see friend data until they are logged in
+ WebSocket - As users continually listen to music, their top songs, artists, and minutes are all automatically updated
+ React - Application will eventually be ported to use the React web framework

# HTML Deliverable

#### HTML Pages
+ I added 4 new HTML pages to my application
    1. **Home** - Allows the user to login
    2. **Dashboard** - Contains information about listening history, top songs, and top artists
    3. **Friends** - Lets users view current friends and add new ones
    4. **Settings** - Lets users update profile information and change app settings
+ Code was deployed to [startup.soundcircle.xyz](https://startup.soundcircle.xyz)


| ![Home Page](/public/images/homeHTML.png) | ![Dashboard](/public/images/dashboardHTML.png) | ![Friends](/public/images/friendsHTML.png) | ![Settings](/public/images/settingsHTML.png) |
| :-: | :-: | :-: | :-: |
| **Home Page** | **Dashboard** | **Friends** | **Settings** |

* Half of the dashboard got cut off in the screenshot above so you'll have to check out the [site](https://startup.soundcircle.xyz) to see the rest!

#### Project Requirements
+ **HTML Pages** - 4 pages included for each component of my application (see above)
+ **HTML Tags** - All pages included proper use of HTML tags including BODY, NAV, MAIN, HEADER, FOOTER
+ **Links** - All pages included links to all other pages in the header
+ **Textual Content** - Each HTML Page contained sufficient text to convey the app structure clearly
+ **3rd Party Calls** - A button was included on the dashboard to refresh the call to the Spotify API 
+ **Application Images** - Images were included on every page for uses including icons, album covers, profile pictures, and artist photos
+ **Login Placeholder** - A login placeholder for both a users username and password were included on the home page
+ **Database Data** - The database data for this application will be a users friends. A placeholder for this information is included on the friends page
+ **WebSocket Data** - The websocket data that will be returned from the spotify API include a users total minutes listened, top songs, and top artists. Placeholders for this information are contained on the dashboard page

# CSS Deliverable

+ One of the major changes that I made during the CSS deliverable was changing the structure of the app to react nextjs
    + Did this because I found myself repeating a lot of HTML code
    + In react you can create and import custom components to keep from repeating code
+ Used tailwind for inline CSS declarations
+ I'm planning on adding a dark mode option in the future so I coded the dashboard section of the app in dark mode 
    + Later there will be a light mode version as well

#### Project Requirements
+ **Simon Deployed** - Code was deployed to [startup.soundcircle.xyz](https://startup.soundcircle.xyz)
+ **Github Link** - Every page contains a link to my project github
+ **CSS Notes** - Thorough notes were taken detailing what I learned about CSS
+ **Git Commits** - Many more than 10 commits :)
+ **Styling** - Properly styled CSS header, footer, and main content body
+ **Navigation** - Properly styled CSS navigation elements
+ **Window Resizing** - Responds properly when windows are resized
+ **Application Elements** - Properly styled CSS application elements
+ **Application Text Elements** - Properly styled CSS application text content
+ **Images** - Properly styled CSS application images (most of mine were in the form of svgs)

#### Final Page Styling
| ![Home Page](/public/images/landingPage.png) | ![Dashboard](/public/images/DashboardCSS.png) | ![Friends](/public/images/FriendsCSS.png) | ![Settings](/public/images/SettingsCSS.png) |
| :-: | :-: | :-: | :-: |
| **Home Page** | **Dashboard** | **Friends** | **Settings** |

# Javascript Deliverable

+ This is the [startup site](https://startup.soundcircle.xyz)!
+ Continued coding my app using react nextjs
+ Used Javascript to build functionality in login, choosing prefrences, and loading (fake generated) Web Data
+ Finished building Light/Dark Mode for the App
+ All fake Database data is stored in local json files

#### Project Requirements
+ **Simon Deployed** - Code was deployed to [simon.soundcircle.xyz](https://simon.soundcircle.xyz)
+ **Github Link** - Every page contains a link to my project github
+ **Javascript Notes** - Thorough [notes](/public/notes/notes.md) were taken detailing what I learned about CSS
+ **Git Commits** - Many more than 10 commits :)
+ **JS Login** - JavaScript support for future login where data is stored in localStorage
+ **JS Database** - JavaScript support for database data (includes loading friends, app preferences, user information)
+ **JS Websocket** - JavaScript support for websocket data (includes loading top songs, artists, and genres from spotify API)
+ **JS App Logic** - JavaScript support for interaction logic (includes coloring selected tabs + buttons; makes app usable)

#### Design
+ See CSS pictures above for visual layout (Functionality was added, not much CSS was changed)

# Service Deliverable
+ This is the [startup site](https://startup.soundcircle.xyz)!
+ For this project, it was asked that we use the Express framework
    + However, since I already built my app using the Next.js framework from the start, I decided to keep this framework rather than transfering the whole app over
    + Hopefully this is OK, if not I can change this in the future 
+ One of the major changes to my app is that it is now using real data from the spotify API
    + This means that a spotify Username is required to login to my app
    + I also added a button to let the use choose the time frame for the API to filter by (short, medium, or long term)
+ I had to temporarily disable the feature for viewing friends' profiles (because as of now they are fake users without spotify accounts being loaded in from a JSON file)
    + This will be fixed in the Database Assignment

#### Being Able To Login For Grading
+ Since my app uses the Spotify API, a user has to have a spotify account in order to login
+ Right now my site is storing (site specific) login information using localhost, however, when you click the login button it will take you to an external link where you login using your spotify username + password
    + This step is required or else I would not be able to use the Spotify API in my site
+ Since I know that not everyone (grading TA's) has a spotify account, I created an example Spotify account that people can use to login to the site and test its functionality
    + Spotify Username: **examplespotifyemail@gmail.com**
    + Spotify Password: **example12345**
        + As of today March 11, 2024 this account is brand new -- meaning that there is no listening history yet
            + This means that when you login for grading, the top songs, top artists, and genres will all be blank unfortunately
            + I took pictures of the site using my personal Spotify account to show that the API is working and that data is being loaded correctly
        + I hope that in a week, listening history will be available from the API making the example account more useful to the grader
        + UPDATE: The API is now returning some data for the example account, just not a lot
    + Right now my website is using the dev version of the Spotify API -- This means that only registered users that I have chosen to allow can be authenticated for my app (This can't be changed until you get an audit of your site by Spotify)
        + **If you want to be able to login to my website using your personal Spotify account, send me a Canvas message with the email registered to your spotify account**
        + Once I build out the app fully, I plan to get a free audit from spotify and expand the api access so that anyone can sign in 

#### Project Requirements
+ **Simon Deployed** -  Simon Service deployed to Code was deployed to [simon.soundcircle.xyz](https://simon.soundcircle.xyz)
+ **Github Link** - Every page contains a link to my project github
+ **Service Notes** - Thorough [notes](/public/notes/notes.md) were taken detailing what I learned about Node JS and Express
+ **Git Commits** - Many more than 10 commits :)
+ **HTTP Service** - For this project we were asked to use Express. However, many assignments ago I started using React with the NextJS framework. It made more sense for me to keep using NextJS rather than to switch the entire framework over to express. I was still able to create an HTTP service using this framework (which is also dependent on Node.js). 
+ **Static Middleware** - Despite using NextJS, my app still uses static middleware to serve up frontend code
+ **3rd Party Endpoints** - My app uses the spotify API. I call the 3rd party endpoints to get information from spotify. An example of this is shown [here](src/app/api/spotify/artists/route.js)
+ **Backend Service Endpoints** - In my server, I created endpoints that are used to GET information from my server about a users Profile, Songs, and Artists. These are accessed by visiting /api/spotify, /api/spotify/songs, /api/spotify/artists
+ **Frontend Calls Endpoints** - My Server calls the endpoints listed above in the [UserDashboard](src/app/dashboard/UserDashboard.jsx) component. Doing this allows me to get the data from my server about a User's spotify username, top songs, top artists, and top Genres

#### Proof of API Functionality Images
+ I took these images from logging in with my personal spotify (I have registered this account, I just don't want to post the password to it on Github)
    + Unfortunately the example account above doesn't have enough listening history yet to load in data from the API so when you login it will be blank for a couple of days <- The rest of the app should still be usable

| ![Top Songs Tab](/public/images/topSongs.png) | ![Top Artists Tab](/public/images/topArtists.png) | ![Top Genres Tab](/public/images/topGenres.png) |
| :-: | :-: | :-: |
| **Top Songs** | **Top Artists** | **Top Genres** | 

# Login + Database Deliverable

+ This is the [startup site](https://startup.soundcircle.xyz)!
+ Continued coding my app using react nextjs
+ The biggest changes in this app were that I migrated the app from authentication using supabase -> writing my own authentication code
    + This included having to generate auth tokens, store data securely, and write my own middleware to ensure that only authenticated users could access the dashboard pages
    + This also meant that I had to write the [callback](src/app/auth/callback/route.js) for the Spotify API by myself (This took most of my time hahaha)
+ I also made sure to store all of the song, artist, genre, and profile information on MongoDB
    + Right now you still aren't able to see friend data yet but that should be coming soon!

#### Project Requirements
+ **Simon Deployed** - Code was deployed to [simon.soundcircle.xyz](https://simon.soundcircle.xyz)
+ **Github Link** - Every page contains a link to my project github
+ **Authentication notes Notes** - Thorough [notes](/public/notes/notes.md) were taken detailing what I learned from this assignment
+ **Git Commits** - Many more than 10 commits :)
+ **New User Registration** - New users are able to [register](src/app/auth/createUser/route.js) with the "create new account" button on the home page. The first time a user does this, it will log them into the site as well. A users credentials are stored in MongoDB.
+ **MongoDB** - I use MongoDB to store a users credentials, as well as data obtained from the api (This includes a users spotify profile information, top songs, and top artists). Mongo credentials are stored securely in a .env.local file (not accesible on github)
+ **Credentials In MongoDB** - All credentials are stored securely in MongoDB (The password is stored in an encrypted form). When a user attempts to [login](src/app/auth/login/route.js), endpoints are called that verify that their username and password match the ones stored in the database. If the user is verified, an access token is then generated. This access token allows allows the user to access the dashboard (and not get kicked back to the home page by the middleware)
+ **Restricted Funtionality Based on Authentication** - For my app, I wrote [middleware](src/middleware.js) to ensure that only users that were currently logged in could view the dashboard. This middleware worked by validating the auth token stored in a users cookies. If a user didn't have a valid auth token, it kicked them back to the home page. 

#### Being Able To Login For Grading
+ Since my app uses the Spotify API, a user has to connect a spotify account after logging in 
    + If you don't you wont be able to see any of your top songs, artists, or genres
+ Since I know that not everyone (grading TA's) has a spotify account, I created an example Spotify account that people can use to login to the site and test its functionality (This is for logging into spotify!! Not the home page username/password)
    + Spotify Username: **examplespotifyemail@gmail.com**
    + Spotify Password: **example12345**
        + Since this account is so new it only has limited data (I think it only shows 4 top artists and the short term, medium term, and long term data is all the same)
        + **If you want to be able to login to my website using your personal Spotify account, send me a Canvas message with the email registered to your spotify account**
        + Once I build out the app fully, I plan to get a free audit from spotify and expand the api access so that anyone can sign in 

# Websocket Deliverable
+ This is the [startup site](https://startup.soundcircle.xyz)!
+ Continued coding my app using react nextjs
+ For this assignment I created a seperate [Websocket Server](index.js) in express 
+ The purpose of the websocket data was to show users when their friends are/aren't logged into the app

#### Project Requirements
+ **Simon Deployed** - Code was deployed to [simon.soundcircle.xyz](https://simon.soundcircle.xyz)
+ **Github Link** - Every page contains a link to my project github
+ **Authentication notes Notes** - Thorough [notes](/public/notes/notes.md) were taken detailing what I learned from this assignment
+ **Git Commits** - Many more than 10 commits :)
+ **Backend Listens For Websocket Connection** - My backend is [here](index.js). Since I created the backend using express, I couldn't host it on the same domain that my nextJS app was running on. Because of this, I set up a new subdomain [websocket.soundcircle.xyz](https://websocket.soundcircle.xyz/) to host the Websocket Server.
+ **Frontend makes WebSocket connection** - My frontend that connects to the websocket is [here](src/app/dashboard/UsersOnlineProvider.jsx). The frontend connection has environment variables to be able to connect to the server on both localhost and in production
+ **Data sent over WebSocket connection** - The data passed over the websocket connection is a user's username. Once a user signs into their account, their username is added to an array that contains the information for all active users. As soon as a user logs off, their username is then removed from this array. Essentially, the frontend sends the backend the current user's username. The backend then responds to the frontend with an array of all users currently logged on.
+ **WebSocket data displayed in the application interface** - My Websocket data is displayed on the friends page. Once you add friends to your account, each of your friends will have a grey or green circle on the top left of their profile picture. If the circle is grey it means that the user is not currently active, and if it is green it means that they are logged in and active.

| ![Websocket Data](public/images/websocket.png) | 
| :-: |
| **Websocket Data** |
+ Green means a user is logged in currently and grey means they are not

#### Being Able To Login For Grading (UPDATED INFORMATION)
+ Logging In on the Home Page Works Normally -- You can create any account you want + login
+ Once you get to the dashboard, there will be a button named "Update Spotify API"
    + Once you click this button you will be prompted to login to Spotify
        + The spotify API that I am using is currently in dev mode. This means that all spotify users have to be pre-registered to access API data. This means that if you sign into a personal account that you will not be able to see any information on the dashboard and it will be stuck in a perpetual "loading" state
        + Instead, I created an example spotify account that you can login to to see how the API data is displayed:

        + **Spotify Username: examplespotifyemail@gmail.com**
        + **Spotify Password: example12345**
            + Note that because this account is so new that the short, medium, and long term data on the dashboard will all be the same. To see this feature working, click on friend profiles (in the friends tab) to view their dahsboards and listening history
        
    + If you are not prompted to sign in to spotify after hitting the "Update Spotify API" button, this means that you are propbably already logged into your personal spotify account on your computer + that this is cached in your browser. If you want to see song data for the example account, re-visit my site in a Private Browser and sign into the example Spotify account (see above)

# React Deliverable
+ This is the [startup site](https://startup.soundcircle.xyz)!
+ Up to this point, I have been coding my project entirely in React Next.JS
    + Next.JS is a framework similar to Vite
    + One of the main differences is that nextJS focuses heavily on features for server/client side rendering 
+ Because of this, all of the files in my project are written in React

#### Project Requirements
+ **Simon Deployed** - Code was deployed to [simon.soundcircle.xyz](https://simon.soundcircle.xyz)
+ **Github Link** - Every page contains a link to my project github in the footer
+ **Authentication notes Notes** - Thorough [notes](/public/notes/notes.md) were taken detailing what I learned from this assignment
+ **Git Commits** - Many more than 10 commits :)
+ **Bundled Using Framework** - For this requirement we were asked to bundle our project using Vite. However, since I coded my entire project using NextJS, it made more sense not to switch frameworks.
+ **Multiple Functional React Components** - My entire project is coded in react!!
+ **React Router** - I use react router OFTEN in my project. For just one example of where I use this check out the [Home Page](src/app/page.jsx) of my project
+ **React Hooks** - I use A LOT of react hooks in my project including useState, useEffect, useContext, and useRef. For an example where I use some of these check out the [Users Online Provider](src/app/dashboard/UsersOnlineProvider.jsx) page of my project

#### Being Able To Login For Grading 
+ Logging In on the Home Page Works Normally -- You can create any account you want + login
+ Once you get to the dashboard, there will be a button named "Update Spotify API"
    + Once you click this button you will be prompted to login to Spotify
        + The spotify API that I am using is currently in dev mode. This means that all spotify users have to be pre-registered to access API data. This means that if you sign into a personal account that you will not be able to see any information on the dashboard and it will be stuck in a perpetual "loading" state
        + Instead, I created an example spotify account that you can login to to see how the API data is displayed:

        + **Spotify Username: examplespotifyemail@gmail.com**
        + **Spotify Password: example12345**
            + Note that because this account is so new that the short, medium, and long term data on the dashboard will all be the same. To see this feature working, click on friend profiles (in the friends tab) to view their dahsboards and listening history
        
    + If you are not prompted to sign in to spotify after hitting the "Update Spotify API" button, this means that you are propbably already logged into your personal spotify account on your computer + that this is cached in your browser. If you want to see song data for the example account, re-visit my site in a Private Browser and sign into the example Spotify account (see above)




