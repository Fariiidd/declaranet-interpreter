import express, { Request, Response } from "express";
import cors from 'cors';
import router from './router/declaranet.router';

const app = express()
app.use(cors());
app.use(express.json());
app.use('/api/v1', router);
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world')
})

app.listen(8000, () => {
    console.log('Server listening in port 8000');

})