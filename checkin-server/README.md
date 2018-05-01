# Checkin Server
Backend for the Checkin app


### Dependencies
 - Docker
 - Postgresql
 - NodeJS

# Installation
You can get the backend running in one of two ways,
 - Docker
 - Locally on your machine

 Using docker is the suggested way as to avoid environment issues.
# Docker
This is the easiest way to get this backend up and running. You just need to [install docker](https://docs.docker.com/compose/install/) and run the following
```
docker-compose up
```
This will fetch node and postgres docker images if you dont already have the ones specified in the docker compose file, sets up the database, runs the migrations and finally runs the node server that communicates with the database to store and fetch user information. It starts the server at
```
http://localhost:3001
```
# Install locally
If you would like to run this checkin-server backend on your host machine, you will need to follow the steps below:

### _[Install Node](https://nodejs.org/en/download/)_

### _Install dependencies_
```
yarn
```
or
```
npm install
```

### _Install Postgres_
You can install postgres in many ways by folowing the [documentation](https://www.postgresql.org/download/)
### _Run database migrations_
In order to run the migrations to create tables necessary to run the checkin-server, run the following
```
./node_modules/.bin/sequelize db:migrate
```

or if you have npx installed

```
npx sequelize db:migrate
```


### Environment setup
The required settings for the app to function are defined in .env files, the server needs the following defined
```
SENDGRID_APIKEY=SG.somevalidsendgridapikey
DIALECT=postgres
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

### Coverage
When tests are run , code coverage is generated and can be viewed at
```
open coverage/index.html
```