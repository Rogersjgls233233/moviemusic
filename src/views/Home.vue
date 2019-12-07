<template>
  <div>
    <el-col :span="8" :offset="2" id="searchmusic">
      <el-input
        clearable
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input"
        @keyup.enter.native="func"
      ></el-input>
    </el-col>
    <div id="home">
      <lunbo></lunbo>

      <el-row type="flex">
        <el-col :span="18">
          <display></display>
        </el-col>
        <el-col :span="6">
          <collapse></collapse>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style>
#searchmusic {
  margin-top: 10px;
}
#posters {
  padding-top: 70px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
</style>

<script>
import lunbo from "../views/home/lunbo";
import collapse from "../views/home/collapse";
import display from "../views/home/display";

export default {
  name: "Home",
  components: {
    lunbo,
    collapse,
    display
  },
  data() {
    return {
      input: ""
    };
  },
  methods: {
    func() {
      window.open("https://maoyan.com/query?kw=" + this.input);
    }
  }
};
</script>

