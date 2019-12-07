<template>
  <div>
    <h1>港台榜</h1>
    <el-card v-for="o in musicitem" class="box-card" shadow="hover">
      <el-row>
        <el-col :span="1">
          <div class="song-number">{{o.music_number}}</div>
        </el-col>
        <el-col :span="2">
          <a :href="o.music_musiclink">
            <div class="song-cover-pic">
              <img :src="o.music_imgurl" style="display: inline;" />
            </div>
          </a>
        </el-col>
        <el-col :span="9">
          <span class="song-name-text">
            <a :href="o.music_musiclink" target="_blank">{{o.music_name}}</a>
          </span>
        </el-col>
        <el-col :span="5">
          <div class="song-singer">
            <a class="singer-text">{{o.music_singer}}</a>
          </div>
        </el-col>
        <el-col :span="4" :offset="3">
          <div class="song-length">{{o.music_time}}</div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Hktw",
  data() {
    return {
      musicitem: []
    };
  },
  created() {
    this.axios
      .get("http://127.0.0.1:3000/hktw")
      .then(response => {
        this.musicitem = response.data;
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }
};
</script>

<style>
</style>