"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const partyList_1 = __importDefault(require("../../data/partyList"));
const getPartyLists = () => {
    return partyList_1.default;
};
exports.default = {
    getPartyLists
};
