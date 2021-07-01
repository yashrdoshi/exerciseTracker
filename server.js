const   express     = require('express'),
        app         = express(),
        mongoose    = require('mongoose'),
        path        = require('path')
        cors        = require('cors');

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(process.env.MONGODB_URI || uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true });

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('Connected to MongoDB database');
});

const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/frontend/build')))

    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'frontend','build','index.html'))
        // res.sendFile(path.join(__dirname,'frontend','build','index.html'))
    })
}else{
    app.get('/',(req,res) => {
        res.send('Api Running')
    })
}

app.listen(port,()=>{
    console.log('Server running on : ',port);
    console.log('http://localhost:5000/');
})
