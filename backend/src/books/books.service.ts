import { Injectable } from '@nestjs/common';
import { Book } from './book.entity'; // Define your Book entity/model
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book as BookInterface } from './interface/book.interface';
import { CreateUserDTO } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel('Books') private booksModal: Model<BookInterface>) {}

  async findAll() {
    const books = await this.booksModal.find();
    return books;
  }

  async findById(id: number) {
    const book = await this.booksModal.findById(id);
    return book;
  }

  async create(book: CreateUserDTO) {
    const books = new this.booksModal(book);

    return await books.save();
  }

  //   update(id: number, updatedBook: Book): Book {
  //     const index = this.books.findIndex((book) => book.id === id);
  //     if (index !== -1) {
  //       this.books[index] = { ...this.books[index], ...updatedBook };
  //       return this.books[index];
  //     }
  //     return null; // Or throw an exception if not found
  //   }

  //   delete(id: number): Book {
  //     const index = this.books.findIndex((book) => book.id === id);
  //     if (index !== -1) {
  //       const deletedBook = this.books[index];
  //       this.books.splice(index, 1);
  //       return deletedBook;
  //     }
  //     return null; // Or throw an exception if not found
  //   }
}
