import express ,{ Router,Request, Response } from 'express';
import contactController from '../controller/contactContoller';

const router: Router = express.Router();

router.post('/identify', (req: Request, res: Response, next: any) => {
  contactController.create(req, res, next);
});

export default router;