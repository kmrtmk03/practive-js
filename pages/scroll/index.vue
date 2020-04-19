<template>
  <div class="container">
    <Artwork />
    <div class="content">
      <section class="section--0">
        <h1 class="title">Scroll</h1>
      </section>
      <section class="section section--1">
        <h2 class="section--title">Section-1</h2>
        <p>ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</p>
      </section>
      <section class="section section--2">
        <h2 class="section--title">Section-2</h2>
        <p>ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</p>
      </section>
    </div>
  </div>
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
  min-height: 500vh;
  background-color: rgba(255, 255, 255, 0.9);
}
.title {
  height: 100vh;
  line-height: 100vh;
  text-align: center;
  font-family: 'Helvetica';
  font-size: 10vw;
}
.section {
  width: 90vw;
  background-color: #fff;
  margin: 0 auto 1rem;
  padding: 0 1rem 1rem;
  @include mq(md) {
    margin: 0 auto 3rem;
    padding: 0 2rem 2rem;
  }
  &--title {
    font-size: 2.0rem;
    text-align: center;
    padding: 1.0rem 0;
    @include mq(md) {
      font-size: 2.4rem;
      padding: 2.0rem 0;
    }
  }
  &>p {
    font-size: 1.0rem;
    @include mq(md) {
      font-size: 1.4rem;
    }
  }
}
</style>