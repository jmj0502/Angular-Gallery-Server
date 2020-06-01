//here we are going to setup multer, so we can use it to store images and other kind of files.

//here we are importing multer.
import multer from "multer";
import { v4 } from "uuid";
import path from "path";

//here we are setting up the multer storage.
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, v4() + path.extname(file.originalname));
    }
});

//here we are exporting multer with its respective storage setted.
export default multer({storage});