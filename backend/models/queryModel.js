import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true }
});

const queryModel = mongoose.models.query || mongoose.model('query', querySchema);

export default queryModel;