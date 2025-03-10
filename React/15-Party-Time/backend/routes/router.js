const router = require("express").Router();

// services router
const servicesRouter = require("./services");

router.use("/", servicesRouter);
// junta todas as rotas da aplicação

// parties routes
const partiesRouter = require("./parties");

router.use("/", partiesRouter);

module.exports = router;
