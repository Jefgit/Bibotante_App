import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { NewVoterList } from '../types';
import os from 'os';


const router = express.Router();

router.post('/', (req: Request<unknown, unknown, NewVoterList>, res: Response) => {
    const data = req.body;
    const userDownloadDirectory = path.join(os.homedir(), 'downloads');
    const filePath = path.join(userDownloadDirectory, 'kodigo.txt');
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
        + 'Developed by DeVious'
        ;

    // return res.status(200).send(textContent);
    fs.writeFile(filePath, textContent, (err: unknown) => {
        if (err) {
            console.log(err);
            // return res.status(500).send('Error writing to file');
            return res.status(200).send(textContent);
        }
        return res.status(200).send(`Data saved successfully. Located at ${filePath} `);
    });

});

export default router;