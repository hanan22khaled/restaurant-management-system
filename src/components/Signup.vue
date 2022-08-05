<template>
  <img class="logo" src="../assets/1.png" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name.." />
    <input type="password" v-model="password" placeholder="Enter Password.." />
    <input type="email" v-model="email" placeholder="Enter E-mail.." />
    <button v-on:click="SignUp">Signup</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "signUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async SignUp() {
      let result = await axios.post("http://localhost:3000/user", {
        email: this.email,
        password: this.password,
        name: this.name,
      });

      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "HomeVue" });
      }
    },
  },
  mounted()
  {
    let user=localStorage.getItem("user-info");
    if(user)
    {
        this.$router.push({name:'Home'})
    }
  }
};
</script>

<style></style>
