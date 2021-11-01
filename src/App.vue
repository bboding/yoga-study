<template>
  <v-app id="app">
    <a href="/" class="logo"
      ><img src="./assets/om.png" width="50" style="padding: 10px" />
      <h1>Home</h1>
    </a>

    <router-view />

    <a v-if="$route.path !== '/'" href="/" class="logo"
      ><img src="./assets/om.png" width="50" style="padding: 10px" />
      <h1>Home</h1>
    </a>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scope>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}
</style>
