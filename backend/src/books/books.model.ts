import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  summary: String,
  // Add more fields as needed
});

export interface Book extends mongoose.Document {
  title: string;
  author: string;
  summary: string;
  // Define other properties
}

export const BookModel = mongoose.model<Book>('Books', BookSchema);
