# LESS - Proof of Concept Study Application Example for Ionic 2

This small proof of concept application should show the general development workflow of an Ionic WebApp and as well give you the chance to see the performance in action.

## Install
* make sure that you have node and npm installed (tested on node v4.4.0 and npm v3.8.2)
* ```npm i ionic@beta -g```
* clone this repository
* ```npm install```

### Backend Server
This application relies on a basic json server that delivers the studies and where you can post your results. You can either use the preconfigured server - or configure your own:
* ```npm i json-server -g```
* ```json-server -p 9007 --watch db.json```

Then just adjust the API_URL constant in app/config.ts to point to your local instance, e.g.:
```export const API_URL: string = 'http://localhost:9007';```

## Run in the Browser
* ionic serve

## Run on your Phone
To run this app on your phone you need to add the specific platform and build the package for your device. More information in the [Ionic Documentation](http://ionicframework.com/docs/v2/getting-started/installation/).