let router = require("express").Router();
let { create, read, update, destroy, show } = require("../controllers/itinerary");

router.post("/", create);
router.get("/", read);
router.put("/:id", update);
router.delete("/:id", destroy);
router.get("/:id", show);
module.exports = router;
