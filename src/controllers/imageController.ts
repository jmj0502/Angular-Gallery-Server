//here we are going to create the function that will run once a request is send to our server.

//here we are importing express (in order to use its Request, and Response objects as a type).
import { Request, Response } from "express";
import fs from "fs-extra";
import path from "path";

//here we are importing our image model.
import Photo from '../models/Photo';

//here we are going to create our functions.

//test function.
export function itWorks(req: Request, res: Response): Response {
    return res.send('It works!');
};

//this function will allow us to receive a file.
export async function postPhoto(req: Request, res: Response) {
    try {
        const { title, description } = req.body;
        const { path } = req.file;
        const newPhoto = {
            title: title,
            description: description,
            imgPath: path
        }
        const storedPhoto = await Photo.create(newPhoto);
        console.log(storedPhoto);
        return res.send(storedPhoto);
    } catch (err) {
        console.log(err);
    };  
};

//this function will allow to return all the data related with the photos.
export async function getPhotos(req: Request, res: Response): Promise<Response> {
    const photos = await Photo.find();
    return res.send(photos);
};

//this function will allow us to ge a single photo.
export async function getPhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const photo = await Photo.findById(id);
    return res.send(photo);
};

//this function will allow us to delete a photo.
export async function deletePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deletedPhoto = await Photo.findByIdAndDelete(id);
    if (deletedPhoto) {
        fs.unlink(path.resolve(deletedPhoto.imgPath));
    };
    return res.send(deletedPhoto);
};

//this function will allow us to edit a file.
export async function editPhoto(req: Request, res: Response): Promise<Response> {
    const {title, description } = req.body;
    const { id } = req.params
    const newData = {
        title: title,
        description: description
    };
    const modifiedPhoto = await Photo.findByIdAndUpdate({_id: id}, newData);
    return res.send(modifiedPhoto);
};