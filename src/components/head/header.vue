<template>
  <div>
    <el-dropdown
      @command="handleCommand"
      style=" display: inline-block;
    float: right;
    cursor: pointer;
    margin-top: 11px;
    margin-right: 11px;"
    >
      <span class="menu"></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="0">MOVIES</el-dropdown-item>
        <el-dropdown-item command="1">MUSIC</el-dropdown-item>
        <el-dropdown-item command="2">CHATROOM</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <div class="top-menu">
      <ul>
        <nav>
          <headerItem path="/home">MOVIES</headerItem>
          <headerItem path="/music">MUSIC</headerItem>
          <headerItem path="/chatroom">CHATROOM</headerItem>
        </nav>
      </ul>
    </div>
  </div>
</template>
<style>
html,
body {
  font-family: "Raleway", sans-serif;
  font-size: 100%;
  background: #fff;
}
body a {
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}
a:hover {
  text-decoration: none;
}
li.parallelogram {
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}

ul {
  margin: 0;
  padding: 0;
}

.top-menu {
  text-align: center;
  margin-top: 0.5em;
  float: right;
}
.top-menu ul li {
  display: inline-block;
  margin: 0 5px;
  color: #fff;
  font-weight: 900;
  vertical-align: top;
  cursor: pointer;
}
nav a {
  position: relative;
  display: inline-block;
  outline: none;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
  font-size: 1em;
}
nav a:hover,
nav a:focus {
  outline: none;
}
.top-menu ul li a {
  text-decoration: none;
  color: #000;
  font-size: 0.9em;
  font-weight: 400;
  text-transform: uppercase;
  padding: 8px 0 0 0;
  width: 103px;
  height: 37px;
  background: #fff;
  margin: 0 auto;
  transform: skew(-25deg);
  -o-transform: skew(-25deg);
  -moz-transform: skew(-25deg);
  -webkit-transform: skew(-25deg);
}
.top-menu ul li a:hover,
.top-menu ul li a.active {
  background: #1fadc5;
  color: #fff;
}
@media (max-width: 768px) {
  span.menu {
    width: 35px;
    height: 35px;
    background: url("../../assets/nav.png") no-repeat 0px 0px;
    display: inline-block;
  }
  .top-menu {
    width: 100%;
    display: none;
    text-align: center;
    background: #fff;
    padding: 0;
    margin-top: 10px;
  }
  .span_2 {
    margin-top: 2em;
  }
  .top-menu ul {
    float: none;
    width: 100%;
  }
  .top-menu ul li {
    display: block;
    float: none;
    margin: 5px 0;
  }
}
</style>
<script>
import headerItem from "./headerItem";
export default {
  name: "upheader",
  components: { headerItem },
  methods: {
    handleCommand(command) {
      this.$router.push(this.url[command]);
    }
  },
  data() {
    return {
      url: ["/home", "/music", "/chatroom"]
    };
  }
};
</script>