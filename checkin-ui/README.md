# Checkin UI
Frontend for the Checkin app


### Dependencies
 - Docker
 - NodeJS

# Installation
You can get the frontend running in one of two ways,
 - Docker
 - Locally on your machine

 Using docker is the suggested way as to avoid environment issues.
# Docker
This is the easiest way to get this UI up and running. You just need to [install docker](https://docs.docker.com/compose/install/) and run the following
```
docker-compose up
```
This will fetch a nodejs docker image, install the dependenices to run the UI and starts the server at 
```
http://localhost:3000
```
# Install locally
If you would like to run this checkin-ui on your host machine, you will need to follow the steps below:

### _[Install Node](https://nodejs.org/en/download/)_
Alternatively you can install [yarn](https://yarnpkg.com/en/docs/install#mac-stable) in lieu of npm

### _Install dependencies_
```
yarn
```
or
```
npm install
```

### Environment setup
The required settings for the app to function are defined in .env files, the UI just needs the following defined
```
REACT_APP_CHEKIN_API_URL=http://localhost:3001
```

### Start the app
```
yarn start
```
or 
```
npm start
```
## Testing

To run all the backend tests, run
```
yarn test
```
or 
```
npm run test
```
### Coverage
When tests are run , code coverage is generated and can be viewed at
```
open coverage/index.html
```