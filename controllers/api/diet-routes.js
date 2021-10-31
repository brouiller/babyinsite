const router = require("express").Router();
const { Diet, User } = require("../../models/");
const withAuth = require("../../utils/auth");

//creates new food entry in the database
router.post("/", withAuth, async (req, res) => {
  const body = req.body;
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    body["baby_id"] = userData.baby_id;
    const newDiet = await Diet.create({
      ...body,
    });
    res.json(newDiet);
  } catch (err) {
    res.status(500).json(err);
  }
});

//future feature
// router.put("/:id", withAuth, async (req, res) => {
//   try {
//     const [affectedRows] = await Diet.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (affectedRows > 0) {
//       res.status(200).end();
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.delete("/:id", withAuth, async (req, res) => {
//   try {
//     const [affectedRows] = Diet.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (affectedRows > 0) {
//       res.status(200).end();
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
