import { HttpException, Injectable } from '@nestjs/common';
import { BOOKS } from 'src/mocks/books.mock';
import { CreateBookDTO } from './dto/create-book.dto';

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
  getBook(bookId: number | string): Promise<any> {
    return new Promise(resolve => {
      const id = Number(bookId)
      const book = this.books.find(book => book.id === id)
      if (!book) {
        throw new HttpException("Book does not exists!", 400)
      }
      resolve(book)
    })
  }
  // Delete the book
  deleteBook(bookId: number | string): Promise<any> {
    return new Promise(resolve => {
      const id = Number(bookId)
      const index = this.books.findIndex(book => book.id === id)
      if (index === -1) {
        throw new HttpException("Book not found", 400)
      }
      this.books.splice(1, index)
      resolve(this.books)
    })
  }
  // POST add new book
  addBook(book: CreateBookDTO): Promise<any> {
    return new Promise(resolve => {
      this.books.push(book)
      resolve(this.books)
    })
  }
}
