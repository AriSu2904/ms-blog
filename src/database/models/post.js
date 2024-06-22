import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.String,
        ref: 'Profile',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    tags: [
        {
        type: String,
        required: false
    }]
}, {timestamps: true});

export const Post = mongoose.model('Post', postSchema);