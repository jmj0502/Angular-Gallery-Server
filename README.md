# Angular-Gallery-Server
An API designed to handle and serve files (photos).

## Abstract
I built this API in order to learn how to handle file uploads with ExpressJS. This was the first RestAPI I build with TypeScript, so I had to read through different articles and follow different tutorials in order to make it work.

This app is quite easy to set up, and it contains a simple structure. If you want to run this app, either clone or download the repo and execute app.js using Node or Nodemon.

## Project Structure

* /Controllers: In the controllers directory you'll find the main controller of the applicacion. It handles the whole "gallery" logic, and it's composed of different functions that are used as callbacks for the ExpressJS endpoints.
* /Models: In the models directory you'll find the "post" model, and its respective interface. The model follows the mongoose standard for its declaration.
* /Libs: The libs directory contains the multer configuration file.
* /Routes: In the routes directory you'll find the file that contains the routes of the project.
* App: The app file contains the base configuration of our Express project.
* DB: The db file contains the mongoose configuration.

## Technologies
The following technologies were used to develop this API:
* ExpressJS + TypeScript as the base of the project. A pretty powerfull configuration since Express provides lots of features out of the box, that works pretty well alongside TypeScript static typing.
* MongoDB as database. Since the project was quite simple and it didn't require intrincated data relationships.
* Mongoose as ORM. Since it simplifies the interaction between Express and MongoDB.
* Multer as file handler.
