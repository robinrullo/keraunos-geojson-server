const { fetch_data } = require("../http_client");
const { get_options } = require("./map_options_controller");
const GeoJSON = require("geojson");

exports.get_points = async (req, res) => {
  let { time } = req.params;

  const points_data = await fetch_data({
    url: "https://www.keraunos.org/osm/ajax/" + time,
  });

  if (points_data.error){
    console.log(`Error while fetching Points. Response status: ${points_data.status}`);
    return res.sendStatus(500);
  }

  // Set default colors
  let colors = ["#E93223", "#F9D247", "#66B234", "#54BFEC", "#2F499E", "#764893"];

  // Get colors from keraunos map_options
  const options = await get_options();
  if (!options.error && options.data.colors.length >= 5) {
    colors = options.data.colors;
  }

  const points = points_data.data.map(
    ({ d, c, x, y }) => ({
      date: new Date(1e3 * d),
      color: colors[c],
      lng: x,
      lat: y,
    }),
  );

  let legend_url = "/legend/" + time;
  const feature_collection = GeoJSON.parse(points, {Point: ["lat", "lng"]});

  res.json({
    status: "OK",
    time_slot: time,
    legend: legend_url,
    ...feature_collection,
  });
}
