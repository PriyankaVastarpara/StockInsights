// controllers/itemController.js

const Item = require('../models/item');

exports.createItem = async (req, res) => {
    // try {
    //     const item = new Item(req.body);
    //     await item.save();
    //     res.status(201).json({ message: 'Item created successfully', item });
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
    try {
        const { ItemName } = req.body;
        // Check if the item already exists
        const existingItem = await Item.findOne({ ItemName });
        if (existingItem) {
            return res.status(400).json({ message: 'Item already exists in the database' });
        }
        // If item does not exist, create a new item record
        const item = new Item(req.body);
        await item.save();
        res.status(201).json({ message: 'Item created successfully', item });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getItem = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



exports.updateItemById = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json({ message: 'Item updated successfully', item });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteItemById = async (req, res) => {
    
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully', item });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateQuantity= async (req, res) => {
    try {
      const itemId = req.params.id;
      const newQuantity = req.body.Quantity;
  
      // Find the item in the database by itemId
      const item = await Item.findById(itemId);
  
      if (!item) {
        return res.status(404).json({ error: "Item not found" });
      }
  
      // Update the item quantity
      item.Quantity -= newQuantity;
  
      // Save the updated item
      await item.save();
  
      res.json({ message: "Item quantity updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while updating the item quantity" });
    }
  };
  
