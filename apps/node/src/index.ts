import express from "express"
import { URL } from "@repo/common";
console.log(URL)
const app = express();

app.get('/',(req,res)=>{
    res.json({
        message : "Hello navin"
    })
})

app.listen(3000);