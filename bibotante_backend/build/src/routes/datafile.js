"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const router = express_1.default.Router();
router.post('/', (req, res) => {
    const data = req.body;
    const userDownloadDirectory = path_1.default.join(os_1.default.homedir(), 'downloads');
    const filePath = path_1.default.join(userDownloadDirectory, 'kodigo.txt');
    const senators = data.senators.join('\n');
    const boardMember = data.board_member.join('\n');
    const sangguningBayan = data.sangguniang_bayan.join('\n');
    const textContent = "Senator(s) \n"
        + senators
        + "\n\nMember, House of Representatives \n"
        + `${data.representative} \n`
        + "\n\nProvincial Governor \n"
        + data.governor
        + "\n\nProvincial Vice-Governor \n"
        + data.vice_governor
        + "\n\nMember, Sangguniang Panlalawigan \n"
        + boardMember
        + "\n\nMayor \n"
        + data.mayor
        + "\n\nVice-Mayor \n"
        + data.vice_mayor
        + "\n\nMember, Sangguniang Bayan \n"
        + sangguningBayan
        + "\n\nParty List \n"
        + data.party_list
        + '\n\n\n\n\n'
        + 'Developed by DeVious';
    fs_1.default.writeFile(filePath, textContent, (err) => {
        if (err) {
            console.log(err);
            // return res.status(500).send('Error writing to file');
        }
        // return res.status(200).send(`Data saved successfully. Located at ${filePath} `);
    });
    res.status(200).send(textContent);
});
exports.default = router;
