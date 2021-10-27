const router = require("express").Router();

const homeRoutes = require("./home-routes.js");
const sleepRoutes = require("./sleep-routes");
const dietRoutes = require("./diet-routes");
const diaperRoutes = require("./diaper-routes");

router.use("/user", homeRoutes);
router.use("/sleep", sleepRoutes);
router.use("/diet", dietRoutes);
router.use("/diaper", diaperRoutes);

module.exports = router;
