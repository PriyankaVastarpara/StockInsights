// controllers/customerController.js

const Customer = require('../models/customer');

exports.createCustomer = async (req, res) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();
        res.status(201).json({ message: 'Customer created successfully', customer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getByCity = async (req, res) => {
    try {
        //const customer = await Customer.findById(req.params.id);
        //const customers = await Customer.find({ City: req.body.city }).exec();
        const customers = await Customer.find({ City: req.params.city }).exec();
        if (!customers) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json({ message: 'Customer updated successfully', customer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCustomerById = async (req, res) => {
    
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json({ message: 'Customer deleted successfully', customer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
