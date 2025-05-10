import express from 'express';
import cors from 'cors';
import candidateRouter from '../src/routes/candidate';
import partyListRouter from '../src/routes/partyList';
import dataFileRouter from '../src/routes/datafile';
const app = express();




const PORT = 3000;

app.use((cors as (options: cors.CorsOptions) => express.RequestHandler)({}));
app.use(express.json());

app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/candidates', candidateRouter);
app.use('/api/partylists', partyListRouter);
app.use('/api/data', dataFileRouter);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});