import express, { Response } from 'express';
import candidateService from '../services/candidateService';
import { Candidates } from '../types';

const router = express.Router();

router.get('/', (_req, res: Response<Candidates[]>) => {
    res.send(candidateService.getCandidates());
});

export default router;