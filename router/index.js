const router = require("express").Router();

const points_controller = require("../controller/points_controller");
const legend_controller = require("../controller/legend_controller");


router
  .get("/GeoJSON/:time(1|3|6|12|24)", points_controller.get_points)
  .get("/legend/:time(1|3|6|12|24)", legend_controller.get_legend)

  .get("*", (req, res) => {
      res.redirect("/GeoJSON/1");
  });

module.exports = router;
