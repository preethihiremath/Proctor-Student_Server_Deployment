import express from 'express';
import mongoose from 'mongoose';
import ScheduledMeetings from '../models/scheduledMeetings.js';
import RequestedMeetings from '../models/requestedMeetings.js';

const router = express.Router();


export const  getScheduledMeet = async (req, res) => { 
    try {
        const scheduledMeetings = await ScheduledMeetings.find();       
        res.status(200).json(scheduledMeetings);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const pendingRequests =async (req, res) => { 
    try {
        const pendingRequests = await RequestedMeetings.find();       
        res.status(200).json(pendingRequests);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const  createScheduledMeet = async (req, res) => {
    const { time, from_name } = req.body;
    const newScheduledMeetings = new ScheduledMeetings({ time, from_name })
    try {
        await newScheduledMeetings.save();
        res.status(201).json(newScheduledMeetings );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const  requestMeeting = async (req, res) => {
    const { from_name,time } = req.body;
    const newRequestMeetings = new RequestedMeetings({ from_name,time })
    try {
        await newRequestMeetings.save();
        res.status(201).json(newRequestMeetings);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const  acceptMeeting = async (req, res) => {
    const { id,from_name,time } = req.body;

    const add_to_scheduledMeet = new ScheduledMeetings({ from_name,time })
    try {
        await add_to_scheduledMeet.save();
        await RequestedMeetings.findByIdAndRemove(id);
        res.json({ message: "Accepted the meeting" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const  rejectMeeting = async (req, res) => {
    const { id } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Request with id: ${id}`);
    await RequestedMeetings.findByIdAndRemove(id);
    res.json({ message: "The Request is Rejected Successfully" });
}


export default router;