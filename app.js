import express from 'express';
import {join} from 'path';
import router from './routes/web.js';

const port = process.env.port || '3000';

const app = express();
app.use(express.static(join(process.cwd(),'public')));
app.set('view engine',  'ejs');
app.use(router);

app.listen(port , ()=>{
    console.log(`Server Listening at port 3000`);
});