import { HttpException, Injectable } from '@nestjs/common';
import { BOOKS } from 'src/mocks/books.mock';

@Injectable()
export class BooksService {
  books = BOOKS

  // GET all books
  getBooks(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.books)
    })
  }
  // GET book by id
  getBook(bookId: number): Promise<any> {
    return new Promise(resolve => {
      const book = this.books.find(book => book.id === bookId)
      if (!book) {
        throw new HttpException("Book does not exists!", 400)
      }
      resolve(book)
    })
  }
  // Delete the book
  deleteBook(bookId: number): Promise<any> {
    return new Promise(resolve => {
      const index = this.books.findIndex(book => book.id === bookId)
      if (index === -1) {
        throw new HttpException("Book not found", 400)
      }
      this.books.splice(1, index)
      resolve(this.books)
    })
  }
}
