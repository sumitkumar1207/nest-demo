import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) { }

  //@route    GET /books
  //@desc     Get all the books
  //@access   public
  @Get()
  async getBooks() {
    return await this.bookService.getBooks()
  }

  //@route    GET /books/:bookId
  //@desc     Get the book by id
  //@access   public
  @Get(":bookId")
  async getBook(@Param("bookId") bookId) {
    return await this.bookService.getBook(bookId)
  }

  //@route    DELETE /books
  //@desc     Pass the bookId in query, that book will be removed
  //@access   public
  @Delete()
  async deleteBook(@Query() query) {
    const { bookId } = query
    return await this.bookService.deleteBook(bookId)
  }
}
