import express from "express";
const app = express();
const port = 5000;
import { UserCtrl } from "./controller/userCtrl.js";


app.get('/contact', getContactController);
app.post('/contact', postContactController);
app.delete('/contact', deleteContactController);
app.put('/contact', putContactController);
app.listen(port, ()=>console.log(`Server is listening port ${port}`));