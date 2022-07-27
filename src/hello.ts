import express from 'express';
import cors from 'cors';

const app = express();


app.use(cors({
  origin: ['*']
}));


app.get('/', (req, res) => {
  res.send('<h2> Hello word, kevin</h2>');
});
app.listen(3000, () =>{
  console.log('server listening at port 3000 at localhost');
});