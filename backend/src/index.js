const express = require('express')
const routes = require('./rotas')
const cors = require('cors');
const app = express();
const path = require('path')

// app.use(express.json());
// app.use('/files', express.static(path.resolve(__dirname,"temp", "uploads")));
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//     res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
//     next();
// })
// app.use(cors());
// app.use(routes);

app.use('/', 
    express.static(
        __dirname,
        './build'
    )
)

app.listen(process.env.PORT || 3001, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log("Deu certo")
});