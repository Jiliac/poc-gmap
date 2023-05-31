# Google Address Autocomplete and Validation

This project is a proof of concept (POC) for integrating Google's Address Autocomplete feature in the frontend and performing address validation on the backend.

## Prerequisites

- Node.js
- Yarn package manager
- Google Cloud account with access to Places API and Geocoding API

## Project setup

1. Clone the repository and navigate to the project directory.
2. Install the project dependencies:

   ```bash
   yarn install
   ```

3. Create a .env file in the project root and add your Google API Key:

   ```bash
   NEXT_PUBLIC_GOOGLE_API_KEY=your-google-api-key
   ```

## Running the project

To start the development server, run:
```bash
yarn dev
```

This will start the Next.js development server at `http://localhost:3000`.

## Using the application

Open your browser and navigate to `http://localhost:3000`. You will see an address form with autocomplete capability powered by Google Places API. When you select an address from the dropdown, the address is saved in the application state.

Click the "Validate Address" button to send the selected address to the backend for validation using Google's Geocoding API. If the backend determines the address is valid, it will return `{ valid: true }`; otherwise, it will return `{ valid: false }`.

The response from the backend is logged in the console.

## Built With

- Next.js
- React
- Typescript
- Google Places API
- Google Geocoding API
- react-google-places-autocomplete
- node-geocoder

## Author

Valentin Manès

## Disclaimer

This project is a POC and not intended for use in production without proper error handling, input sanitization, and security measures. Always secure your API keys and be aware of usage limits when working with Google APIs.
