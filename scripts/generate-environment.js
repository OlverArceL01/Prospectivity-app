const fs = require('fs');

fs.writeFileSync(
  'src/environments/environment.ts',
  `export const environment = {
    mapboxApiKey: '${process.env.MAPBOX_API_KEY}',
    apiUrl: '${process.env.API_URL}'
  };
`
);