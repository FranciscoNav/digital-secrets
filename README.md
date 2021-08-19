### Welcome to Digital Secrets!

## Description
Hello and welcome to Digital Secrets! Our mission is to allow our users to upload digital posts that can only be viewed by the user themselves. Our website is perfect for anyone trying to digitalize their secret recipes, diary, or notes. Just click the signup button to begin!

## Requirements
- Ruby 2.7.3
- NodeJS (v14 or higher), and npm
- Postgresql

## Setup
**Fork and clone this repository**.

For Front-End run:
```sh
bundle install
npm start  --prefix client
```

For the Back-end run:
```sh
sudo service postgresql start
rails s
```

Additional setup notes:
- You will have to have a postgresql password in order to run the back-end
- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on [http://localhost:4000](http://localhost:4000)


## Demo video
https://www.youtube.com/watch?v=X2KLQTny3Go