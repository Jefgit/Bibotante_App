"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const candidate_1 = __importDefault(require("../src/routes/candidate"));
const partyList_1 = __importDefault(require("../src/routes/partyList"));
const datafile_1 = __importDefault(require("../src/routes/datafile"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(cors_1.default({}));
app.use(express_1.default.json());
app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});
app.use('/api/candidates', candidate_1.default);
app.use('/api/partylists', partyList_1.default);
app.use('/api/data', datafile_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
