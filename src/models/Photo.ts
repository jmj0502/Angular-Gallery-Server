//here we are going to setup our db models.

//here we are importing schema and model from mongoose.
import { Schema, model, Document } from "mongoose";

//here we are going to setup our schema.
const ImgSchema = new Schema({
    title: String,
    description: String,
    imgPath: String
});

//here we are creating an interface for our schema (this will allow typescript to comprehend the structure of such a class), in order to automate corrections.
interface IImage extends Document {
    title: string;
    description: string;
    imgPath: string;
};

//here we are exporting our module.
export default model<IImage>('Image', ImgSchema);