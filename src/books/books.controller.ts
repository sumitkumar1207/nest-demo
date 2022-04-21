import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) { }

  //@route    GET books/
  //@desc     Get all the books
  //@access   public
  @Get()
  async getBooks() {
    return await this.bookService.getBooks()
  }

  //@route    GET books/:bookId
  //@desc     Get the book by id
  //@access   public
  @Get(":bookId")
  async getBook(@Param("bookId") bookId) {
    await this.bookService.getBook(bookId)
  }
}
