### Kilo Ionic App ###

Quick Start
====

First, install Node.js(including npm). Then install ionic:
```
npm install -g cordova ionic
```

Go inside root directory and run `ionic serve` to run as Web app.
```
ionic serve
```

Run iOS/Android emulator 
```
ionic platform add ios
ionic build ios
ionic emulate ios
```

Configurations
===

There are two backend - REST API and Meteor.
 
REST API backend
----

Look at `www/js/app.js`. Change the REST API endpoint in `APPCONFIG.URL` variable.

```
//.constant("FBURL","https://kilo.firebaseio.com/")
.constant("APPCONFIG",
    {        
        URL : "http://kiloheroapi.flansoft.com/",
        ANDRIOD : 'android',
        IOS : 'ios',
        WINDOW : 'wince',
        DEBUG : true 
    }
)
```

Meteor (Chat API) backend
----

Modify `__meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL` in `www/lib/meteor-client-side/meteor-runtime-config.js` to set the Meteor backend.

```
// Remote URL for testing in Mobile is set as default. 
__meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL = 'http://ec2-52-77-228-190.ap-southeast-1.compute.amazonaws.com/';

// To run Meteor running in local, change it to http://localhost:3000.
//__meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL = 'http://localhost:3000';
```

`server` folder contains the Meteor backend app. To run it locally, install Meteor and run `meteor`. Meteor will serve at http://localhost:3000
`server/server-deployment` contains the deployment scripts. Contact Nay Lin for more details.


* Dependencies ==> TBD
* How to run tests ==> TBD
* Deployment instructions ==> TBD