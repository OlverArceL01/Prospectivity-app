# Mining Prospectivity Chile Web App

## File System
The current repository keeps the following structure.

```
prospectivity-app/
├── scripts/
│   └── generate-environment.js # Generate environment variables
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── map/ # Visualize the prospectivity map
|   |   |   └── navbar/ # Navigation bar
│   │   ├── interfaces/
│   │   ├── pages/
│   │   |   ├── prospectivity-map/ # Prospectivity map page
│   │   |   └── sample-prediction/ # Page to predict prospectivity from a measurement
│   │   ├── services/
│   │   |   └── prospectivity.ts # Prospectivity service to connect to the API
│   │   ├── validators/ # Validate the prospectivity prediction form
│   │   └── app.routes.ts # Application routes
│   └── environment/ # Mapbox API key and API URL
├── .env.example # Example environment variables for the API key and API URL
├── Dockerfile # Docker configuration for deployment
├── nginx.conf # Redirect requests to index.html for for Angular routing
└── package.json
```

## Installation

Use `npm install` to install all necesssary packages. Then you can run the application using `ng serve` or build it using `npm run build`

This project uses Node.js `22.23.2` and Angular `22.2.0`.

For development purposes, execute `ng generate environments` and update `environment.ts`, `environment.development.ts` with the following:

```javascript
export const environment = {
    mapboxApiKey: 'your mapbox api key',
    apiUrl: 'https://api.prospectivity.olver.site'
  };

```

For deployment, refer to `.env.example` to create your own `.env` file and add your Mapbox API key and API URL. Then, execute `npm run build`. This will generate `environment.ts` with the required environment variables.

## Links

You can also use the API directly or view its documentation.

API Docs: https://api.prospectivity.olver.site/docs

You can also view the Machine Learning repository on GitHub: https://github.com/OlverArceL01/Prospectivity-ml