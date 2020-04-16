<template>
  <section class="container">
    <div>
      <h1 class="title">Nuxt.js -- Practice</h1>
      <ul class="wrap-links">
        <li v-for="link of links" v-bind:key="link.id" class="link">
          <nuxt-link v-bind:to="{path: link.to}" class="button--link">{{link.text}}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: 0, to: '/svg', text: 'SVG'},
        { id: 1, to: '/svg-anime_js', text: 'svg-anime_js'},
        { id: 2, to: '/anime_js', text: 'anime.'},
        { id: 3, to: '/pixi', text: 'Pixi'},
        { id: 4, to: '/shader', text: 'Shader'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
}

.title {
  @include Title();
}

.wrap-links {
  padding: 0;
  margin: 3rem 0 0;
  width: 100vw;
  @include mq(md) {
    display: flex;
    width: 60vw;
    margin: 100px auto;
    justify-content: space-between;
  }
  .link {
    @include ButtonLg();
    margin: 0 auto 1rem;
    @include mq(md) {
      width: 10vw;
      height: 10vw;
      line-height: 10vw;
    }
    :first-child {
      margin-bottom: 0;
    }
  }
  .button--link {
    color: $base-color;
    display: block;
    text-align: center;
    :visited {
      color: $base-color;
    }
  }
}
</style>

