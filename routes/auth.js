import express from 'express';
import { googleLogin ,getUsers,updateMyDetails} from '../controllers/auth.js';

const router = express.Router();

router.get('/user',getUsers);
router.put('/user/:id',updateMyDetails)
router.post('/googlelogin', googleLogin);


export default router;