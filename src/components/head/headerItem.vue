<template>
  <li @click="itemClick">
    <a :class="{active:isActive}">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: "headerItem",
  props: {
    path: String
  },
  data() {
    return {
      //isActive: true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    itemClick() {
      if (this.$router.path != this.path) {
        this.$router.push(this.path);
      }
    }
  }
};
</script>

<style scoped>
</style>