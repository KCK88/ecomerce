import  express from 'express';
import bookRouter from "./routes/bookRouter";
import authorRouter from "./routes/authorRouter";
import bookCategoryRouter from "./routes/bookCategoryRouter";
import usersRouter from "./routes/usersRouter";
import cors from "cors"
import loginRouter from "./routes/loginRouter";

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',  // URL do seu frontend
  credentials: true,  // Permite enviar cookies junto com a requisição
};

app.use(cors(corsOptions))

app.use(express.json());

app.use('/books', bookRouter)
app.use('/authors', authorRouter);
app.use('/categories', bookCategoryRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

export default app;