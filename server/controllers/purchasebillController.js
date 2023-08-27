const PurchaseBill = require('../models/purchasebill');

exports.createPurchaseBill = async (req, res) => {
    try {
        const purchasebill = new PurchaseBill(req.body);
        await purchasebill.save();
        res.status(201).json({ message: 'purchasebill created successfully', purchasebill });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPurchaseBills = async (req, res) => {
    try{
        const purchasebills = await PurchaseBill.find();
        res.json(purchasebills);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPurchaseBillById = async (req, res) => {
    try {
        const purchasebill = await PurchaseBill.findById(req.params.id);
        if (!purchasebill) {
            return res.status(404).json({ error: 'purchasebill not found' });
        }
        res.json(purchasebill);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePurchaseBillById = async (req, res) => {
    try {
        const purchasebill = await PurchaseBill.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!purchasebill) {
            return res.status(404).json({ error: 'purchasebill not found' });
        }
        res.json({ message: 'purchasebill updated successfully', purchasebill });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletePurchaseBillById = async (req, res) => {
    try {
        const purchasebill = await PurchaseBill.findByIdAndRemove(req.params.id);
        if (!purchasebill) {
            return res.status(404).json({ error: 'purchasebill not found' });
        }
        res.json({ message: 'purchasebill deleted successfully', purchasebill });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};