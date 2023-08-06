# CoinGecko API Server

This project sets up a server to interact with the CoinGecko API (https://api.coingecko.com/api/v3) for cryptocurrency data retrieval.

## Project Structure

The project is organized as follows:

- `.env`: Configuration file for environment variables.
- `.gitignore`: Specifies files and directories that should be ignored by version control.
- `consts.js`: Constants used throughout the project.
- `output.txt`: Sample output file (if applicable).
- `package-lock.json` and `package.json`: Files for managing project dependencies.
- `server.js`: Main server file.

### Directories

- `controllers`: Contains controllers for handling different API endpoints.
  - `coinsController.js`: Controller for interacting with cryptocurrency data.
  - `exchangeController.js`: Controller for interacting with exchange data.

- `middlewares`: Middleware functions used in the application.
  - `errorHandler.js`: Custom error handler middleware.

- `models`: Contains database models (if applicable).
  - `coins.js`: Model for storing cryptocurrency data.
  - `exchange.js`: Model for storing exchange data.

- `routes`: Contains route definitions for different API endpoints.
  - `coinsRoutes.js`: Routes for cryptocurrency-related endpoints.
  - `exchangeRoutes.js`: Routes for exchange-related endpoints.

## Getting Started

1. Clone this repository.
2. Install the project dependencies using `npm install`.
3. Create a `.env` file based on `.env.example` and add your API keys or other configurations.
4. Start the server using `node server.js`.
5. The server should now be running at the specified port (default: 3000).

## API Endpoints

### Coins

- `GET /coins/list`: Get a list of all available coins.
- `GET /coins/search`: Search for coins based on a query.
- `GET /coins/trending`: Get the top trending coins.
- `GET /coins/list/:id`: Get details about a specific coin by its ID.

### Exchanges

- `GET /exchanges/list`: Get a list of all available exchanges.
- `GET /exchanges/list/:id/tickers`: Get tickers for a specific exchange.
- `GET /exchanges/list/:id/volume_chart`: Get volume chart data for a specific exchange.
- `GET /exchanges/list/:id`: Get details about a specific exchange.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m "Description of changes"`.
4. Push to your forked repository: `git push origin feature-name`.
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
