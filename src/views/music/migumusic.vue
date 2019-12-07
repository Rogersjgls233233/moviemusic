<template>
  <div>
    <h1>音乐榜</h1>
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
  name: "Migumusic",
  data() {
    return {
      musicitem: []
    };
  },
  created() {
    this.axios
      .get("http://127.0.0.1:3000/migumusic")
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
.song-number {
  margin-top: 20px;
}
.song-cover-pic {
  width: 60px;
  height: 60px;
}
.song-cover-pic img {
  width: 100%;
  height: 100%;
}
.song-name-text {
  display: inline-block;
  max-width: 85%;
  vertical-align: middle;
  white-space: nowrap;
  margin-left: 10px;
  margin-top: 20px;
}
a {
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #333;
  text-decoration: none;
  font: 14px/1.5 Microsoft YaHei, tahoma, arial, Hiragino Sans GB, \\5b8b\4f53,
    sans-serif;
}
.song-singer a {
  color: #666;
  margin: 0;
}
.song-singer {
  margin-top: 20px;
}
.song-length {
  box-sizing: border-box;
  color: #666;
  margin-top: 20px;
}
</style>