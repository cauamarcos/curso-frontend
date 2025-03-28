const router = require("express").Router();

// services router
const servicesRouter = require("./services");
router.use("/", servicesRouter); // junta as rotas da aplicação

// users routes
const usersRouter = require("./users");
router.use("/", usersRouter);

module.exports = router;
