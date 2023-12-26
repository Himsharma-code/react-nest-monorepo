import { Module } from '@nestjs/common';
import { BookController } from './books.controller'; // Import BooksController
import { BookService } from './books.service'; // Import BooksService
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schema/book.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Books', schema: BookSchema }])],
  controllers: [BookController],
  providers: [BookService],
})
export class BooksModule {}
