const router = require("express").Router();

const userController = require("../controllers/userController");

router.route("/users").post((req, res) => userController.signup(req, res));

router.route("/users/:email").post((req, res) => userController.login(req, res));

router.route("/:email/parties").put((req, res) => userController.createParty(req, res));

router.route("/:email/parties").get((req, res) => userController.getParties(req, res));

router.route("/:email/parties/:id").get((req, res) => userController.getParty(req, res));

router.route("/:email/parties/:id").delete((req, res) => userController.deleteParty(req, res));

router.route("/:email/parties/:id").put((req, res) => userController.editParty(req, res));

module.exports = router;
