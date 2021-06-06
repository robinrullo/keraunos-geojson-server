const { fetch_data } = require("../http_client");

exports.get_legend = async (req, res) => {
    let { time } = req.params;

    const data = await fetch_data({
        url: `https://www.keraunos.org/img/legende${time}.svg`,
        headers:{
            "Content-Type": "image/svg+xml",
        },
    });
    if (data.error){
        console.log(`Error while fetching legend. Response status: ${data.status}`);
        return {
            error: true,
            status: 500,
        };
    }

    res.setHeader("content-type", "image/svg+xml")
    res.send(data.data);
}
