import { Router } from 'express';
import { DeclaraNetController } from '../controllers/declaranet.controller';

const router = Router();

router.get('/validar', DeclaraNetController.getData);
export default router;
