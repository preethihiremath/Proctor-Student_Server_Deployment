import express from 'express';

import { getScheduledMeet,createScheduledMeet } from '../controllers/meet.js';

const router = express.Router();

router.get('/', getScheduledMeet);
router.post('/', createScheduledMeet);



export default router;