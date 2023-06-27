import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    roles: {
        User: { type: Number, default: 2001 },
        Editor: { type: Number },
        Admin: { type: Number },
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: [String],
    },
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
