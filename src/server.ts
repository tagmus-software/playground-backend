import 'reflect-metadata'
import 'dotenv'
import express, { Request, Response } from 'express';
import cors from 'cors';
import { appDataSource } from './data-soucer';
import routes from './routes';


appDataSource.initialize().then(() => {


    const app = express();

    app.use(express.json())
    app.use(routes)

    app.use(cors({
        origin: ['*']
    }));

    app.get('/', (req: Request, res: Response) => {
        return res.json('Hello kevin');
    });
    return app.listen(process.env.PORT, () => {
        console.log('servidor rodando', process.env.PORT)
    })

});


