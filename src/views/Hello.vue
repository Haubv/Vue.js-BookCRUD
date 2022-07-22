<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div id="app">
  <div>
    <button @click="number++">{{ number }}</button>
  </div>
    <div>
    
    </div>
    <div>
      <TodoList :todos="listTodo" :todo2 = "groceryList"/>
      <TodoList @inputData="updateMessage"/> 
    </div>
      <div>
        {{ message2 }}
      </div>
        <div>
          <span v-bind:title="message3">
              Rê chuột lên đây một vài giây để xem thuộc tính `title` được bind!
          </span>
        </div>
          <div id="app-7">
            <p>Những thứ họ mua:</p>
          </div>
            <div id="3">
                <span v-if = "seen">
                      Thoắt ẩn thoắt hiện
                </span>  
            </div>
            <button @click="seen = !seen">{{seen === true ? 'Ẩn' : 'Hiện'}}</button>
    
            <div id="app-5">
            <p>{{ message }}</p>
              <button v-on:click="reverse_Message">Reverse Message</button>
            </div>
              <div id="app-6">
                <p>{{ message1 }}</p>
                <input v-model="message1" @change="changeMessage1()">
              </div>
              <div id="6">

              </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from './TodoList.vue';
@Component({
  components: {
    TodoList
  }
})
export default class Hello extends Vue {
  // binding, prop, emit, vòng đời, 
  number = 10;
  content: any = "Hello";
  message = "qua lại khách chờ sông lặng sóng";
  message1 = 'Hãy sửa thông điệp này';
  message2 =  'Do you wanna build a Vue app?';
  message3 = 'Bạn đã mở trang này vào ' + new Date().toLocaleString()
  
  seen = false;
  get groceryList() {
    return [
        { id: 0, text: 'Cà pháo' },
        { id: 1, text: 'Mắm tôm' },
        { id: 2, text: 'Miễn ăn được là được' }
    ]
  }

  beforeCreate() {
    console.log('beforeCreate', this.message1);
  }

  created() {
    console.log('created', this.number);
  }

  beforeMount() {
    console.log('beforeMount',this.number);
  }

  mounted() {
    console.log('mounted',this.number);
  }

  beforeUpdate() {
    console.log('beforeUpdate',this.number);
  }

  updated() {
    console.log('updated',this.number);
  }

  beforeDestroy() {
    this.content = null;
    delete this.content;
  }

  destroyed () {
        console.log(this) 
  }
  
  get listTodo() {
    return [
      { id: 1, text: 'Học JavaScript' },
      { id: 2, text: 'Học Vue' },
      { id: 3, text: 'Xây dựng cái gì đó hay ho' }
    ];
  }
  reverseMessage(message1 : any) {
    this.message = message1.split(' ').reverse().join(' ');
  }

  reverse_Message() {
    this.message = this.message.split(' ').reverse().join(' ');
  }

  changeMessage1() {
    console.log(this.message1);
  }
  updateMessage(mes: any) {
    // debugger;
    this.message2 = mes;
  }
  
}
</script>