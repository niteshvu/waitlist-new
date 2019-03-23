// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAZGMKZhDvAHGde7mdZlgraULPg2BOACJ4",
    authDomain: "waitlist-liaison.firebaseapp.com",
    databaseURL: "https://waitlist-liaison.firebaseio.com",
    projectId: "waitlist-liaison",
    storageBucket: "waitlist-liaison.appspot.com",
    messagingSenderId: "365511080429"
  }
};
