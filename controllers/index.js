const router = require("express").Router();

// const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
// const sleepRoutes = require("./sleeppage-routes");

router.use("/", homeRoutes);
// router.use("/sleep", sleepRoutes);

// router.use("/api", apiRoutes);

module.exports = router;
