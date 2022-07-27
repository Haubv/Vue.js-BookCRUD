import Vue from 'vue'
import axios from 'axios'
import authHeader from './auth-header';

class BookService extends Vue {
    private ROOT_API = 'http://localhost:8080/book';
    public getAllBooks() {
        return axios.get(this.ROOT_API, { headers: {Authorization: 'Bearer ' + authHeader()}});
    }

    public saveBook(bookInfo: any) {
        return axios.post<any>(this.ROOT_API, bookInfo, { headers: {Authorization: 'Bearer ' + authHeader()}});
      }
    
      public updateBook(bookInfo: any) {
        return axios.post<any>(this.ROOT_API + '/' + bookInfo.id, bookInfo, { headers: {Authorization: 'Bearer ' + authHeader()}});
      }
    
      public getBookById(id: number) {
        return axios.get(this.ROOT_API + '/' + id, { headers: {Authorization: 'Bearer ' + authHeader()}});
      }

      public deleteById(id: number) {
        return axios.delete(this.ROOT_API + '/' + id, { headers: {Authorization: 'Bearer ' + authHeader()}});
      }

      public getBookType() {
        return axios.get(this.ROOT_API + '/type', { headers: {Authorization: 'Bearer ' + authHeader()}});
      }
}

export const bookService = new BookService();