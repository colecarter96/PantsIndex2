import mongoose from 'mongoose';

const PantsSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: String,
  waist: String,
  inseam: String,
  rise: String,
  thigh: String,
  knee: String,
  hem: String,
  coverImg: String,
  hoverImg: String,
});

export default mongoose.models.Pants || mongoose.model('Pants', PantsSchema);
