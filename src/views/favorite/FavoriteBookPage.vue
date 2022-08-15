<template>
<div>
<h1>Favorite</h1>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Thể loại</th>
          <th>Tác Giả</th>
          <th>Ngày Phát Hành</th>
          <th>Path</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in data" :key="item.id">
        <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.typeBook }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.publishedDate }}</td>
          <td>{{ item.pathFile }}</td>

      </tbody>
    </table>
</div>
</template>
<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import { FavoriteBook } from "@/models";
import { favoriteBookService } from "@/service/FavoriteBookService";
@Component
export default class FavoriteBookPage extends Vue {
    data : FavoriteBook[] = [];
    id?: number | null = null;
    searchId?: number | null = null;

    async created() {
      return favoriteBookService.getAll().then((res) => {
        this.data = res.data;
      });
    }

    searchById() {
    const id = Number(this.searchId);
      if (id !== 0) {
          favoriteBookService.loadByUserId(id).then((res) => {
          console.log(res.data.data);
          this.data = [];
          this.data.push({
            id: res.data.data.id,
            name: res.data.data.name,
            author: res.data.data.author,
            typeBook: res.data.data.typeBook,
            publishedDate: res.data.data.publishedDate,
            pathFile: res.data.data.pathFile,
          });
        });
      }
    }
}
</script>
<style scoped>
h1 {
  color: white;
}
table {
  margin: auto;
  border: 2px solid #42b983;
  border-radius: 25px;
}

td {
  color: black;
  background-color: white;
  text-align: center;
}
td > button {
  border: none;
}

th {
  color: white;
  background-color: aqua;
  text-align: center;
}

th:hover {
  color: aqua;
  background-color: white;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}
button {
  background-color: white;
  color: black;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  float: none;
  margin-left: 30px;
  border: 1px solid black;
}

td:hover {
  background-color: #0df168!;
}
button:hover {
  color: #0df168;
}
</style>
