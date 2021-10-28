const router = require("express").Router();

const sleepRoutes = require("./sleep-routes");
const dietRoutes = require("./diet-routes");
const diaperRoutes = require("./diaper-routes");
const userRoutes = require("./user-routes");
const babyRoutes = require("./baby-routes");

router.use("/sleep", sleepRoutes);
router.use("/diet", dietRoutes);
router.use("/diaper", diaperRoutes);
router.use("/user", userRoutes);
router.use("/baby", babyRoutes);

module.exports = router;
