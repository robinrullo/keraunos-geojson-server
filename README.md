# keraunos-geojson-server
Get data from [Keraunos realtime lightning](https://www.keraunos.org/temps-reel/impacts-de-foudre/orages-en-direct-france-foudre-eclairs-temps-reel-activite-electrique-suivi) and parse features to a GeoJSON FeatureCollection

## NPM scripts
* `npm start`: serve application.
* `npm run dev`: serve application with nodemon (restart on changes).

## Server config
Create a dotenv file (`.env`) in root directory. The default configuration is:
```dotenv
# Express server configuration
HOST=localhost
PORT=4000
```

## Routes
5 time slots are available: 1, 3, 6, 12 or 24

- `/GeoJSON/:time_slot`: return *GeoJSON Feature collection*:
```json
{
  "status": "OK",
  "time_slot": "1",
  "legend": "/legend/1",
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          38.746653,
          54.442109
        ]
      },
      "properties": {
        "date": "2021-06-06T09:40:18.000Z",
        "color": "#764893"
      }
    }
  ]
}
```

- `/legend/:time_slot`: return *SVG legend*:
    - 1 hour:
    ![1 hour](https://www.keraunos.org/img/legende1.svg)
    - 3 hour:
    ![3 hour](https://www.keraunos.org/img/legende3.svg)
    - 6 hour:
    ![6 hour](https://www.keraunos.org/img/legende6.svg)
    - 12 hour:
    ![12 hour](https://www.keraunos.org/img/legende12.svg)
    - 24 hour:
    ![24 hour](https://www.keraunos.org/img/legende24.svg)
