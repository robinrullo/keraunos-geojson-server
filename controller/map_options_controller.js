const { fetch_data } = require("../http_client");

exports.get_options = async () => {
  const data = await fetch_data({
    url: "https://www.keraunos.org/osm/options_carte/",
  });

  if (data.error){
    console.log(`Error while fetching Points. Response status: ${data.status}`);
    return {
      error: true,
      status: 500,
    }
  }

  const {data: options} = data;

  return {
    status: data.status,
    data: {
      colors: options.couleurs,
      min_zoom: options.taille_min,
      max_zoom: options.taille_max,
    },
  };
}
