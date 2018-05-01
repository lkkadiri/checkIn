# Check-in
Checkin lets users checkin to a location using their phone number. On first checkin, the user is awarded 50 points and gets an email regarding the same and from then on, they get 20 points everytime they visit the location. A user can only checkin at a location every 5 minutes for fair usage of the system. 

### Architecture
The application is divided into a frontend and a backend to scale independently with the structure as below.
```
Baker
    - checkin-server
    - check-ui
```
## Installation
The application has been dockerized in order to reduce the setup time and avoid any environment differences. It is highly advised to get the app up and running through docker but clear instructions are provided for the setup of individual projects.

### Required Dependencies
In order to get started you will need to install [NodeJS](https://nodejs.org/en/download/) and [Docker](https://docs.docker.com/compose/install/).
```
docker
docker-compose
node
npm
yarn(optional)
```

#### Install dependencies
```
npm install
```
or 
```
yarn install
```

## **NOTE: In order for the application to function properly, it needs environment variables setup. checkin-server and checkin-ui both need a ```.env``` file at their roots with the documented variables and values.
#### Starting the application

Start both the frontend and backend on docker containers by issuing the following command
```
npm start
```
or 

```
yarn start
```
Once the app has booted, you can interact with the app at
```
http://localhost:3000
```

NOTE: The first time setup will be a little slower, when you are tailing the logs make sure to see these lines. This is when you run yarn start and go get a coffee.
```
Creating baker_postgres ... done
Starting baker_postgres ... done
Starting baker_node     ... done
Starting baker_ui ... done
```
#### Stopping the application

Stop both the frontend and backend on docker containers by issuing the following command
```
npm run stop
```
or 
```
yarn stop
```

Once the app has stopped, you can no longer interact with the app at
```
http://localhost:3000 && http://localhost:3001
```

Note: Please finish readng the instructions on logging below to make sure the application is completely booted before attempting to interact with it.
#### Logging
You can view or tail the logs by running,
```
npm run logs
```
or 
```
yarn logs
```
Note: If you dont already have the various docker containers initially, it takes a few minutes to download all the images, install the dependencies and run the applications. Once dione with the initial setup, subsequent startup times are really fast.

You can verify from loggin that once you see the logo below, the backend is up and running
```
1|Server   | baker_node |
1|Server   | baker_node |
1|Server   | baker_node | _____ _           _   _               _____     _              _____        _
1|Server   | baker_node | |     | |_ ___ ___| |_|_|___    ___   | __  |___| |_ ___ ___   |_   _|__ ___| |_
1|Server   | baker_node | |   --|   | -_|  _| '_| |   |  |___|  | __ -| .'| '_| -_|  _|    | || -_|  _|   |
1|Server   | baker_node | |_____|_|_|___|___|_,_|_|_|_|         |_____|__,|_,_|___|_|      |_||___|___|_|_|
1|Server   | baker_node |
1|Server   | baker_node |
1|Server   | baker_node | Connection has been established successfully.

```

and when you see the following, the UI is up and running as well.
```
0|UI       | baker_ui | Starting the development server...
0|UI       | baker_ui |
0|UI       | baker_ui | Compiled successfully!
0|UI       | baker_ui |
0|UI       | baker_ui | You can now view checkin-ui in the browser.
0|UI       | baker_ui |
0|UI       | baker_ui |   Local:            http://localhost:3000/
0|UI       | baker_ui |   On Your Network:  http://172.22.0.2:3000/
0|UI       | baker_ui |
```