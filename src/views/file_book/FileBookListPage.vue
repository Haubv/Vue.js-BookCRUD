<template>
  <div>
    <h1>All Files</h1>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Path/Name</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in data" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>
          <button>{{ item.path }}</button>
        </td>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FileBook } from "@/models";
import { fileBookService } from "@/service";
// @Component({
//   components: {
//     pdf,
//   },
// })
@Component
export default class FileBookListPage extends Vue {
  data: FileBook[] = [];
  id?: number;

  created() {
    return fileBookService.loadListFile().then((res) => {
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
</style>
