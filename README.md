Fetch data by Using React js
The code is a React functional component named App that fetches posts data from the JSONPlaceholder API and displays it. It uses the useState hook to manage state for the posts data and loading status. The useEffect hook is used to fetch data when the component mounts. While data is being fetched, loading spinners are displayed, and once the data is loaded, the posts are rendered as Bootstrap cards. Finally, we get a message displayed below the posts.
** Small Roadmap **
Define State --> Fetch Data ──────────> Display Loading ──────────> Render Posts | | v v Display Completion Message <───────
Here We start by defining state variables for managing the posts data and loading status ,then we fetch data from the JSONPlaceholder API using the useEffect hook. While data is being fetched, loading spinners are displayed to indicate the loading process. Once the data is loaded, the posts are rendered as Bootstrap cards. Finally, after all posts are rendered, a completion message is displayed.
Steps :
Define State: Initialize state variables for posts data and loading status using the useState hook.
Fetch Data: Use the useEffect hook to fetch posts data from the JSONPlaceholder API when the component mounts.
Display Loading: Show loading spinners while data is being fetched.
Render Posts: Once data is loaded, render each post as a Bootstrap card.
Display Completion Message: Show a completion message once all posts are rendered.

How to run code here are steps to follow:

6.	To run this code, you would typically use a JavaScript package manager like npm   or yarn to install dependencies and start the development server. Here are the steps you can follow:
Make sure you have Node.js installed on your system better to have  upgraded version(v20.12.2). You can download it from here.
Navigate to the directory where your package.json file is located (usually the root directory of your project).
Open a terminal or command prompt in that directory.
npm install (or)yarn
Once the dependencies are installed, you can start the development server by running:  npm start  (or) yarn start
Your default web browser should open automatically, displaying the running React application. If it doesn't, you can manually open your web browser and navigate to http://localhost:3000 or whichever port your development server is running on.

