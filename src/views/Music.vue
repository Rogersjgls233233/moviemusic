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
    <div id="music">
      <el-container>
        <el-aside width="160px">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-menu-item index="1" @click="musicroute('/music/migumusic')">
              <i class="el-icon-headset"></i>
              <span slot="title">音乐榜</span>
            </el-menu-item>
            <el-menu-item index="2" @click="musicroute('/music/movies')">
              <i class="el-icon-headset"></i>
              <span slot="title">影视榜</span>
            </el-menu-item>
            <el-menu-item index="3" @click="musicroute('/music/mainland')">
              <i class="el-icon-headset"></i>
              <span slot="title">内地榜</span>
            </el-menu-item>
            <el-menu-item index="4" @click="musicroute('/music/hktw')">
              <i class="el-icon-headset"></i>
              <span slot="title">港台榜</span>
            </el-menu-item>
            <el-menu-item index="5" @click="musicroute('/music/eur_usa')">
              <i class="el-icon-headset"></i>
              <span slot="title">欧美榜</span>
            </el-menu-item>
            <el-menu-item index="6" @click="musicroute('/music/jpn_kor')">
              <i class="el-icon-headset"></i>
              <span slot="title">日韩榜</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Music",
  data() {
    return {
      input: ""
    };
  },
  methods: {
    musicroute(mr) {
      this.$router.push(mr);
    },
    func() {
      window.open(
        "https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=" +
          this.input
      );
    }
  }
};
</script>

<style>
#music {
  padding-top: 70px;
}
#searchmusic {
  margin-top: 10px;
}
</style>
