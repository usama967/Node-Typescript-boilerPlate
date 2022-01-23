import express from "express";
import todosRoutes from "./routes/todos";
import bodyParser from "body-parser";
import cors from 'cors'

const app = express();

app.use(bodyParser.json())
app.use(cors())
app.use(todosRoutes);

app.listen({ port: 3000 },()=>{
    console.log("running")
});
