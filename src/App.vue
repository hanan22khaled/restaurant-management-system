<template>
 <router-view/>
</template>
<script>

export default {
  name:'App'
}
</script>
<style>
body
{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.logo {
    margin-top: 40px;
    width: 100px;
    border-radius: 50%;
    border: 2px solid #ff9746;

}

.register input, .login input, .add input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-top: 10px;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #ff9746;

}

.register button, .login button, .add button {
    width: 320px;
    height: 40px;
    border: 1px solid #ff9746;
    background: #ff9746;
    color: #fff;
    cursor: pointer;

}

</style>
