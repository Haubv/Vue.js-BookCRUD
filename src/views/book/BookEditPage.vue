<template>
    <div>
        <h1>{{isEdit? 'Use For Edit' : 'Use For Add'}}</h1>
        <div class="form-input">
            <form>
            <div v-show="isEdit" class="row">
          <div class="col-25">
            <label>Id</label>
          </div>
            <div class="col-25">
            <input type="number" :disabled="isEdit" v-model="data.id" placeholder="Id ...">
          </div>
            </div>
                <div class="row">
                    <div class="row-25">
                      <div>
                        <label>BookName :</label>
                      </div>
                      <div class="row-75"><input type="text" text-align="center"  v-model="data.bookName" placeholder = "Name : " ></div>
                    </div>
                </div>
                <div class="row">
                    <div class="row-25">
                        <div><label>Author : </label></div>
                        <div class="row-75"><input type="text" v-model="data.author" placeholder = "Author : " ></div>
                    </div>
                </div>
                <div class="row">
                    <div class="row-25">
                     <label>PublishedDate : </label>
                    </div>
                    <div class="row-75"><input type="text" v-model="data.publishedDate" placeholder = "PublishedDate : " ></div>
                </div>
            </form>
            <div class="row">
        <button @click="cancel">Cancel</button>
        <button @click="save">Save</button>
        <button @click="dele" v-show="isEdit" class="delete">Delete</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    //Edit dùng cho request.
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { bookService } from '@/service/BookService';
    import { BookRequest } from '@/models/book/BookRequest';

@Component
export default class BookEditPage extends Vue {
    data: BookRequest = new BookRequest();
    isEdit = false;
    created() {
        if (this.$router.currentRoute.params.id) {
          const id = Number(this.$router.currentRoute.params.id);
          this.isEdit = true;
          bookService.getBookById(id).then((res) => {
            this.data = res.data;
          });
        }
    }
    save() {
      if(this.data.bookName != null || this.data.author != null || this.data.publishedDate != null) {
          if (this.isEdit) {
                      bookService.updateBook(this.data).then((res) => {
                          this.goListBook();
                      });
                  } else {
                      bookService.saveBook(this.data).then((res) => {
                          this.goListBook();
                      });
                  }
      }else {
        alert("Must not let the fields empty");
      }     
    }
    dele() {
        const id = Number(this.data.id);
        bookService.deleteById(id).then((res) => {
            alert('Đã xóa: ' + this.data.bookName);
            this.goListBook();
        });
    }
    cancel() {
        this.goListBook();
    }
    goListBook() {
        this.$router.push(
            {
                name: 'book',
            },
        );
    }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.form-input{
  margin: auto;
  width: 650px;
  height: auto;
}
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
input[type=number], select, textarea {
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
  background-color: #4CAF50;
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
input[type=submit]:hover {
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
  width: 50% !important;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>