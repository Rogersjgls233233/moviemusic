<template>
  <div id="app">
    <upheader></upheader>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import upheader from "./components/head/header";
export default {
  name: "app",
  components: { upheader }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  display: block;
}
</style>
