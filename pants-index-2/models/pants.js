import mongoose, { Schema, model, models } from 'mongoose';

const PantsSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: String, required: true },
  waist: { type: String, required: true },
  inseam: { type: String, required: true },
  rise: { type: String, required: true },
  thigh: { type: String, required: true },
  knee: { type: String, required: true },
  hem: { type: String, required: true },
  coverImg: { type: String, required: true },
  hoverImg: { type: String, required: true },
});

export default models.Pants || model('Pants', PantsSchema);