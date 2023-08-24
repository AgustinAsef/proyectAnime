const {Router} = require ("express");
const { deletCaps, updateCaps } = require("../controllers/seriesControler");

const capRouter = Router()

capRouter.patch("/:capId/:ischeck", async (req, res) => {
  const capId = req.params.capId.slice(1);
  const isCheck = req.params.ischeck.slice(1)
  try {
      let changeCapWatch = await updateCaps(capId, isCheck);
      res.status(200).send(changeCapWatch);
  } catch (error) {
      res.status(400).send(error.message);
  }
});

capRouter.delete("/:capId", async (req, res) => {
  const capId = req.params.capId.slice(1);
  try {
      let deleteCaps = await deletCaps(capId);
      res.status(200).send(deleteCaps);
  } catch (error) {
      res.status(400).send(error.message);
  }
});

module.exports=capRouter