//here we are going to setup our server.

//importing express.
import express from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";

//here we are importing our routes.
import mainRoutes from "./routes/mainRoutes";

//here we are importing our db connection configuration.
import dbConnection from './db';

//here we are initializaing our server.
const app = express();

//here we are running. our db connection configuration.
dbConnection();

//here we are setting up our project.
app.set('port', process.env.PORT || 4000)

//here we are setting up our middlewares.
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//here we are getting our port.
const port = app.get('port');

//here we setting our uploads folder as a public directory.
app.use('/uploads', express.static(path.resolve('uploads')));

//here we are using our routes.
app.use('/', mainRoutes);

//here we are running our server on a certain port.
app.listen(port, () => {
    console.log('App listening on port ' + port);
});