import mongoose from 'mongoose';

const requestedMeetingsSchema = mongoose.Schema({
    from_name:String,
    time: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var RequestedMeetings = mongoose.model('RequestedMeetings',requestedMeetingsSchema);

export default RequestedMeetings;