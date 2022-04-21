import { Controller, Get } from '@nestjs/common';
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

}
