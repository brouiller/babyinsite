const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const sleepRoutes = require("./sleeppage-routes");
const dietRoutes = require("./dietpage-routes");
const diaperRoutes = require("./diaperpage-routes");

router.use("/", homeRoutes);
router.use("/sleep", sleepRoutes);
router.use("/diet", dietRoutes);
router.use("/diaper", diaperRoutes);

router.use("/api", apiRoutes);

module.exports = router;
