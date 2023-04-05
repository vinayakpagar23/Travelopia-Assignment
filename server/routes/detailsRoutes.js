const express = require("express");

const {createDetails}  = require("../controllers/detailsController");
const router = express.Router();

router.route("/").post(createDetails);


module.exports = router;
