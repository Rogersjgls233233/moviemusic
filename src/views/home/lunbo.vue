<template>
  <div id="posters">
    <el-carousel indicator-position="outside" :height="imgHeight+'px'">
      <el-carousel-item v-for="(item,index) in posterimg" :key="index">
        <img ref="image" :src="item.src" class="lunbotu" alt="轮播图" style="width:100%" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
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
export default {
  name: "lunbo",
  methods: {
    imgLoad() {
      this.$nextTick(function() {
        console.log(this.$refs);

        this.imgHeight = this.$refs.image[0].height;
      });
    }
  },
  data() {
    return {
      posterimg: [
        { src: require("../../assets/posters/0.jpg") },
        { src: require("../../assets/posters/1.jpg") },
        { src: require("../../assets/posters/2.jpg") },
        { src: require("../../assets/posters/3.jpg") },
        { src: require("../../assets/posters/4.jpg") }
      ],
      imgHeight: ""
    };
  },
  created() {
    window.onload = () => {
      this.imgHeight = this.$refs.image[0].height;
    };
    this.imgLoad();
    window.addEventListener("resize", () => {
      this.imgHeight = this.$refs.image[0].height;
    });
  }
};
</script>

