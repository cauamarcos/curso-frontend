const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect("mongodb+srv://cauasmarcos:Ov2pkgtU0SKcp4Lh@cluster0.86dse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        console.log("Conectado ao banco!")
    } catch (error) {
        console.log(`Erro ${error}`);
    }
}

module.exports = main;
