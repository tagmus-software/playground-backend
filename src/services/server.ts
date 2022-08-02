import 'reflect-metadata'
import express from 'express';
import cors from 'cors';
import { appDataSource } from './data-soucer';


appDataSource.initialize().then(() => {

const app = express();
 
app.use(express.json())

app.use(cors({
  origin: ['*']
}));

 //hello
app.get('/', (req, res) => {
 return res.json('Hello kevin');
});
 return app.listen(process.env.PORT)

  });
 

