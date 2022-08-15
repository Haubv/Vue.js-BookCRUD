/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from 'vue'
import axios from 'axios'
import authHeader from './auth-header';

class FavoriteBookService extends Vue {
    private ROOT_URL = 'http://localhost:8080/fav';

    public getAll() {
        return axios.get<any>(this.ROOT_URL , { headers: {Authorization: 'Bearer ' + authHeader()}});
    }

    public loadByUserId(id: number) {
        return axios.get<any>(this.ROOT_URL + '/' + id, { headers: {Authorization: 'Bearer ' + authHeader()}});
    }

    public saveToFavorite(id: number) {
        return axios.put<any>(this.ROOT_URL + '/' + id, { headers: {Authorization: 'Bearer ' + authHeader()}});
    }

    public addToFavorite(id: number) {
        return axios.post(this.ROOT_URL+ '/' + id ,{ headers: {Authorization: 'Bearer ' + authHeader()}});
    }

    public deleteFromFavorite(id: number) {
        return axios.delete<any>(this.ROOT_URL+ '/'+ id, { headers: {Authorization: 'Bearer ' + authHeader()}});
    }

}

export const favoriteBookService = new FavoriteBookService();