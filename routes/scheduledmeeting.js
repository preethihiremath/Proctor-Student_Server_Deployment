import express from 'express';

import { getScheduledMeet,
         createScheduledMeet ,
         requestMeeting,
         pendingRequests,
         acceptMeeting,
         rejectMeeting} from '../controllers/meet.js';

const router = express.Router();


router.get('/', getScheduledMeet);

//Only Teachers can accept and reject and schedule
router.post('/', createScheduledMeet);

router.put('/accept',acceptMeeting);
router.delete('/reject', rejectMeeting);

//Only Student can request
router.get('/request',pendingRequests);
router.post('/request',requestMeeting);

export default router;