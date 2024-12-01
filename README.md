# Game Catalog Website

<p align="left">
   <img src="https://img.shields.io/badge/STATUS-UNDER%20DEVELOPMENT-green">
   </p>

This project is a React-based website that fetches and displays a catalog of available in the store. The data is fetched from a third-party API.

## Features
- Fetch game data from an external API
- Display a list of available games for sale
- Responsive and user-friendly interface

## Status
**Ongoing Project:** This project is currently under development. Some features and functionalities may not be fully implemented yet.

## Requirements
- Node.js
- npm or yarn
- Internet connection (to fetch game data)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/GameCatalogWebsite.git
   ```
2. Navigate to the project directory:
   ```sh
   cd GameCatalogWebsite
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

## Usage
1. Start the development server:
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```
2. Open your browser and go to `http://localhost:3000` to see the game catalog.

## Project Structure
- `src/components/ListGroup`: Contains the components for displaying the list of games.
- `src/App.js`: The main component that handles fetching and displaying game data.
- `src/App.css`: Styles for the application.

## Code Overview
The main component (`App.js`) fetches data from an API and displays the list of games. Here's a brief overview of the code:

```javascript
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  interface Game {
    id: number;
    name: string;
    price: number;
  }

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios
      .get<Game[]>("https://exampleapi.com/games")
      .then((res) => setGames(res.data));
  }, []);

  return (
    <>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name} - ${game.price}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
```

## Third-Party Libraries
- [axios](https://github.com/axios/axios): For making HTTP requests.
- [React](https://reactjs.org/): For building the user interface.

## API
The application uses a third-party API to fetch the list of games. You can configure the API endpoint in the `useEffect` hook in `App.js`.

```javascript
useEffect(() => {
  axios
    .get<Game[]>("https://exampleapi.com/games")
    .then((res) => setGames(res.data));
}, []);
```

## Styling
The application uses basic CSS for styling, which is included in the `App.css` file.


## Contact
If you have any questions or suggestions, feel free to reach out at vilcheariel1@gmail.com
