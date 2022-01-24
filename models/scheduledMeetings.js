import mongoose from 'mongoose';

const scheduledMeetingsSchema = mongoose.Schema({
    time: String,
    from_name:String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var ScheduledMeetings = mongoose.model('ScheduledMeetings',scheduledMeetingsSchema);

export default ScheduledMeetings;