<template>
  <div>
    <h1>{{ isEdit ? "Use For Edit" : "Use For Add" }}</h1>
    <div class="form-input">
      <form action="/file-book" method="post" enctype="multipart/form-data">
        <div v-show="isEdit" class="row">
          <div class="col-25">
            <label>Id</label>
          </div>
          <div class="col-25">
            <input
              class="stable"
              type="number"
              :disabled="isEdit"
              v-model="data.id"
              placeholder="Id ..."
            />
          </div>
        </div>
        <div class="row">
          <div class="row-25">
            <div class="edit">
              <label>Book Name :</label>
            </div>
            <div class="row-75">
              <input
                type="text"
                text-align="center"
                v-model="data.name"
                placeholder="Name : "
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="row-25">
            <div class="edit"><label>Book Type : </label></div>
            <div class="row-75" v-if="listTypeOfBook">
              <select v-model="data.typeBookId" name="typeBookId">
                <!-- <option
                        v-for="option in listTypeOfBook"
                        :value="option.id"
                        :key="option.id">
                          {{ option.name }}
                        </option> -->
                <option
                  v-for="(item, index) in listTypeOfBook"
                  :key="index"
                  :label="item.name"
                  :value="item.id"
                ></option>
              </select>
            </div>
            <pdf src="../../../../../All/TLKH.pdf" :page="1"></pdf>
          </div>
        </div>
        <div class="row">
          <div class="row-25">
            <div class="edit"><label>Author : </label></div>
            <div class="row-75">
              <input type="text" v-model="data.author" placeholder="Author : " />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="row-25">
            <div class="edit"><label>Published Date : </label></div>
            <div class="row-75">
              <input
                type="text"
                v-model="data.publishedDate"
                placeholder="Published Date :  "
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="row-25">
            <div class="edit"><label>File : </label></div>
            <input
              ref="fileInput"
              type="file"
              @change="onFileChange"
              @click="resetFileValue"
            />
          </div>
        </div>
      </form>
      <div class="row">
        <button @click="cancel">Cancel</button>
        <button @click="handleCreator">Save</button>
        <button @click="del" v-show="isEdit" class="delete">Delete</button>
      </div>
    </div>
    <pdf :src="pdfsrc"></pdf>
  </div>
</template>
<script lang="ts">
/* eslint-disable */
//Edit cho request.
import { Component, Ref, Prop, Vue } from "vue-property-decorator";
import { bookService } from "@/service/BookService";
import { BookRequest } from "@/models/book/BookRequest";
import { fileBookService } from "@/service/FileBookService";
// import pdf from "vue-pdf";
// import { FileBook } from "@/models/book/FileBook";

@Component
// ({
//   components: {
//     pdf,
//   },
// })
export default class BookEditPage extends Vue {
  data: BookRequest = new BookRequest();
  fileBook: any;
  listTypeOfBook: any[] = [];
  isEdit = false;
  file?: File;
  innerId: any;
  // getFilePath = "E:\images\10638-PDF-file-39339-2-10-20220216.pdf";
  pdfsrc: any;

  async created() {
    await this.getListTypeOfBook();
    if (this.$router.currentRoute.params.id) {
      const id = Number(this.$router.currentRoute.params.id);
      this.isEdit = true;
      bookService.getBookById(id).then((res) => {
        this.data = res.data.data;
        let fileBookId = this.data.fileBookId;
        fileBookService.markAsRead(Number(fileBookId)).then((res) => {
          this.pdfsrc = new Uint8Array(res.data);
          // console.log(this.fileBook);
        });
      });
    }
    // console.log('window', window.AdobeDC);
  }

  async handleCreator() {
    if (this.data.name && this.data.author && this.data.publishedDate) {
      // console.log(this.fileBook);
      debugger;
      if (this.isEdit) {
        await fileBookService.saveFileBook(this.file).then((res) => {
          this.data.fileBookId = res.data.id;
          bookService.updateBook(this.data).then((res) => {
            this.goListBook();
          });
        });
      } else {
        // save filebook
        await fileBookService.saveFileBook(this.file).then((res) => {
          this.data.fileBookId = res.data.id;
          // nếu save filebook thành công thì save book
          bookService.saveBook(this.data).then((res) => {
            this.goListBook();
          });
        });
      }
    } else {
      alert("Must not let the fields empty");
    }
  }
  // save() {
  //   if(this.data.name && this.data.typeBook) {
  //     if (this.isEdit) {
  //       bookService.updateBook(this.data).then((res) => {
  //         this.goListBook();
  //       });
  //     } else {
  //       bookService.saveBook(this.data).then((res) => {
  //         this.goListBook();
  //       });
  //     }
  //   } else {
  //     alert("Must not let the fields empty");
  //   }
  // }
  resetFileValue(): void {
    const fileInput = this.$refs.fileInput as any;
    fileInput.value = null;
  }

  onFileChange(event: any): void {
    const files: File[] = event.target.files || event.dataTransfer.files;
    if (!files.length) {
      return;
    }
    this.file = files[0];
  }

  del() {
    const id = Number(this.data.id);
    bookService.deleteById(id).then((res) => {
      alert("Đã xóa: " + this.data.name);
      this.goListBook();
    });
  }

  cancel() {
    this.goListBook();
  }

  goListBook() {
    this.$router.push({
      name: "book",
    });
  }

  getListTypeOfBook() {
    bookService.getBookType().then((res) => {
      this.listTypeOfBook = res.data;
    });
  }
  // getFile() {
  //   if(this.$router.currentRoute.params.id) {
  //     const id = Number(this.$router.currentRoute.params.id);
  //     debugger;
  //     fileBookService.loadFileBook(id).then(res => {
  //       this.fileBook = res.data;
  //       // console.log(res.data);
  //     });
  //   }

  // }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
#pdf-view {
  height: 80vh;
}
input.stable {
  color: white;
}
h1 {
  color: white;
}

.col-25 {
  color: white;
}

.edit {
  color: white;
}
.form-input {
  margin: auto;
  width: 650px;
  height: auto;
}
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
input[type="number"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  float: none;
  margin: 30px;
}
.delete {
  background-color: #f30303;
}
input[type="submit"]:hover {
  background-color: #09580d;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  text-align: left;
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 50%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.dele {
  background-color: red;
}

input {
  color: black;
  width: 100% !important;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
