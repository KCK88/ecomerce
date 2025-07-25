import  express from 'express';
import bookRouter from "./routes/bookRouter";
import authorRouter from "./routes/authorRouter";
import bookCategoryRouter from "./routes/bookCategoryRouter";
import cors from "cors"

const app = express();

app.use(cors())

app.use(express.json());

app.use('/books', bookRouter)
app.use('/authors', authorRouter);
app.use('/categories', bookCategoryRouter);

export default app;