/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'super-rentals',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
<<<<<<< HEAD
    
    firebase: {
      apiKey: "AIzaSyDTbPEXCZziGlngQZexBnUK1QMfxQ6X5d8",
      authDomain: "super-rentals-e197d.firebaseapp.com",
      databaseURL: "https://super-rentals-e197d.firebaseio.com",
      storageBucket: "super-rentals-e197d.appspot.com"
=======

    firebase: {
      apiKey: "AIzaSyB3KkQ48BdZuoFJpaT0Za0I5Djos00Cmi0",
      authDomain: "super-rentals-92323.firebaseapp.com",
      databaseURL: "https://super-rentals-92323.firebaseio.com",
      storageBucket: "",
      projectId: "super-rentals-92323",
      messagingSenderId: "958619781094"
>>>>>>> d33c8a888429fb71e716770bf9790a1eca9e0767
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
