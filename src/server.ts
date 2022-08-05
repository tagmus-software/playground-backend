import 'reflect-metadata'
import express from 'express';
import cors from 'cors'
import { AppDataSource } from './models/data-soucer'
import router from './routes';




AppDataSource.initialize().then(() => {
  
const app = express();

app.use(router)
 
app.use(express.json())

app.use(cors({
  origin: ["*"]
}));


 return app.listen(process.env.PORT)

});

 