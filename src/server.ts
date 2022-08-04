import 'reflect-metadata'
import express from 'express';
import cors from 'cors'
import { AppDataSource } from './data-soucer'




AppDataSource.initialize().then(() => {
  
const app = express();
 
app.use(express.json())

app.use(cors({
  origin: ["*"]
}));


 return app.listen(process.env.PORT)

});

 