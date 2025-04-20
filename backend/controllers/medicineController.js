import medicineModel from "../models/medicineModel.js";
import cloudinary from '../config/cloudinary.js';

// add a medicine
const addMedicine = async (req, res) => {
    let image_filename = req.file.path;

    const medicine = new medicineModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
        dosage: req.body.dosage,
        age_group: req.body.age_group
    });

    try {
        await medicine.save();
        res.json({ success: true, message: "Medicine Added" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error" });
    }
};

// fetch all medicines list
const listMedicine = async (req, res) => {
    try {
        const medicines = await medicineModel.find({});
        res.json({ success: true, data: medicines });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// remove a medicine
const removeMedicine = async (req, res) => {
    try {
        const medicine = await medicineModel.findById(req.body.id);
        const imagePath = medicine.image;
        const publicId = imagePath.split("/").slice(-2).join("/").split(".")[0];

        await cloudinary.uploader.destroy(publicId);
        await medicineModel.findByIdAndDelete(req.body.id);

        res.json({ success: true, message: "Medicine Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// fetch a specific medicine by id
const fetchMedicine = async (req, res) => {
    try {
        const { id } = req.params;
        const medicine = await medicineModel.findById(id);
        res.json({ success: true, product: medicine })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addMedicine, listMedicine, removeMedicine, fetchMedicine };
