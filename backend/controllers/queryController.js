import queryModel from "../models/queryModel.js";

// save user query in db
const sendQuery = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    try {
        const query = new queryModel({ name, email, message });
        await query.save();

        res.status(201).json({ success: true, message: "Your message has been sent successfully!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "There was an error sending your message." });
    }
};

// fetch all queries for admin
const fetchQueries = async (req, res) => {
    try {
        const queries = await queryModel.find({});
        res.status(200).json({ success: true, queries });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching list" });
    }
};

export { sendQuery, fetchQueries };
