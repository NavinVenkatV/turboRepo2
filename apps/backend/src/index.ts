import express, {Response, Request} from "express";
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.json({
        message : "Hello navin venkat"
    })
    return;
})
app.listen(3000);