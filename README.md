# Postgres Challenge

## What

A micro-app to practice using Postgres with Node.js.

## Why

To help learn Postgres, the pg module and how to integrate them into an application.

## How

### Quickstart

Clone/fork the repo and then run: `npm install`.

Create two empty folders `views/helpers` and `views/partials` (if you don't do this Handlebars/Vision may throw errors). These folders will be used for any Handlebars helpers or partials you might want to create.

Start the server `npm start`, or to run it in dev mode: `npm run dev` (requires nodemon). Remember nodemon won't recompile templates, so you'll need to restart the server if you amend any of the Handlebars templates.

### Orientation

- The `Hapi` server is configured in `server.js` - you shouldn't need to alter this file.

- Environment variables are loaded using `env2` from a file `config.env` at the root (which is excluded from the repo via the .gitignore)
- Plugins are loaded from `plugins.js`, which just loads `Vision` (you shouldn't need to change this)
- Handlebars is configured in `configure_handlebars.js` (you shouldn't need to change this)
- Routes are included as an array from `routes.js` (one default route included)
- The default Handlebars template is `views/layout/default.html`
- Handlebars templates are served from `views/` (see `routes.js` for an example route which uses the `views/users.html` template)

### Challenges

1. Currently users are loaded from a static array in `routes.js`. Create a postgres database with some initial users (use the same data or create your own).

2. Update the existing `/` route to load data from your new database instead of the array.

3. Create a new user and add a route to __create__ a new user (hint: think about which http method you should use to create a record)

4. Create a form to edit a user (you decide on how this will work on the front end) and a route to __update__ an existing user.

4. Create a form to delete a user (you decide on how this will work on the front end) and a route to __delete__ an existing user.

5. Update the database structure to hold additional information on each user (you choose, but try to pick information likely to be specific to a user - e.g. email address, home address etc)

6. Create a user detail view and a route which will __read__ from the database and return all the data held for a particular user.

7. Let's refactor the database - create a new table holding user types. Add some additional fields which might be specific to a user type (use your imagination, but think about what data might be specific to a user type, as opposed to a user). Update the users routes to work with the new data structure.

8. Add routes to create, read, update and delete a user type. Think about what might happen if you try to delete a user type which is associated with a user. How should you deal with this?

9. Testing - if you haven't already done so, add some tests. Think about how your tests will work remotely (e.g. on a CI server).
