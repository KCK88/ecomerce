import  express from 'express';
import bookRouter from "./routes/bookRouter";
import authorRouter from "./routes/authorRouter";

const app = express();

app.use(express.json());

app.use('/books', bookRouter)
app.use('/authors', authorRouter);

export default app;