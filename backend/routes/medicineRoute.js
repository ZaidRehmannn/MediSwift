import express from 'express';
import multer from 'multer';
import { addMedicine, listMedicine, removeMedicine, fetchMedicine } from '../controllers/medicineController.js';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';

const medicineRouter = express.Router();

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'MediSwift-Medicines',
        allowedFormats: ['jpeg', 'png', 'jpg'],
    },
});

const upload = multer({ storage });

medicineRouter.post("/add", upload.single("image"), addMedicine);
medicineRouter.get("/list", listMedicine);
medicineRouter.post("/remove", removeMedicine);
medicineRouter.get("/product/:id", fetchMedicine);

export default medicineRouter;
