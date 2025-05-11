"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const candidates_1 = __importDefault(require("../../data/candidates"));
const getCandidates = () => {
    return candidates_1.default;
};
exports.default = {
    getCandidates
};
