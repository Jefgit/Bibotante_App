"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const partyListService_1 = __importDefault(require("../services/partyListService"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(partyListService_1.default.getPartyLists());
});
exports.default = router;
