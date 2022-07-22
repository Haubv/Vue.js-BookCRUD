import Vue from 'vue'
import axios from 'axios'

class BookService extends Vue {
    private ROOT_API = 'https://62d8fbf59088313935983ad7.mockapi.io/api/books';
    public getAllBooks() {
        return axios.get(this.ROOT_API);
    }

    public saveBook(bookInfo: any) {
        return axios.post<any>(this.ROOT_API, bookInfo);
      }
    
      public updateBook(bookInfo: any) {
        return axios.put<any>(this.ROOT_API + '/' + bookInfo.id, bookInfo);
      }
    
      public getBookById(id: number) {
        return axios.get(this.ROOT_API + '/' + id);
      }

      public deleteById(id: number) {
        return axios.delete(this.ROOT_API + '/' + id);
      }
}

export const bookService = new BookService();