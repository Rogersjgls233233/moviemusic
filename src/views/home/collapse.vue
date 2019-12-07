<template>
  <div id="ranter">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item v-for="(item,key) in collapseItem">
        <template slot="title">{{key+1}}--{{item.movie_name}}</template>
        <dd>
          <a :href="item.movie_link">
            <div class="movie-item">
              <div class="movie-poster">
                <a>
                  <img :src="item.movie_poster" />
                </a>
                <div class="movie-overlay movie-overlay-bg">
                  <div class="movie-info">
                    <div class="movie-score">
                      <i>{{item.movie_rank}}</i>
                    </div>
                    <div class="movie-title movie-title-padding">{{item.movie_name}}</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </dd>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "collapse",
  data() {
    return {
      activeName: "1",
      collapseItem: []
    };
  },
  created() {
    this.axios
      .get("http://127.0.0.1:3000/movie")
      .then(response => {
        this.collapseItem = response.data;
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }
};
</script>


<style>
#ranter {
  padding-right: 5%;
}
dd {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.movie-item {
  position: relative;
  border: 1px solid #efefef;
  margin-left: -10px;
}
.movie-poster {
  background-color: #fcfcfc;
  width: 160px;
  height: 220px;
  overflow: hidden;
  position: relative;
}
.movie-poster .movie-overlay,
.movie-poster img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.movie-poster .movie-overlay {
  height: 100%;
}
.movie-poster .movie-overlay,
.movie-poster img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.movie-overlay-bg {
  background-color: darkgray repeat-x bottom;
}
.movie-overlay .movie-info {
  color: #fff;
  position: absolute;
  bottom: 7px;
  width: 100%;
}

.movie-score {
  color: #ffb400;
  float: right;
  margin-right: 10px;
}
i {
  font-size: 18px;
  font-style: italic;
}
.movie-title-padding {
  margin-right: 35px;
}
.movie-title {
  font-size: 16px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 10px;
}
</style>