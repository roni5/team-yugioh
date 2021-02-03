const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },
    //token used for api access and google auth
    googleAuthToken: {
        type: Schema.Types.Mixed,
    },
});

const User = mongoose.model("AuthenticationStore", schema);

module.exports = User;
