const cors = require('cors');
const express = require('express');
const app = express();


app.use(cors({
    origin: '*'
}));


const ingredientes = [
    {
        "id": 1,
        "item": "chocolate"
    },
    {
        "id": 2,
        "item": "cafe"
    },
    {
        "id": 3,
        "item": "pan"
    }
]

app.get('/desayuno', (req, res) => {
    res.send(ingredientes)
})
app.listen(3000)