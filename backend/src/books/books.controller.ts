import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Book } from './book.entity';
import { BookService } from './books.service';
import { CreateUserDTO } from './dto/create-book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll(@Res() res) {
    const books = await this.bookService.findAll();

    return res.status(HttpStatus.OK).json({
      data: books,
      message: 'Returning all books.',
      status: HttpStatus.OK,
    });
  }

  @Get(':id')
  async findById(@Res() res, @Param('id') id: number) {
    let jsonResponse;

    try {
      const book = await this.bookService.findById(id);
      jsonResponse = {
        data: book,
        message: `Returning book ${id}.`,
        status: HttpStatus.OK,
      };
    } catch (error) {
      jsonResponse = jsonResponse = {
        data: null,
        message: `book with id ${id} was not found.`,
        status: HttpStatus.NOT_FOUND,
      };
    }

    return res.status(jsonResponse.status).json(jsonResponse);
  }

  @Post()
  async create(@Res() res, @Body() bookDto: CreateUserDTO) {
    const createdUser = await this.bookService.create(bookDto);

    return res.status(HttpStatus.OK).json({
      data: createdUser,
      message: 'book was successfully created.',
      status: HttpStatus.OK,
    });
  }

  //   @Put(':id')
  //   update(@Param('id') id: number, @Body() updatedBook: Book): Book {
  //     return this.bookService.update(id, updatedBook);
  //   }

  //   @Delete(':id')
  //   delete(@Param('id') id: number): Book {
  //     return this.bookService.delete(id);
  //   }
}
