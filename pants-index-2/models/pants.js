import mongoose from 'mongoose';

const PantsSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: String,
  rise: Number,
  thigh: Number,
  knee: Number,
  coverImg: String,
});

export default mongoose.models.Pants || mongoose.model('Pants', PantsSchema);
