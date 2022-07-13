# Quick Quiz

App to be built in create-react-app, the purpose of this project is to get back in the habit of actually building something from start to finish again. Now is a good time to do it as it coincides with the react course I’m doing on Udemy.

* To make use of Open Trivia API https://opentdb.com/api_config.php
* App style box in the center of the screen (no scroll on desktop, maybe needed on mobile)
* Fill out the form with quiz details to generate api url and get json data back.
* Store the quiz data in state, then play the quiz.
* User feedback after every question, red / green background
* Show how many questions were right / wrong at the end
* Play again button to display which returns the user to the form to make another api request.

Other things to include:
* Scroll / load animations
* Loading spinner when waiting for api call
* Axios for making api request

## My Implementation

Step 1:
* Create a new application use create-react-app
* Remove boilerplate code and display hello world to the screen
* Include sass in the project
* Create a variables file to store all colours & text in variables
* Create a container to house the app on all screen sizes, located in the centre of the screen.
* Add title and start button to container

Step 2:
* Create Form component for getting api query info
* Link the previously made ‘start’ button to show the form when clicked
* Add all the necessary fields to form component to get the info needed for the api call
* Style all the form groups
* Add submit button at the end of the form
* Store the quiz info in state when submit button is clicked
* Make the api call (function coming from separate api folder), and log the questions received to the console
* Add Loading spinner when form is submitted

Step 3:
* If api response_code isn’t 0, render ResubmitComponent 
* When response_code is 0, save the questions from api call to state in App.js
* Add state for ‘game in progress’ or something similar and state for the questions info retrieved from the api
* When questions state is populated, toggle game on state and render the GameComponent

Step 4:
* Populate Resubmit component with a message and two options. One to resubmit the quiz form, and the other to play a random quiz (using fallback questions array)
* Clicking the resubmit button should take the user back the form to try and resubmit
* Clicking the start random quiz button should start the game and render the GameComponent (setting the random questions in state and passing them down as props)

Step 5:
* Save ‘current question’ in state and render the question and answer buttons to the screen
* Update the answers rendered to the screen with the answers saved in state
* Add a question 1/10 display above the question, so the user knows which question they are answering
* Write a function that calls all the functions together to update all relevant question info (question, index, answers)

Step 6:
* Write a function that increases a score counter if the right answer is clicked
* When score is working, display a ‘next question’ button when an answer is clicked
* Make sure answer buttons are diabled when ‘next question’ button is on screen (prevent users from clicking correct answer again to increase score)
* Provide colour UI feedback (red/green) to show if the user answers correctly/incorrectly after every answer
* Colour feedback on buttons when answered (show correct answer when incorrect answer given)
* When the last question has been answered, display an end of game component instead of the ‘next question’ button
* In the end of game component, show the users score/questions and add  ‘play again’ button (which takes the user back to the beginning successfully)
* Show a gif & message based on the users’ score
* Filter question so the html symbols don’t display on the screen
* Create a set next question function to display the next question when the ‘next question’ button is clicked

Things to sort out after:
* Mobile responsiveness 
* No duplicate questions when playing a second time
* Remove console logs
* Add animations
* Decide on and implement a colour scheme


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
