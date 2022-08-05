<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{ currentUser.username }}</strong> 
      </h3>
      <br>
      <div class = "profile">Profile</div>
    </header>
    <p>
      <strong>Token:</strong>
      {{ currentUser.accessToken.substring(0, 20) }} ...
      {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}
    </p>
    <p>
      <strong>Id:</strong>
      {{ currentUser.id }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ currentUser.email }}
    </p>
    <p><strong>Authorities:</strong>
    </p>  
    <ul>
      <li v-for="(role, index) in currentUser.roles" :key="index">
        {{ role }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const Auth = namespace("Auth");

@Component
export default class Profile extends Vue {
  @Auth.State("user")
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentUser!: any;

  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  }
}
</script>
<style>
p ,ul{
  color :white;
}
.profile {
  font-size : 30px;
}
</style>
