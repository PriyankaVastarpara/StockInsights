// controllers/vendorController.js

const Vendor = require('../models/vendor');

exports.createVendor = async (req, res) => {
    try {
        const { VendorName } = req.body;
        // Check if the vendor already exists
        const existingVendor = await Vendor.findOne({ VendorName });
        if (existingVendor) {
            return res.status(400).json({ message: 'Vendor already exists in the database' });
        }
        // If vendor does not exist, create a new vendor record
        const vendor = new Vendor(req.body);
        await vendor.save();
        res.status(201).json({ message: 'Vendor created successfully', vendor });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.json(vendors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getVendorById = async (req, res) => {
    try {
        const vendor = await Vendor.findById(req.params.id);
        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }
        res.json(vendor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getByCity = async (req, res) => {
    try {
        const vendors = await Vendor.find({ City: req.params.city }).exec();
        if (!vendors) {
            return res.status(404).json({ error: 'Vendor not found' });
        }
        res.json(vendors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateVendorById = async (req, res) => {
    try {
        const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }
        res.json({ message: 'Vendor updated successfully', vendor });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteVendorById = async (req, res) => {

    try {
        const vendor = await Vendor.findByIdAndDelete(req.params.id);
        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }
        res.json({ message: 'Vendor deleted successfully', vendor });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
