const mongoose = require("mongoose");

const { Schema } = mongoose;
// o schema é a estrutura do model

const serviceSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
    // timestamps salva a data de criação e atualização do registro
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
    Service,
    serviceSchema,
};
