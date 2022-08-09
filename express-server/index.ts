import express, { Express, Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();


const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.static(path.join(__dirname, '..', '..', 'vue-client', 'dist')));


app.get('/', (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, '..', '..', 'vue-client', 'dist', 'index.html'));
});


app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
