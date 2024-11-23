# Pregnancy diet - food and drink finder for the pregnant woman
React-based web application helps pregnant women check the safety of various foods, drinks, and other products. 
The app retrieves data from a Firebase Firestore database and allows users to filter items based on category or search for specific food and drink items.

## Features
* By category-based filtering, users can select specific categories like "Drinks", "Foods", or "Others" to see relevant items.
* Users can search for specific items by name.
* The app fetches real-time data from Firestore and displays it based on user interactions.
* If no item is found or the search is empty, the app will display appropriate error messages.
  
## Installation
#### 1. Clone the repository:
https://github.com/your-repo/food-drink-finder.git<br>
`cd food-drink-finder`

#### 2. Install dependencies: 
Make sure you have Node.js installed. Then run:<br>
`npm install`

#### 3. Firebase setup:
Create a Firebase project in the Firebase Console.

Enable the Firestore database. 
Add your Firebase configuration file (config.js) to the Firebase folder with your Firebase project details.

#### 4. Run the development server: 
`npm start`

The app will be available at http://localhost:3000.

## Technologies
React<br>
Firebase Firestore<br>
CSS for styling

## Project Structure
/src<br>
  ├── /components<br>
  │   ├── Category.js      # Category selection component<br>
  │   ├── QA.js            # Search input form component<br>
  │   ├── Result.js        # Display search results<br>
  ├── /firebase<br>
  │   └── config.js        # Firebase configuration<br>
  ├── App.js               # Main application component<br>
  ├── index.js             # Entry point for React<br>
  └── index.css            # Global styles
