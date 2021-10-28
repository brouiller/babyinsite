const router = require("express").Router();
const { Baby, User } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  const body = req.body;

  if (!req.body.babyDropdown) {
    try {
      const newBaby = await Baby.create({
        ...body,
      });
      const getBabyId = await Baby.findOne({
        where: {
          name: req.body.name,
          dob: req.body.dob,
        },
      });
      const updateUser = await User.findOne({
        attributes: ["baby_id"],
        where: {
          id: req.session.user_id,
        },
      });
      updateUser.baby_id = getBabyId.id;
      updateUser.save();

      res.json(newBaby);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    const updateUser = await User.findOne({
      attributes: ["baby_id"],
      where: {
        id: req.session.user_id,
      },
    });
    updateUser.baby_id = req.body.babyDropdown;
    updateUser.save();
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Baby.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = Baby.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
