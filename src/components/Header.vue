<template>
  <div class="nav">
    <router-link to="/"> Home </router-link>
    <router-link to="/add"> Add a Reatauant </router-link>
    <a v-on:click="logout" href="#"> Logout </a>
  </div>
</template>

<script>
export default {
  name: "HeaDer",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #fff;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}
.nav a:hover {
  background: rgb(237, 233, 233);
  color: #333;
}
</style>
