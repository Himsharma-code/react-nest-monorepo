import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  summary: { type: String, required: true },
  // Add more fields as needed
});

export interface Book extends mongoose.Document {
  title: string;
  author: string;
  summary: string;
  // Define other properties
}
