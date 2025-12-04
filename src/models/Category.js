const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    // UI Category (Starters, Beverages, Main Course, etc.)
    categoryName: {
      type: String,
      required: true,
      trim: true
    },

    // Actual menu item name (Paneer Chilli, Cold Coffee, etc.)
    itemName: {
      type: String,
      required: true,
      trim: true
    },

    // Price of the item
    price: {
      type: Number,
      required: true,
      min: 0
    },

    // Default quantity set for item (cart can override)
    qty: {
      type: Number,
      default: 1,
      min: 1
    },

    // For showing image thumbnail in UI (optional)
    imageUrl: {
      type: String,
      default: null
    },

    // If menu item is active or temporarily disabled
    isAvailable: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true // createdAt, updatedAt
  }
);

module.exports = mongoose.model("Category", categorySchema);
