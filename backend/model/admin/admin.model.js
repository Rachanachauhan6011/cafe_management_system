import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String
    },
    lastLogin: {
        type: Date,
    },
    lastLogOut: {
        type: Date,
    },
    lastLoginIp: {
        type: String,
    },
    profileImage: {
        type: String,
    },
    lastPassword: {
    type: String,
  },
}, { timestamps: true })


export default mongoose.model("admin", adminSchema)