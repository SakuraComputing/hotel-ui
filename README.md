# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

React version 18.2
React Redux Toolkit for state management
React Testing Library for Tests

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

using React Testing library, testing the user experience as per RTL. So tests are on the Dashboard component

### Notes on testing

I would use a mock store for testing in a real project not the actual store

# On the Beach Frontend Software Engineer code test

Produce a HTML, CSS and JavaScript representation of the given `design.png` with the following features:

- Sort the results by price (this should be the default)
- Sort the results by star rating and highlight when active
- Sort the results alphabetically by hotel name and highlight when active
- Ability to toggle expanded hotel description

We are looking for a client side solution, there should be no server logic involved.

Feel free to use JavaScript libraries or frameworks. Imagine this will be a component added to a large website.

You may use things like CSS Preprocessors and JavaScript build tools, but if you do please include the dependencies/source files.
Feel free to source your own icons.

Things we like:

- Semantic HTML
- Modular CSS
- Error/warning free JavaScript
- Tests
- Clean flow of state throughout the application

## Oustanding Problems

Re-rendering - useSelector needs to be memoized somehow
Tests not sufficient
Fonts and Colours need more time on them
SASS/CSS needs refactoring
Rating needs empty stars removing
Button text color too light
Read more about the hotel chevron needs sorting
Occupants numbers not in bold
