const ElementModel = require("../models/elementModels");

const getAllElements = async (req, res) => {
    try {
        const Data = await ElementModel.find(req.query, { _id: 0 }).sort({ atomic_number: 1 });
        res.status(200).json(Data);
    } catch (error) {
        res.status(500).json({ message: "an error occurred" });
    }
};

const getElementByAtomicNumber = async (req, res) => {
    try {
        const Data = await ElementModel.find({ atomic_number: req.params.number }, { _id: 0 });
        if (Data.length == 0) {
            return res.status(404).json({ message: "Element not found" });
        }
        res.status(200).json(Data);
    } catch (error) {
        res.status(500).json({ message: "an error occurred" });
    }
};

const getElementBySymbol = async (req, res) => {
    try {
        const Data = await ElementModel.find({ symbol: req.params.symbol }, { _id: 0 });
        if (Data.length == 0) {
            return res.status(404).json({ message: "Element not found" });
        }
        res.status(200).json(Data);
    } catch (error) {
        res.status(500).json({ message: "an error occurred" });
    }
};

const createNewElement = async (req, res) => {
    try {
        const Data = await ElementModel.create(req.body);
        res.status(201).json({ created: true, Data });
    } catch (error) {
        res.status(500).json({ message: "an error occurred" });
    }
};

const updateElementById = async (req, res) => {
    try {
        const Data = await ElementModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json({ updated: true, Data });
    } catch (error) {
        res.status(500).json({ message: "an error occurred" });
    }
};
const deleteElementById = async (req, res) => {
    try {
        const Data = await ElementModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ deleted: true, Data });
    } catch (error) {
        res.status(500).json({ message: "an error occurred" });
    }
};

module.exports = {
    getAllElements,
    getElementByAtomicNumber,
    getElementBySymbol,
    createNewElement,
    updateElementById,
    deleteElementById,
};
