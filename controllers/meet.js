import express from 'express';
import mongoose from 'mongoose';
import ScheduledMeetings from '../models/scheduledMeetings.js';

const router = express.Router();

export const  getScheduledMeet = async (req, res) => { 
    try {
        const scheduledMeetings = await ScheduledMeetings.find();       
        res.status(200).json(scheduledMeetings);
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



export default router;