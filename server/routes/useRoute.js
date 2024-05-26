const register = require("../controllers/register");
const login = require("../controllers/login");
const setAvatar = require("../controllers/setAvatar");
const getAllUsers = require("../controllers/getAllUsers");
const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);

module.exports = router;
