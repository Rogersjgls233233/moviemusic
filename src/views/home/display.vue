<template>
  <div id="display">
    <div v-for="(o, index) in displayItem">
      <el-col :span="24">
        <el-card shadow="hover">
          <el-row>
            <el-col :span="12">
              <i class="board-index">{{o.movienumber}}</i>
              <a
                :href="o.movielink"
                :title="o.moviename"
                class="image-link"
                data-act="boarditem-click"
              >
                <img :alt="o.moviename" class="board-img" :src="o.movieimg" />
              </a>
            </el-col>
            <el-col :span="12">
              <div class="board-item-content">
                <div class="movie-item-info">
                  <p class="name">
                    <a :href="o.movielink">{{o.moviename}}</a>
                  </p>
                  <p class="star">{{o.moviestar}}</p>
                  <p class="releasetime">{{o.movietime}}</p>
                </div>
                <div class="movie-item-number score-num">
                  <p class="score">
                    <i class="integer">{{o.moviescore}}</i>
                  </p>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "display",
  data() {
    return {
      displayItem: [
        {
          movienumber: "1",
          movielink: "https://maoyan.com/films/1218029",
          movieimg:
            "https://p0.meituan.net/movie/7b437e3a0d08d10e374ddc34f71b88fe3379132.jpg@160w_220h_1e_1c",
          moviename: "少年的你",
          moviestar: "主演：周冬雨,易烊千玺,尹昉",
          movietime: "上映时间：2019-10-25",
          moviescore: "9.4"
        },
        {
          movienumber: "2",
          movielink: "https://maoyan.com/films/1292",
          movieimg:
            "https://p0.meituan.net/movie/609e45bd40346eb8b927381be8fb27a61760914.jpg@160w_220h_1e_1c",
          moviename: "海上钢琴师",
          moviestar: "主演：蒂姆·罗斯,比尔·努恩,普路特·泰勒·文斯",
          movietime: "上映时间：2019-11-15",
          moviescore: "9.3"
        },
        {
          movienumber: "3",
          movielink: "https://maoyan.com/films/1163219",
          movieimg:
            "https://p0.meituan.net/movie/70b4d52270257e71046767ea1be1bede2983514.jpg@160w_220h_1e_1c",
          moviename: "决战中途岛",
          moviestar: "主演：艾德·斯克林,卢克·伊万斯,帕特里克·威尔森",
          movietime: "上映时间：2019-11-08",
          moviescore: "9.1"
        },
        {
          movienumber: "4",
          movielink: "https://maoyan.com/films/597919",
          movieimg:
            "https://p0.meituan.net/movie/d0efd6d1f0bcdf1a60fbb26f96ed5b823340129.jpg@160w_220h_1e_1c",
          moviename: "触不可及",
          moviestar: "主演：凯文·哈特,布莱恩·科兰斯顿,妮可·基德曼",
          movietime: "上映时间：2019-11-22",
          moviescore: "9.1"
        },
        {
          movienumber: "5",
          movielink: "https://maoyan.com/films/1256872",
          movieimg:
            "https://p0.meituan.net/movie/db82e48befc1c7e2e98425165b2500d76222872.jpg@160w_220h_1e_1c",
          moviename: "为国而歌",
          moviestar: "主演：王雷,古力娜扎,海一天",
          movietime: "上映时间：2019-10-18",
          moviescore: "9.0"
        },
        {
          movienumber: "6",
          movielink: "https://maoyan.com/films/247949",
          movieimg:
            "https://p0.meituan.net/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg@160w_220h_1e_1c",
          moviename: "冰雪奇缘2",
          moviestar: "主演：克里斯汀·贝尔,伊迪娜·门泽尔,乔纳森·格罗夫",
          movietime: "上映时间：2019-11-22",
          moviescore: "8.9"
        },
        {
          movienumber: "7",
          movielink: "https://maoyan.com/films/1258163",
          movieimg:
            "https://p0.meituan.net/movie/dd488887e8a1c8ab4723eee4026d25aa1973142.jpg@160w_220h_1e_1c",
          moviename: "利刃出鞘",
          moviestar: "主演：丹尼尔·克雷格,克里斯·埃文斯,安娜·德·阿玛斯",
          movietime: "上映时间：2019-11-29",
          moviescore: "8.8"
        },
        {
          movienumber: "8",
          movielink: "https://maoyan.com/films/1250690",
          movieimg:
            "https://p1.meituan.net/movie/ddfb39b3491fa928f5aa3358464647c42801135.jpg@160w_220h_1e_1c",
          moviename: "受益人",
          moviestar: "主演：大鹏,柳岩,张子贤",
          movietime: "上映时间：2019-11-08",
          moviescore: "8.8"
        },
        {
          movienumber: "9",
          movielink: "https://maoyan.com/films/1300298",
          movieimg:
            "https://p0.meituan.net/movie/796b1f89ff41c74c5a09dada25cb6e3011342765.jpg@160w_220h_1e_1c",
          moviename: "太阳升起的时刻",
          moviestar: "主演：唐国强,任帅,刘之冰",
          movietime: "上映时间：2019-10-25",
          moviescore: "8.7"
        },
        {
          movienumber: "10",
          movielink: "https://maoyan.com/films/1284949",
          movieimg:
            "https://p0.meituan.net/movie/68ff3f7ce748da0d1d624e13c5672d532084613.jpg@160w_220h_1e_1c",
          moviename: "平原上的夏洛克",
          moviestar: "主演：张占义,宿树河,徐朝英",
          movietime: "上映时间：2019-11-29",
          moviescore: "8.6"
        }
      ]
    };
  }
};
</script>

<style>
#display {
  padding-left: 5%;
  padding-right: 5%;
}

.board-index {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #f7f7f7;
  font-size: 18px;
  color: #999;
  font-weight: 700;
  position: absolute;
  left: 0;
  top: 85px;
}
.image-link {
  display: inline-block;
  width: 160px;
  height: 220px;
  margin-left: 55px;
  position: relative;
}
.board-item-main {
  margin-left: 30px;
  height: 219px;
  float: right;
  line-height: 219px;
}
.board-item-content {
  margin-left: 90px;
  vertical-align: middle;
  font-size: 0;
  line-height: 1;
}
.movie-item-info {
  font-size: 16px;
  display: inline-block;
  vertical-align: middle;
}
a {
  text-decoration: none;
}

.board-item-content .name a {
  font-size: 26px;
  color: #333;
}

.board-item-content .releasetime {
  margin-top: 8px;
  color: #999;
}
.score-num {
  color: #ffb400;
}
.score-num .score {
  padding-right: 4px;
}

.score-num .integer {
  font-size: 56px;
  font-weight: 700;
}
</style>