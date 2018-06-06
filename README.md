# Backlog

A simple tool to help you manage your time visually and improve your ability to estimate how long a task will take you.

## HOW TO RUN THIS PROJECT:

Step 1: git clone the repo

Step 2: cd into the repo folder and run `npm install`

Step 3: run `export NODE_ENV=dev`

Step 4: run `npm start`

Step 5: open a new terminal window, and run `ng serve`

Step 6: open your browser and visit: localhost:4200

## HOW TO USE THIS APP:

Step 1: Sign In

Step 2: Add a task. Add 1 or 2 more tasks. (Tasks will not display just yet.)

Step 3: Refresh the page (we had an issue with the component not updating after tasks were added to the database)

Step 4: Click start on one task. (DO NOT REFRESH PAGE.) A timer should pop up. No other tasks may be started until this task is completed.

Step 5: Click the play button on this task. (DO NOT REFRESH PAGE.) Timer should start. Let run for a minute.

Step 6: Click stop. Refresh the page. Task should move out of current tasks to completed tasks and actual time should be updated.

Step 7: Click on the graph button. Graph should be populated with that one task.

Step 8: Repeat with other tasks if you wish. This order of operations is pretty important. We were unable to fix some of the refreshing and the like, so the state is pretty sensitive to this order.

---

PS - We really tried our very hardest. This was a big learning experience and as much as we tried to keep the scope small, we ended up being over-ambitious.

Link to [Heroku](https://backlogjamm.herokuapp.com/). It mostly works except for the timer, which is strange because the timer works locally. This was more of an experiment than actually necessary.

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
