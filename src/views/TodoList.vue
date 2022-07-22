<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
    <div>
    <div>
      <ol>
        <li v-for="todo in todos" :key="todo.id">
          {{todo.text}}
        </li>
      </ol>
    </div>
      <div>
      <ol>
        <li v-for = "todo1 in todo2" :key = "todo1.id">
          {{todo1.text}}
        </li>
      </ol>
      </div>
      <div>
        <input placeholder="Enter Text Here" type="text" text-align = "center" v-model="tempMessage" @change="changeMessage">
        
      </div>
      <div><button @click="sendMessage">Button</button></div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TodoList extends Vue{
  @Prop() todos: any;
  @Prop() todo2:  any;
  tempMessage = '';

  
  sendMessage() {
    // debugger;
    this.$emit('inputData', this.tempMessage);
    // debugger;
    this.tempMessage = '';
  }

  changeMessage()  {
    console.log(this.tempMessage);
  }

}  
</script>