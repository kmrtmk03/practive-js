<template>
  <section class="container">
    <Artwork />
    <div class="content">
      <h1 class="title">Scroll</h1>
    </div>
  </section>
</template>

<script>
import Artwork from '@/components/ArtWork005/index.vue'

export default {
  components: {
    Artwork
  }
  
}
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  z-index: 2;
  height: 500vh;
  background-color: rgba(255, 255, 255, 0.9);
}
.title {
  height: 100vh;
  line-height: 100vh;
  text-align: center;
  font-family: 'Helvetica';
  font-size: 10vw;
}
</style>