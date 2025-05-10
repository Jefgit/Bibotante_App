import express, { Response } from "express";
import partyListService from "../services/partyListService";
import { PartyList } from "../types";
const router = express.Router();

router.get('/', (_req, res: Response<PartyList[]>) => {
    res.send(partyListService.getPartyLists());
});

export default router;