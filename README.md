# WK_LAB

Welcome! This website is built with React+Redux for the frontend and Express.js on the backend. The frontend code is deployed on (Netlify)[https://www.netlify.com/] and the backend code is deployed on (Heroku)[https://heroku.com].

# Project 1 - Get capital gains/losses using Robinhood API

### Description

Robinhood is a financial investment app that allows individuals to invest in public companies. The app is especially great for beginner investors because of its user-friendly UI/UX. However, the app does not seem to provide capital gains or losses on stocks that you own (or owned). Therefore, I used [aurbano/robinhood-node](https://github.com/aurbano/robinhood-node) to keep track of my stocks' capital gains/losses. The project also provides data visualizations of your overview portfolio categorized by ETFs, Non-ETFs, and Cash.

### Features

- Overview of your portfolio
- Overview of your ETF Stocks
- Overview of your non-ETF Stocks
- History of your capital gains/losses on all stocks

### Tech Spec

**Frontend** - React, Redux, D3

**Backend** - Express.js

### How to use it

The demo for this project is on my (website)[https://woosika.com/robinhood]. If you want to check it out with your Robinhood account, please refer to the following steps. The heroku server is put on sleep to save server resources while the app is not being used. Therfore, it might take a little bit longer to login the first time you visit the site because of the time it takes for the server to run again.

1. Clone the project

```
git clone https://github.com/wakoong/playground.git
```

2. Add dependencies

```
yarn
```

3. Add .env file at the root directory
4. Add your Robinhood account inside the .env file

```
NODE_ENV=development
RH_USERNAME=Your email (replace @ with %40)
RH_PASSWORD=Your password
RH_CLIENT_ID=Your client id
```

- You need to have Robinhood web to acquire your client id. If you have one already, log on to your account and right-click and select 'View Page Source'. The oAuthClientId will be your client id.

5. That's it for the setup. Run both 'yarn dev' for frontend and 'yarn start' for backend and you are good to go!

Please let me know if you have any question/feedback related to the project. You are welcome to email me at woosik.koong@gmail.com.
