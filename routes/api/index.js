const router = require("express").Router();
const userRoutes = require("./user");
const clientRoutes = reqire("./client");
const mealRoutes = require("./meal");

router.use("/user", userRoutes);
router.use("/client", clientRoutes);
router.use("/meal", mealRoutes);

module.exports = router;