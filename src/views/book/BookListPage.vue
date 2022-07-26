
<template>
  <div>
    <h1>All Book</h1>
    <div class="b">
      <input
        v-model="searchId"
        class="search-text"
        type="string"
        placeholder="Search by id"
      />
      <button class="button" @click="searchById">Search</button>
      <button class="button" @click="add">Add Book</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>BookName</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in data" :key="item.id">
        <tr @dblclick="edit(item)">

          <td>{{ index + 1 }}</td>
          <td>{{item.name}}</td>
          <td>{{item.type}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
/* eslint-disable */
import { Component, Prop, Vue } from "vue-property-decorator";
import { bookService } from "@/service/BookService";
import { BookResponse } from "@/models/book/BookResponse";
//List dùng cho response.
@Component
export default class BookListPage extends Vue {
  data: BookResponse[] = [];
  searchId?: number | null = null;
  created() {
    return bookService.getAllBooks().then((res) => {
      this.data = res.data;
    });
  }
  edit(item: any) {
    if (!item.id) {
      return;
    }
    this.$router.push({
      name: "book_edit",
      params: { id: item.id },
    });
  }
  add() {
    this.$router.push({
      name: "book_add",
    });
  }
  searchById() {
    const id = Number(this.searchId);
    if (id !== 0) {
      bookService.getBookById(id).then((res) => {
        this.data = [];
        this.data.push({
          id: res.data.id,
          name: res.data.name,
          type: res.data.type,
        });
      });
    }
  }
}
</script>

<style scoped>
table {
  margin: auto;
  border: 2px solid #42b983;
  border-radius: 25px;
}

th {
  
  color: white;
  border-radius: 30%;
  background-color: #1589e1;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
  border-radius: 25px;
}
button {
  background-color: #0dde29;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  float: none;
  margin-left: 30px;
}
tr:hover {
  background-color: #0df168;
}
.search-text {
  width: 300px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
.b {
  margin: 10px;
}
.button {
  border-radius: 25px;
}
.search-text {
  width: 20%;
}
/* .active-pink-4 input[type=text]:focus:not([readonly]) {
    border: 1px solid #f48fb1;
    box-shadow: 0 0 0 1px #f48fb1;
  }
  .active-pink-3 input[type=text] {
    border: 1px solid #f48fb1;
    box-shadow: 0 0 0 1px #f48fb1;
  }
  .active-purple-4 input[type=text]:focus:not([readonly]) {
    border: 1px solid #ce93d8;
    box-shadow: 0 0 0 1px #ce93d8;
  }
  .active-purple-3 input[type=text] {
    border: 1px solid #ce93d8;
    box-shadow: 0 0 0 1px #ce93d8;
  }
  .active-cyan-4 input[type=text]:focus:not([readonly]) {
    border: 1px solid #4dd0e1;
    box-shadow: 0 0 0 1px #4dd0e1;
  } */
</style>
