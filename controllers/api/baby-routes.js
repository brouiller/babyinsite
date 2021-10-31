const router = require("express").Router();
const { Baby, User } = require("../../models/");
const withAuth = require("../../utils/auth");

//creates new baby object in database
router.post("/", withAuth, async (req, res) => {
  let body = req.body;
  if (!req.body.babyDropdown) {
    delete body.babyDropdown;
    try {
      const newBaby = await Baby.create(body);
      const result = await User.update(
        { baby_id: newBaby.dataValues.id },
        { where: { id: req.session.user_id } }
      );
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    try {
      const result = await User.update(
        { baby_id: req.body.babyDropdown },
        { where: { id: req.session.user_id } }
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

//future feature to update baby object
// router.put("/:id", withAuth, async (req, res) => {
//   try {
//     const [affectedRows] = await Baby.update(req.body, {
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

//future feature to delete baby objects
// router.delete("/:id", withAuth, async (req, res) => {
//   try {
//     const [affectedRows] = Baby.destroy({
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
