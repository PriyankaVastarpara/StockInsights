const { checkUser } = require("../Middlewares/AuthMiddlewares");
const {login} = require("../controllers/AdminControllers");

const router=require("express").Router();

router.post("/",checkUser);
// router.post("/register",register);
router.post("/login",login);

module.exports = router;  