const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, trim: true }
  },
  { timestamps: true }
);

// Clear any cached model
if (mongoose.models.Category) {
  delete mongoose.models.Category;
}

module.exports = mongoose.model("Category", categorySchema);