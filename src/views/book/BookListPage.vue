<template>
  <div>
    <h1>All Book</h1>
    <div class="b">
      <input
        v-model="searchId"
        class="search-text"
        type="string"
        placeholder="Tìm theo Id"
      />
      <button v-if="searchId"  class="button" @click="searchById">Tìm kiếm</button>
      <button class="button" @click="add">Thêm</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Tên sách</th>
          <th>Thể loại</th>
          <th>Tác Giả</th>
          <th>Ngày Phát Hành</th>
          <th>Path</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in data" :key="item.id">
        <tr @dblclick="edit(item)">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.typeBook }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.publishedDate }}</td>
          <td>
            <button @click="readBook(item)">{{ item.pathFile }}</button>
          </td>
          <td>
          <button @click = "addToFavorite(item.id)">Add To Favorite</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { bookService } from "@/service/BookService";
import { BookResponse } from "@/models/book/BookResponse";
import { fileBookService } from "@/service";
import { favoriteBookService } from "@/service/FavoriteBookService";
import { UserRequest } from "@/models";

//List dùng cho response.
@Component
export default class BookListPage extends Vue {
  data: BookResponse[] = [];
  id?: number;
  searchId?: number | null = null;
  user: UserRequest = new UserRequest();

  async created() {
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
        console.log(res.data.data);
        this.data = [];
        this.data.push({
          id: res.data.data.id,
          name: res.data.data.name,
          author: res.data.data.author,
          typeBook: res.data.data.typeBook,
          publishedDate: res.data.data.publishedDate,
        });
      });
    }
  }

  readBook(item: any) {
    if (!item.fileBookId) return;
    fileBookService.markAsRead(item.fileBookId).then((res) => {
      this.$router.push({
        name: "view",
        params: { id: item.fileBookId },
      });
    });
  }

  addToFavorite(item:any) {
    if(!item.id) return; 
    debugger;
      favoriteBookService.addToFavorite(item.id).then((res) => {
        favoriteBookService.saveToFavorite(item.id).then((res) => {
          alert("Add to favorite.");
          this.$router.push({
            name: "favorite",
          });
        });
      });
  }

  load() {
    if (!this.id) return;
    return fileBookService.serveFile(this.id).then((res) => {
      this.data = res.data;
    });
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
</style>
