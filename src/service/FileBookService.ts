/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from 'vue'
import axios from 'axios'
import authHeader from './auth-header';

class FileBookService extends Vue {
    private ROOT_URL = 'http://localhost:8080/file-book';

    public saveFileBook(file:any) {
        const formData = new FormData();

        formData.append("file", file);
    
        return axios.post<any>(this.ROOT_URL, formData, { headers: {Authorization: 'Bearer ' + authHeader(),
            "Content-Type": "multipart/form-data"}});
    }

    public markAsRead(id:number) {
        return axios.get<any>(this.ROOT_URL+ '/' + id, { headers: {Authorization: 'Bearer ' + authHeader()}});

    }

    public loadListFile() {
        return axios.get<any>(this.ROOT_URL , { headers: {Authorization: 'Bearer ' + authHeader()}});
    }

    public serveFile(id:number) {
        return axios.post<any>(this.ROOT_URL + '/'+ id, { headers: {Authorization: 'Bearer ' + authHeader(),
        "Content-Type": "multipart/form-data"}});
    }

}

export const fileBookService = new FileBookService();