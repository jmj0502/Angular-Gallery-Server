//here we are going to setup the routes of our project.

//importing our express.
import { Router } from "express";

//here we are importing our route handlers from our controllers.
import { itWorks, postPhoto, getPhotos, editPhoto, deletePhoto, getPhoto } from '../controllers/imageController';

//here we are importing multer.
import multer from '../libs/multer';


//here we are initializing our router.
const router = Router({
    mergeParams: true
});

//here we setting up the routes of our project.
router.get('/api/home', itWorks);

//this route will allow us to receive images.
router.post('/api/photos', multer.single('image'), postPhoto);

//this route will allow us to retrieve the data related with our images.
router.get('/api/photos', getPhotos);

//this routes will allow us to work woth a single photo.
router.get('/api/photos/:id', getPhoto);
router.delete('/api/photos/:id', deletePhoto);
router.put('/api/photos/:id', editPhoto);

//this is our test route.
export default router;
