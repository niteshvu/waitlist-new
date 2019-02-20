// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBvosXE9t9l8ZSLiLtzkxO_kVVEVm7Rpf4",
    authDomain: "waitlist-new.firebaseapp.com",
    databaseURL: "https://waitlist-new.firebaseio.com",
    projectId: "waitlist-new",
    storageBucket: "waitlist-new.appspot.com",
    messagingSenderId: "1004520545987"
  }
};
