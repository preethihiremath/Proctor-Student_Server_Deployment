import mongoose from 'mongoose';

const announcementSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', announcementSchema);

export default PostMessage;