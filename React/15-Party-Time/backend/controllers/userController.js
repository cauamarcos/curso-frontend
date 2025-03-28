const UserModel = require("../models/User");
const bcrypt = require("bcrypt");

const checkPartyBudget = (budget, services) => {
    const priceSum = services.reduce((sum, service) => sum + service.price, 0);

    if (priceSum > budget) return false;
    return true;
};

const userController = {
    signup: async (req, res) => {
        try {
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            };

            // checando se o e-mail já está cadastrado
            const userExists = await UserModel.findOne({ email: user.email });
            if (userExists) return res.status(409).json({ msg: "Este e-mail já está cadastrado!" });

            // criando senha forte
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(user.password, salt);
            user.password = passwordHash;

            // criando array de festas vazio
            user.parties = [];

            const response = await UserModel.create(user);

            res.status(201).json({ response, msg: "Usuário criado com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            // checando se o usuário existe
            const user = await UserModel.findOne({ email: email });
            if (!user) return res.status(404).json({ msg: "Usuário não encontrado" });

            // checando a senha
            const checkPassword = await bcrypt.compare(password, user.password);
            if (!checkPassword) return res.status(422).json({ msg: "Senha inválida!" });

            res.status(200).json({ msg: "Login bem sucedido!", user });
        } catch (error) {
            console.log(error);
        }
    },
    createParty: async (req, res) => {
        const email = req.params.email;
        const party = req.body;

        if (party.services && !checkPartyBudget(party.budget, party.services)) {
            res.status(406).json({ msg: "O seu orçamento é insuficiente" });
            return;
        }

        const user = await UserModel.findOne({ email: email });
        user.parties.push(party);

        await UserModel.findOneAndUpdate({ email: email }, user);

        res.status(201).json({ msg: "Festa criada com sucesso" });
    },
    getParties: async (req, res) => {
        try {
            const email = req.params.email;

            const user = await UserModel.findOne({ email: email });

            res.json(user.parties);
        } catch (error) {
            console.log(error);
        }
    },
    getParty: async (req, res) => {
        try {
            const email = req.params.email;
            const partyId = req.params.id;

            const user = await UserModel.findOne({ email: email });

            const party = user.parties.find((party) => party.id === partyId);

            if (!party) {
                res.status(404).json({ msg: "Festa não encontrada!" });
                return;
            }

            res.json(party);
        } catch (error) {
            console.log(error);
        }
    },
    deleteParty: async (req, res) => {
        try {
            const email = req.params.email;
            const partyId = req.params.id;
            const user = await UserModel.findOne({ email: email });

            const party = user.parties.find((party) => party.id === partyId);

            if (!party) {
                res.status(404).json({ msg: "Festa não encontrada!" });
                return;
            }

            const parties = user.parties.filter((party) => party.id !== partyId);
            user.parties = parties;
            await UserModel.findOneAndUpdate({ email: email }, user);

            res.status(200).json({ msg: "Festa excluída com sucesso" });
        } catch (error) {
            console.log(error);
        }
    },
    editParty: async (req, res) => {
        const partyId = req.params.id;
        const email = req.params.email;
        const updatedParty = req.body;

        if (updatedParty.services && !checkPartyBudget(updatedParty.budget, updatedParty.services)) {
            res.status(406).json({ msg: "O seu orçamento é insuficiente" });
            return;
        }

        const user = await UserModel.findOne({ email: email });

        const parties = user.parties.map((party) => (party.id !== partyId ? party : updatedParty));
        user.parties = parties;
        await UserModel.findOneAndUpdate({ email: email }, user);

        res.status(200).json({ msg: "Festa atualizada com sucesso" });
    },
};

module.exports = userController;
